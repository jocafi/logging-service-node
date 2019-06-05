"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
/**
 * Logging Service implementation.
 *
 * <p/>Documentation: https://log4js-node.github.io/log4js-node/api.html
 */
class LoggingService {
    /**
     * Initialize the Logging Service.
     */
    static initializeLoggingService() {
        // initialize log service once
        if (!LoggingService.log) {
            // see https://log4js-node.github.io/log4js-node/layouts.html
            // TODO: test it : https://github.com/log4js-node/log4js-node/issues/471
            const patternLayout = {
                type: "pattern",
                pattern: "%[%d{hh:mm:ss.SSS} [%5.10p] %20.35c - %m%n%]"
            };
            const appender = {
                type: "stdout",
                layout: patternLayout
            };
            log4js_1.configure({
                appenders: {
                    out: appender
                },
                categories: {
                    default: { appenders: ["out"], level: "debug" }
                }
            });
            // create the default logger
            LoggingService.log = log4js_1.getLogger(".");
            LoggingService.log.info("LoggingService initialized.");
        }
    }
    /**
     * Get a logger with the same name as passed as parameter.
     * @param {string} loggerName Logger name.
     * @returns {Logger} Logger.
     */
    static getLogger(loggerName) {
        const logger = log4js_1.getLogger(loggerName);
        return logger;
    }
    static debug(text) {
        LoggingService.log.debug(text);
    }
    static info(text) {
        LoggingService.log.info(text);
    }
    static warn(text) {
        LoggingService.log.warn(text);
    }
    static error(text) {
        LoggingService.log.error(text);
    }
    static printError(extLogger, error, message = "An error has occurred: ") {
        extLogger.error(message + error);
    }
}
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging-service.js.map