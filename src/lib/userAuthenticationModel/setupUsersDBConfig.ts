import { PrismaClient as UsersDatabasePrismaClient } from "./generated/users-client"

declare global {
  // eslint-disable-next-line no-var
  var cachedPrismaUsersDatabase: UsersDatabasePrismaClient
}

let prismaUsersDatabase: UsersDatabasePrismaClient
if (process.env.NODE_ENV === "production") {
  prismaUsersDatabase = new UsersDatabasePrismaClient()
} else {
  if (!global.cachedPrismaUsersDatabase) {
    global.cachedPrismaUsersDatabase = new UsersDatabasePrismaClient()
  }
  prismaUsersDatabase = global.cachedPrismaUsersDatabase
}

export const db = prismaUsersDatabase
