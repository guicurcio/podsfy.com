/* eslint-disable import/no-extraneous-dependencies */
import { buildHTTPExecutor } from "@graphql-tools/executor-http"
import type { TypedDocumentNode } from "@graphql-typed-document-node/core"
import type { ASTNode, ExecutionResult, OperationDefinitionNode } from "graphql"
import { Kind } from "graphql"
import useSWR from "swr"

function createBuildExecutor(userToken) {
  const executor = buildHTTPExecutor({
    endpoint: "http://localhost:8080/v1/graphql",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  })
  return executor
}

const isOperationDefinition = (def: ASTNode): def is OperationDefinitionNode =>
  def.kind === Kind.OPERATION_DEFINITION

export function useSWRGraphQLClient<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  userToken: any,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const buildExecut = createBuildExecutor(userToken)

  console.log(userToken, "headers")
  console.log(buildExecut, "buildExecut")
  return useSWR(
    [
      // This logic can be customized as desired
      document.definitions.find(isOperationDefinition)?.name,
      variables,
    ] as const,
    async (_key, variables) =>
      buildExecut({
        document: document as any,
        variables,
      }) as Promise<ExecutionResult<TResult>>
  )
}
