import 'server-only';
import pino from 'pino';
import pretty from 'pino-pretty';

const isDev = process.env.NODE_ENV !== 'production';
const stream = isDev ? pretty({ colorize: true, translateTime: 'SYS:standard' }) : undefined;

const logger = pino({
  level: process.env['LOG_LEVEL'] ?? 'info',
}, stream);

export default logger;