import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { logger } from '@/src/lib';
import { headers } from 'next/headers';

export async function GET() {
  const startTime = Date.now();
  const requestId = crypto.randomUUID();

  logger.info({
    requestId,
    method: 'GET',
    route: '/api/resume',
    userAgent: (await headers()).get('user-agent')
  }, 'Resume download request started')

  try {
    const filePath = path.join(process.cwd(), 'public', 'downloads', 'resume', 'James-Reyes-Resume.pdf');

    logger.debug({ requestId, filePath }, 'Attempting to read resume file');

    const fileBuffer = await readFile(filePath);
    const fileSize = fileBuffer.length;

    logger.info({
      requestId,
      fileSize,
      duration: Date.now() - startTime
    }, 'Resume file served successfully');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="James-Reyes-Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    const duration = Date.now() - startTime;

    logger.error({
      requestId,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
      stack: error instanceof Error ? error.stack : undefined,
      duration
    }, 'Failed to serve resume file');

    return new NextResponse('PDF not found', { status: 404 });
  }
}