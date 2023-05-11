import winston from 'winston'
export const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${level}: ${message}`
    }),
  ),
  defaultMeta: {
    service: 'WinstonExample',
  },
})
