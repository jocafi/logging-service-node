import { Logger } from "log4js";
/**
 * Logging Service implementation.
 *
 * <p/>Documentation: https://log4js-node.github.io/log4js-node/api.html
 */
export declare class LoggingService {
    private static log;
    /**
     * Initialize the Logging Service.
     */
    static initializeLoggingService(): void;
    /**
     * Get a logger with the same name as passed as parameter.
     * @param {string} loggerName Logger name.
     * @returns {Logger} Logger.
     */
    static getLogger(loggerName: string): Logger;
    static debug(text: string): void;
    static info(text: string): void;
    static warn(text: string): void;
    static error(text: string): void;
    static printError(extLogger: Logger, error: any, message?: string): void;
}
