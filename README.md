# Logging Service for Nodejs
Logging Service for Nodejs or JavaScript engines which do not need to work with the window component.

It is based on the project [Log4js](https://log4js-node.github.io/log4js-node/index.html)
having it configured **out of the box** and **ready to be used**.

Developed using TypeScript and can also be used by JavaScript projects.

# Getting started
## Importing the project as library 

To use this project as a library in your project, import it running the command below:
```
npm install jocafi/logging-service-node
```
## How to use
 
**LoggingService** is the the main class that offers static methods for logging operations.

Import the library

`import { LoggingService } from "logging-service";`

First of all, you have to call once the _initializeLoggingService()_ method before calling any other method.


```JavaScript
export class StartAppService {
  private log: Logger;

  constructor() {
    LoggingService.initializeLoggingService();
    this.log = LoggingService.getLogger(StartAppService.name);
    this.log.debug('This is my debug mode.');
    this.log.info('Here are some information.');
    this.log.warn('*** WARNING ***.');
    this.log.error('It shows error messages.');
  }
  ...
}

export class MyOtherClass {
 private log = LoggingService.getLogger(MyOtherClass.name);
 ...
}

export class SupportService {
 constructor() {
     LoggingService.log.info("SupportService initialized.");
 }
 ...
}
```

The _StartAppService_ class shows how to initialize the logging service once during 
the initialization of your App and how to use the local log (_this.log_) variable to log.

Subsequent classes, as showed by **MyOtherClass** class, can now define and create 
the logger on the top of definition.  

Another possibility is to use directly the LoggingService to log using the _anonymous_ logger, 
as showed by **SupportService** class.