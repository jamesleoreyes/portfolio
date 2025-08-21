import logger from "./logger";
import { NextResponse } from "next/server";

export function errorHandler(error: unknown, requestId?: string) {
  const statusCode = error instanceof Error && 'statusCode' in error
    ? (error as any).statusCode as number
    : 500;

  const message = error instanceof Error ? error.message : 'An unexpected error occurred';

  logger.error({
    requestId,
    error: message,
    stack: error instanceof Error ? error.stack : undefined,
    statusCode
  }, 'API error occurred');

  return new NextResponse(
    JSON.stringify({
      success: false,
      message,
      requestId
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};