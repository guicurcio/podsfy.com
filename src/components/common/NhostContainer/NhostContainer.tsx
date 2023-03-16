"use client"

import { NhostProvider } from "@nhost/nextjs"
import { NhostApolloProvider } from "@nhost/react-apollo"
import { nhost } from "lib/setupBackendConfig"

/**
 * Props for the NhostContainer component.
 */
export interface NhostContainerProps {
  /**
   * Children to be rendered inside the component.
   */
  children?: React.ReactNode
}

/**
 * Wraps the children in a TooltipProvider.
 */
export default function NhostContainer({
  children,
}: NhostContainerProps): JSX.Element {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider
        fetchPolicy="cache-first"
        nhost={nhost}
        connectToDevTools={process.env.NEXT_PUBLIC_ENV === "dev"}
      >
        {children}{" "}
      </NhostApolloProvider>
    </NhostProvider>
  )
}

NhostContainer.displayName = "NhostContainer"
