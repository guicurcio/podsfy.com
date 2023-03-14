import { NhostClient } from "@nhost/nhost-js"

export type BackendUrl = {
  /**
   * Nhost backend URL
   * Will be deprecated in a future release. Please look at 'subdomain' and 'region' instead.
   */
  backendUrl: string
}

export type Subdomain = {
  /**
   * Project subdomain (e.g. `ieingiwnginwnfnegqwvdqwdwq`)
   * Use `localhost` during local development
   */
  subdomain: string

  /**
   * Project region (e.g. `eu-central-1`)
   * Project region is not required during local development (when `subdomain` is `localhost`)
   */
  region?: string
  /**
   * When set, the admin secret is sent as a header, `x-hasura-admin-secret`,
   * for all requests to GraphQL, Storage, and Serverless Functions.
   */
  adminSecret?: string
}

export type ServiceUrls = {
  authUrl?: string
  graphqlUrl?: string
  storageUrl?: string
  functionsUrl?: string
}

export type StorageGetter = (
  key: string
) => string | null | Promise<string | null>
export type StorageSetter = (
  key: string,
  value: string | null
) => void | Promise<void>

export interface ClientStorage {
  // custom
  // localStorage
  // AsyncStorage
  // https://react-native-community.github.io/async-storage/docs/usage
  setItem?: (_key: string, _value: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem?: (key: string) => any
  removeItem?: (key: string) => void

  // capacitor
  set?: (options: { key: string; value: string }) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get?: (options: { key: string }) => any
  remove?: (options: { key: string }) => void

  // expo-secure-storage
  setItemAsync?: (key: string, value: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItemAsync?: (key: string) => any
  deleteItemAsync?: (key: string) => void
  customGet?: (key: string) => Promise<string | null> | string | null
  customSet?: (key: string, value: string | null) => Promise<void> | void
}

// supported client storage types
export type ClientStorageType =
  | "capacitor"
  | "custom"
  | "expo-secure-storage"
  | "localStorage"
  | "react-native"
  | "web"
  | "cookie"

export interface AuthOptions {
  /** Time interval until token refreshes, in seconds */
  refreshIntervalTime?: number
  /**
   * Define a way to get information about the refresh token and its exipration date.
   * @default web */
  clientStorageType?: ClientStorageType
  /** Object where the refresh token will be persisted and read locally.
   *
   * Recommended values:
   * - `'web'` and `'cookies'`: no value is required
   * - `'react-native'`: `import Storage from @react-native-async-storage/async-storage`
   * - `'cookies'`: `localStorage`
   * - `'custom'`: an object that defines the following methods:
   *     - `setItem` or `setItemAsync`
   *     - `getItem` or `getItemAsync`
   *     - `removeItem`
   * - `'capacitor'`: `import { Storage } from @capacitor/storage`
   * - `'expo-secure-store'`: `import * as SecureStore from 'expo-secure-store'`
   */
  clientStorage?: ClientStorage
  /**
   *  @internal @deprecated Use clientStorage / clientStorageType instead  */
  clientStorageGetter?: StorageGetter
  /**
   * Define a way to set information about the refresh token and its exipration date.
   * @internal @deprecated  Use clientStorage / clientStorageType instead  */
  clientStorageSetter?: StorageSetter
  /** When set to true, will automatically refresh token before it expires */
  autoRefreshToken?: boolean
  /** When set to true, will parse the url on startup to check if it contains a refresh token to start the session with */
  autoSignIn?: boolean
  /** Activate devTools e.g. the ability to connect to the xstate inspector */
  devTools?: boolean
}

export interface NhostAuthConstructorParams extends AuthOptions {
  url: string
  start?: boolean
}

export type BackendOrSubdomain = BackendUrl | Subdomain

export interface NhostClientConstructorParams
  extends Partial<BackendUrl>,
    Partial<Subdomain>,
    Partial<ServiceUrls>,
    Omit<NhostAuthConstructorParams, "url"> {
  /**
   * When set, the admin secret is sent as a header, `x-hasura-admin-secret`,
   * for all requests to GraphQL, Storage, and Serverless Functions.
   */
  adminSecret?: string
}

type NewNhostClient = Omit<
  NhostClientConstructorParams,
  | "clientStorage"
  | "clientStorageType"
  | "clientStorageGetter"
  | "clientStorageSetter"
>

export const nhost = new NhostClient({
  authUrl: "http://localhost:4000",
  graphqlUrl: "http://localhost:8080/v1/graphql",
  storageUrl: "https://localhost:2000",
  functionsUrl: "https://localhost:5000",
})

export default nhost
