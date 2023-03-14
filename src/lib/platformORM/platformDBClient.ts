/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable vars-on-top */
import { PrismaClient as PlatformDatabasePrismaClient } from "./generated/platform-client"

declare global {
  // eslint-disable-next-line no-var
  var cachedPrismaPlatformDatabase: PlatformDatabasePrismaClient
}

let prismaPlatformDatabase: PlatformDatabasePrismaClient
if (process.env.NODE_ENV === "production") {
  prismaPlatformDatabase = new PlatformDatabasePrismaClient()
} else {
  if (!global.cachedPrismaPlatformDatabase) {
    global.cachedPrismaPlatformDatabase = new PlatformDatabasePrismaClient()
  }
  prismaPlatformDatabase = global.cachedPrismaPlatformDatabase
}

export const prismaPlatformDatabaseClient = prismaPlatformDatabase
