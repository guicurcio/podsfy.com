import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { HasuraAdapter } from 'next-auth-hasura-adapter';

export default NextAuth({
  adapter: HasuraAdapter({
    endpoint: "http://localhost:8080/v1/graphql",
    adminSecret: "myadminsecretkey",
  }),
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch("/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      },
    }),
  ],
});
