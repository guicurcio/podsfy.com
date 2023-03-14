import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "lib/userAuthenticationModel/setupUsersDBConfig"

export const authOptions: NextAuthOptions = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  adapter: PrismaAdapter(db as any),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
}

export default NextAuth({
  ...authOptions,
})
