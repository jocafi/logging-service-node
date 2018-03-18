import { configure, getLogger, Logger } from "log4js";

describe("Logging Service", () => {
  let log: Logger;

  beforeAll(()=> {
    configure({
      appenders: {
        out: { type: 'console' }
      },
      categories: {
        default: {appenders: ['out'], level: 'info'}
      }
    });

    console.log("here 1");
    log = getLogger("LoggingService");
    console.log("here 2");
  });

  it("should log", () =>  {
    console.log("here 3");
    log.info("Test.");
    console.log("here 4");
  });
});