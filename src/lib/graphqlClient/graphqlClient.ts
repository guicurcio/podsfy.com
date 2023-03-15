import { GraphQLClient } from "graphql-request"

/**
 * graphqlClient
 */
export interface graphqlClientArgs {
  /**
   *
   */
}

/**
 *
 * graphqlClient
 *
 * @param
 * @returns
 */
export default function graphqlClient() {
  const graphqlClient = new GraphQLClient({
    url: "http://localhost:8080/v1/graphql",
    headers: {
      "x-api-key": "..",
    },
  })
}
