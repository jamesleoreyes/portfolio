import { NextResponse } from "next/server";
import { after } from 'next/server';
import { logger } from "./src/lib";

export function middleware(request: Request) {
  const startTime = Date.now();
  const requestId = crypto.randomUUID();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-id', requestId);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  after(() => {
    const duration = Date.now() - startTime;

    logger.info({
      requestId,
      method: request.method,
      url: request.url,
      duration,
      status: response.status,
      headers: {
        'user-agent': request.headers.get('user-agent'),
        'accept': request.headers.get('accept'),
      },
    }, 'Request processed');
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
}