import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "hello123",
        },
      },
    },
  ],
  documents: ["./src/gql/**/*.graphql", "./src/gql/**/*.gql"],
  generates: {
    "./src/graphql/schemas/generated/apollo/apollo.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
}

export default config
