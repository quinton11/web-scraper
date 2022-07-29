import { createLogger, format, transport, transports } from "winston";
import fs from "fs";
import { join } from "path";

//Log to file
const directory = join(__dirname, "../log");
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

export const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: { service: "user-service" },
  transports: new transports.File({
    dirname: directory,
    filename: "scrape.log",
  }),
});
