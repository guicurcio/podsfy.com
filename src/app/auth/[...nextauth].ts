import NextAuth from "next-auth";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  adapter: HasuraAdapter({
    endpoint: "http://localhost:8080/v1/graphql",
    adminSecret: "myadminsecretkey",
  }),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
