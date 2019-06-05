import { ConsoleAppender, configure, getLogger, Logger, PatternLayout, StandardOutputAppender } from "log4js";

/**
 * Logging Service implementation.
 *
 * <p/>Documentation: https://log4js-node.github.io/log4js-node/api.html
 */
export class LoggingService {

  // Browser Console Logging appender
  private static log: Logger;

  /**
   * Initialize the Logging Service.
   */
  static initializeLoggingService() {

    // initialize log service once
    if (!LoggingService.log) {

      // see https://log4js-node.github.io/log4js-node/layouts.html
      // TODO: test it : https://github.com/log4js-node/log4js-node/issues/471
      const patternLayout: PatternLayout = {
        type: "pattern",
        pattern: "%[%d{hh:mm:ss.SSS} [%5.10p] %20.35c - %m%n%]"
      };

      const appender: StandardOutputAppender = {
        type: "stdout",
        layout: patternLayout
      };

      configure({
        appenders: {
          out: appender
        },
        categories: {
          default: {appenders: ["out"], level: "debug"}
        }
      });

      // create the default logger
      LoggingService.log = getLogger(".");
      LoggingService.log.info("LoggingService initialized.");
    }
  }

  /**
   * Get a logger with the same name as passed as parameter.
   * @param {string} loggerName Logger name.
   * @returns {Logger} Logger.
   */
  static getLogger(loggerName: string): Logger {
    const logger = getLogger(loggerName);
    return logger;
  }

  static debug(text: string) {
    LoggingService.log.debug(text);
  }

  static info(text: string) {
    LoggingService.log.info(text);
  }

  static warn(text: string) {
    LoggingService.log.warn(text);
  }

  static error(text: string) {
    LoggingService.log.error(text);
  }

  static printError(extLogger: Logger, error: any, message: string = "An error has occurred: ") {
    extLogger.error(message + error);
  }

}
