export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export type AuthProviderRequests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'provider_requests_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export type AuthProviderRequests_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export type AuthProviderRequests_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders_UserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders_UserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export type AuthProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export type AuthProviders_Select_Column =
  /** column name */
  | 'id';

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export type AuthProviders_Update_Column =
  /** column name */
  | 'id';

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
  refreshTokenHash?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type AuthRefreshTokens_Constraint =
  /** unique or primary key constraint on columns "refresh_token" */
  | 'refresh_tokens_pkey';

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'refreshTokenHash'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'userId';

export type AuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles_UserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles_UserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles_UsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles_UsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export type AuthRoles_Constraint =
  /** unique or primary key constraint on columns "role" */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export type AuthRoles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export type AuthRoles_Update_Column =
  /** column name */
  | 'role';

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export type AuthUserProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_providers_pkey'
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  | 'user_providers_provider_id_provider_user_id_key'
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  | 'user_providers_user_id_provider_id_key';

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export type AuthUserProviders_Select_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export type AuthUserProviders_Update_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export type AuthUserRoles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_roles_pkey'
  /** unique or primary key constraint on columns "user_id", "role" */
  | 'user_roles_user_id_role_key';

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export type AuthUserRoles_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export type AuthUserRoles_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Constraint =
  /** unique or primary key constraint on columns "credential_id" */
  | 'user_security_key_credential_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_security_keys_pkey';

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Select_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Update_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "favorites" */
export type Favorites = {
  __typename?: 'favorites';
  id: Scalars['uuid'];
  podcast_id: Scalars['uuid'];
  profile_id: Scalars['uuid'];
};

/** aggregated selection of "favorites" */
export type Favorites_Aggregate = {
  __typename?: 'favorites_aggregate';
  aggregate?: Maybe<Favorites_Aggregate_Fields>;
  nodes: Array<Favorites>;
};

/** aggregate fields of "favorites" */
export type Favorites_Aggregate_Fields = {
  __typename?: 'favorites_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Favorites_Max_Fields>;
  min?: Maybe<Favorites_Min_Fields>;
};


/** aggregate fields of "favorites" */
export type Favorites_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<Favorites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "favorites". All fields are combined with a logical 'AND'. */
export type Favorites_Bool_Exp = {
  _and?: InputMaybe<Array<Favorites_Bool_Exp>>;
  _not?: InputMaybe<Favorites_Bool_Exp>;
  _or?: InputMaybe<Array<Favorites_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  podcast_id?: InputMaybe<Uuid_Comparison_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "favorites" */
export type Favorites_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'favorites_pkey';

/** input type for inserting data into table "favorites" */
export type Favorites_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Favorites_Max_Fields = {
  __typename?: 'favorites_max_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Favorites_Min_Fields = {
  __typename?: 'favorites_min_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "favorites" */
export type Favorites_Mutation_Response = {
  __typename?: 'favorites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Favorites>;
};

/** on_conflict condition type for table "favorites" */
export type Favorites_On_Conflict = {
  constraint: Favorites_Constraint;
  update_columns?: Array<Favorites_Update_Column>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};

/** Ordering options when selecting data from "favorites". */
export type Favorites_Order_By = {
  id?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: favorites */
export type Favorites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "favorites" */
export type Favorites_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id';

/** input type for updating data in table "favorites" */
export type Favorites_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "favorites" */
export type Favorites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Favorites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Favorites_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "favorites" */
export type Favorites_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id';

export type Favorites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Favorites_Set_Input>;
  /** filter the rows which have to be updated */
  where: Favorites_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "favorites" */
  delete_favorites?: Maybe<Favorites_Mutation_Response>;
  /** delete single row from the table: "favorites" */
  delete_favorites_by_pk?: Maybe<Favorites>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "ratings" */
  delete_ratings?: Maybe<Ratings_Mutation_Response>;
  /** delete single row from the table: "ratings" */
  delete_ratings_by_pk?: Maybe<Ratings>;
  /** delete data from the table: "watchlist" */
  delete_watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** delete single row from the table: "watchlist" */
  delete_watchlist_by_pk?: Maybe<Watchlist>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "favorites" */
  insert_favorites?: Maybe<Favorites_Mutation_Response>;
  /** insert a single row into the table: "favorites" */
  insert_favorites_one?: Maybe<Favorites>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "ratings" */
  insert_ratings?: Maybe<Ratings_Mutation_Response>;
  /** insert a single row into the table: "ratings" */
  insert_ratings_one?: Maybe<Ratings>;
  /** insert data into the table: "watchlist" */
  insert_watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** insert a single row into the table: "watchlist" */
  insert_watchlist_one?: Maybe<Watchlist>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "favorites" */
  update_favorites?: Maybe<Favorites_Mutation_Response>;
  /** update single row of the table: "favorites" */
  update_favorites_by_pk?: Maybe<Favorites>;
  /** update multiples rows of table: "favorites" */
  update_favorites_many?: Maybe<Array<Maybe<Favorites_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "ratings" */
  update_ratings?: Maybe<Ratings_Mutation_Response>;
  /** update single row of the table: "ratings" */
  update_ratings_by_pk?: Maybe<Ratings>;
  /** update multiples rows of table: "ratings" */
  update_ratings_many?: Maybe<Array<Maybe<Ratings_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "watchlist" */
  update_watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** update single row of the table: "watchlist" */
  update_watchlist_by_pk?: Maybe<Watchlist>;
  /** update multiples rows of table: "watchlist" */
  update_watchlist_many?: Maybe<Array<Maybe<Watchlist_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_Root_DeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_FavoritesArgs = {
  where: Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_Favorites_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_Delete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_Profiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_Delete_RatingsArgs = {
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_Ratings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_Delete_WatchlistArgs = {
  where: Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_Watchlist_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_InsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_FavoritesArgs = {
  objects: Array<Favorites_Insert_Input>;
  on_conflict?: InputMaybe<Favorites_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Favorites_OneArgs = {
  object: Favorites_Insert_Input;
  on_conflict?: InputMaybe<Favorites_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_RatingsArgs = {
  objects: Array<Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Ratings_OneArgs = {
  object: Ratings_Insert_Input;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_WatchlistArgs = {
  objects: Array<Watchlist_Insert_Input>;
  on_conflict?: InputMaybe<Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Watchlist_OneArgs = {
  object: Watchlist_Insert_Input;
  on_conflict?: InputMaybe<Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_UpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_FavoritesArgs = {
  _set?: InputMaybe<Favorites_Set_Input>;
  where: Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_Favorites_By_PkArgs = {
  _set?: InputMaybe<Favorites_Set_Input>;
  pk_columns: Favorites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_Update_Favorites_ManyArgs = {
  updates: Array<Favorites_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_ProfilesArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_Update_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_RatingsArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  pk_columns: Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_Update_Ratings_ManyArgs = {
  updates: Array<Ratings_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_Root_Update_WatchlistArgs = {
  _set?: InputMaybe<Watchlist_Set_Input>;
  where: Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_Watchlist_By_PkArgs = {
  _set?: InputMaybe<Watchlist_Set_Input>;
  pk_columns: Watchlist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_Update_Watchlist_ManyArgs = {
  updates: Array<Watchlist_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** profile connected to users */
export type Profiles = {
  __typename?: 'profiles';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  creator_user_id: Scalars['uuid'];
  id: Scalars['uuid'];
  karma?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_num: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  karma?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile_num?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export type Profiles_Constraint =
  /** unique or primary key constraint on columns "creator_user_id" */
  | 'profile_creator_user_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'profile_pkey'
  /** unique or primary key constraint on columns "profile_num" */
  | 'profile_profile_num_key'
  /** unique or primary key constraint on columns "username" */
  | 'profile_username_key';

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  profile_num?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  creator_user_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  karma?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_num?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  karma?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_num?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  karma?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_num?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  avatar?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  karma?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_num?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "profiles" */
export type Profiles_Select_Column =
  /** column name */
  | 'avatar'
  /** column name */
  | 'bio'
  /** column name */
  | 'created_at'
  /** column name */
  | 'creator_user_id'
  /** column name */
  | 'id'
  /** column name */
  | 'karma'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'profile_num'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'username'
  /** column name */
  | 'website';

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  creator_user_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  karma?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_num?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  creator_user_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  karma?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_num?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  profile_num?: Maybe<Scalars['Int']>;
};

/** update columns of table "profiles" */
export type Profiles_Update_Column =
  /** column name */
  | 'avatar'
  /** column name */
  | 'bio'
  /** column name */
  | 'created_at'
  /** column name */
  | 'creator_user_id'
  /** column name */
  | 'id'
  /** column name */
  | 'karma'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'profile_num'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'username'
  /** column name */
  | 'website';

export type Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  profile_num?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>;
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "watchlist" */
  watchlist: Array<Watchlist>;
  /** fetch aggregated fields from the table: "watchlist" */
  watchlist_aggregate: Watchlist_Aggregate;
  /** fetch data from the table: "watchlist" using primary key columns */
  watchlist_by_pk?: Maybe<Watchlist>;
};


export type Query_Root_AuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_Root_AuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_AuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_Root_AuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_Root_AuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_Root_AuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_Root_AuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_Root_AuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_Root_AuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_Root_AuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_Root_AuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_Root_AuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_Root_AuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_AuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_Root_AuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_Root_AuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_AuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_Root_AuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_Root_AuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_AuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_Root_AuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_Root_FavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Query_Root_Favorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Query_Root_Favorites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_Root_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_Root_Profiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_Root_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_Root_Ratings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_UserArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_UsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_Root_UsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_Root_WatchlistArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Query_Root_Watchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Query_Root_Watchlist_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "ratings" */
export type Ratings = {
  __typename?: 'ratings';
  id: Scalars['uuid'];
  podcast_id: Scalars['uuid'];
  profile_id: Scalars['uuid'];
  rating: Scalars['Int'];
};

/** aggregated selection of "ratings" */
export type Ratings_Aggregate = {
  __typename?: 'ratings_aggregate';
  aggregate?: Maybe<Ratings_Aggregate_Fields>;
  nodes: Array<Ratings>;
};

/** aggregate fields of "ratings" */
export type Ratings_Aggregate_Fields = {
  __typename?: 'ratings_aggregate_fields';
  avg?: Maybe<Ratings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ratings_Max_Fields>;
  min?: Maybe<Ratings_Min_Fields>;
  stddev?: Maybe<Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_Sum_Fields>;
  var_pop?: Maybe<Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_Var_Samp_Fields>;
  variance?: Maybe<Ratings_Variance_Fields>;
};


/** aggregate fields of "ratings" */
export type Ratings_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ratings_Avg_Fields = {
  __typename?: 'ratings_avg_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ratings". All fields are combined with a logical 'AND'. */
export type Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Ratings_Bool_Exp>>;
  _not?: InputMaybe<Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Ratings_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  podcast_id?: InputMaybe<Uuid_Comparison_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ratings" */
export type Ratings_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'ratings_pkey'
  /** unique or primary key constraint on columns "podcast_id", "profile_id" */
  | 'ratings_profile_id_podcast_id_key';

/** input type for incrementing numeric columns in table "ratings" */
export type Ratings_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ratings" */
export type Ratings_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ratings_Max_Fields = {
  __typename?: 'ratings_max_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Ratings_Min_Fields = {
  __typename?: 'ratings_min_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "ratings" */
export type Ratings_Mutation_Response = {
  __typename?: 'ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ratings>;
};

/** on_conflict condition type for table "ratings" */
export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns?: Array<Ratings_Update_Column>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "ratings". */
export type Ratings_Order_By = {
  id?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ratings */
export type Ratings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ratings" */
export type Ratings_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id'
  /** column name */
  | 'rating';

/** input type for updating data in table "ratings" */
export type Ratings_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ratings_Stddev_Fields = {
  __typename?: 'ratings_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ratings_Stddev_Pop_Fields = {
  __typename?: 'ratings_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ratings_Stddev_Samp_Fields = {
  __typename?: 'ratings_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "ratings" */
export type Ratings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ratings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ratings_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Ratings_Sum_Fields = {
  __typename?: 'ratings_sum_fields';
  rating?: Maybe<Scalars['Int']>;
};

/** update columns of table "ratings" */
export type Ratings_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id'
  /** column name */
  | 'rating';

export type Ratings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ratings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ratings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ratings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ratings_Var_Pop_Fields = {
  __typename?: 'ratings_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ratings_Var_Samp_Fields = {
  __typename?: 'ratings_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ratings_Variance_Fields = {
  __typename?: 'ratings_variance_fields';
  rating?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>;
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>;
  /** fetch data from the table in a streaming manner: "favorites" */
  favorites_stream: Array<Favorites>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
  /** fetch data from the table in a streaming manner: "ratings" */
  ratings_stream: Array<Ratings>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "watchlist" */
  watchlist: Array<Watchlist>;
  /** fetch aggregated fields from the table: "watchlist" */
  watchlist_aggregate: Watchlist_Aggregate;
  /** fetch data from the table: "watchlist" using primary key columns */
  watchlist_by_pk?: Maybe<Watchlist>;
  /** fetch data from the table in a streaming manner: "watchlist" */
  watchlist_stream: Array<Watchlist>;
};


export type Subscription_Root_AuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_Root_AuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_AuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_Root_AuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_Root_AuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_Root_AuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_Root_AuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_Root_AuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_Root_AuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_Root_AuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_Root_AuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_Root_AuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_Root_AuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_Root_AuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_Root_AuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_Root_AuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_Root_AuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_AuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_Root_AuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_Root_AuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_Root_AuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_AuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_Root_AuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_Root_AuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_Root_AuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_AuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_Root_AuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_Root_AuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_Root_FavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_Root_Favorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_Root_Favorites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Favorites_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Favorites_Stream_Cursor_Input>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_Root_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_Root_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_Root_Profiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Profiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_Root_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_Root_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_Root_Ratings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Ratings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ratings_Stream_Cursor_Input>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_Root_UserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_UsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_Root_UsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_Root_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_Root_WatchlistArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Subscription_Root_Watchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Subscription_Root_Watchlist_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Watchlist_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Watchlist_Stream_Cursor_Input>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_RefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_RefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_RolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_SecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_SecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_UserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_UserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "phone_number" */
  | 'users_phone_number_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export type Users_Select_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export type Users_Update_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "watchlist" */
export type Watchlist = {
  __typename?: 'watchlist';
  id: Scalars['uuid'];
  podcast_id: Scalars['uuid'];
  profile_id: Scalars['uuid'];
};

/** aggregated selection of "watchlist" */
export type Watchlist_Aggregate = {
  __typename?: 'watchlist_aggregate';
  aggregate?: Maybe<Watchlist_Aggregate_Fields>;
  nodes: Array<Watchlist>;
};

/** aggregate fields of "watchlist" */
export type Watchlist_Aggregate_Fields = {
  __typename?: 'watchlist_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Watchlist_Max_Fields>;
  min?: Maybe<Watchlist_Min_Fields>;
};


/** aggregate fields of "watchlist" */
export type Watchlist_Aggregate_Fields_CountArgs = {
  columns?: InputMaybe<Array<Watchlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "watchlist". All fields are combined with a logical 'AND'. */
export type Watchlist_Bool_Exp = {
  _and?: InputMaybe<Array<Watchlist_Bool_Exp>>;
  _not?: InputMaybe<Watchlist_Bool_Exp>;
  _or?: InputMaybe<Array<Watchlist_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  podcast_id?: InputMaybe<Uuid_Comparison_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "watchlist" */
export type Watchlist_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'watchlist_pkey';

/** input type for inserting data into table "watchlist" */
export type Watchlist_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Watchlist_Max_Fields = {
  __typename?: 'watchlist_max_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Watchlist_Min_Fields = {
  __typename?: 'watchlist_min_fields';
  id?: Maybe<Scalars['uuid']>;
  podcast_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "watchlist" */
export type Watchlist_Mutation_Response = {
  __typename?: 'watchlist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Watchlist>;
};

/** on_conflict condition type for table "watchlist" */
export type Watchlist_On_Conflict = {
  constraint: Watchlist_Constraint;
  update_columns?: Array<Watchlist_Update_Column>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};

/** Ordering options when selecting data from "watchlist". */
export type Watchlist_Order_By = {
  id?: InputMaybe<Order_By>;
  podcast_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: watchlist */
export type Watchlist_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "watchlist" */
export type Watchlist_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id';

/** input type for updating data in table "watchlist" */
export type Watchlist_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "watchlist" */
export type Watchlist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Watchlist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Watchlist_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  podcast_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "watchlist" */
export type Watchlist_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'podcast_id'
  /** column name */
  | 'profile_id';

export type Watchlist_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Watchlist_Set_Input>;
  /** filter the rows which have to be updated */
  where: Watchlist_Bool_Exp;
};


export default {
  introspection: {
    "__schema": {
      "queryType": {
        "name": "query_root"
      },
      "mutationType": {
        "name": "mutation_root"
      },
      "subscriptionType": {
        "name": "subscription_root"
      },
      "types": [
        {
          "kind": "SCALAR",
          "name": "Boolean"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Boolean_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "Float"
        },
        {
          "kind": "SCALAR",
          "name": "Int"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Int_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "String"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "String_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_ilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_iregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_like",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_niregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nlike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nsimilar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_regex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_similar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "args": [
                {
                  "name": "path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_append_input",
          "inputFields": [
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "options",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviderRequests_constraint",
          "enumValues": [
            {
              "name": "provider_requests_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_delete_at_path_input",
          "inputFields": [
            {
              "name": "options",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_delete_elem_input",
          "inputFields": [
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_delete_key_input",
          "inputFields": [
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_insert_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authProviderRequests_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authProviderRequests_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_order_by",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "options",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_prepend_input",
          "inputFields": [
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviderRequests_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "options"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_set_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authProviderRequests_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviderRequests_update_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "options"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviderRequests_updates",
          "inputFields": [
            {
              "name": "_append",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_append_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_at_path",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_delete_at_path_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_elem",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_delete_elem_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_key",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_delete_key_input",
                "ofType": null
              }
            },
            {
              "name": "_prepend",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_prepend_input",
                "ofType": null
              }
            },
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviderRequests_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authProviderRequests_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviders",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_aggregate_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviders_constraint",
          "enumValues": [
            {
              "name": "providers_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_insert_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_arr_rel_insert_input",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_obj_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authProviders_insert_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authProviders_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authProviders_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_order_by",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_aggregate_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviders_select_column",
          "enumValues": [
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_set_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authProviders_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviders_update_column",
          "enumValues": [
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authProviders_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authProviders_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_aggregate_bool_exp",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_aggregate_bool_exp_count",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_aggregate_bool_exp_count",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "authRefreshTokens_select_column",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_aggregate_order_by",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_min_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRefreshTokens_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRefreshTokens_constraint",
          "enumValues": [
            {
              "name": "refresh_tokens_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_insert_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_max_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_max_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_min_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_min_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authRefreshTokens_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authRefreshTokens_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_pk_columns_input",
          "inputFields": [
            {
              "name": "refreshToken",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRefreshTokens_select_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "expiresAt"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "refreshTokenHash"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_set_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authRefreshTokens_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "refreshTokenHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRefreshTokens_update_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "expiresAt"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRefreshTokens_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authRefreshTokens_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRoles",
          "fields": [
            {
              "name": "role",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "userRoles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "usersByDefaultRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "usersByDefaultRole_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "userRoles",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userRoles_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_aggregate_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "usersByDefaultRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "usersByDefaultRole_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_aggregate_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRoles_constraint",
          "enumValues": [
            {
              "name": "roles_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_insert_input",
          "inputFields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userRoles",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_arr_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "usersByDefaultRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_arr_rel_insert_input",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_max_fields",
          "fields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_min_fields",
          "fields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_obj_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authRoles_insert_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authRoles_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authRoles_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_order_by",
          "inputFields": [
            {
              "name": "role",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userRoles_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "usersByDefaultRole_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_aggregate_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_pk_columns_input",
          "inputFields": [
            {
              "name": "role",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRoles_select_column",
          "enumValues": [
            {
              "name": "role"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_set_input",
          "inputFields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authRoles_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRoles_update_column",
          "enumValues": [
            {
              "name": "role"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authRoles_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authRoles_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders",
          "fields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "provider",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "providerId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_aggregate_bool_exp",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_aggregate_bool_exp_count",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_aggregate_bool_exp_count",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "authUserProviders_select_column",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_aggregate_order_by",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_min_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserProviders_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "accessToken",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "provider",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserProviders_constraint",
          "enumValues": [
            {
              "name": "user_providers_pkey"
            },
            {
              "name": "user_providers_provider_id_provider_user_id_key"
            },
            {
              "name": "user_providers_user_id_provider_id_key"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_insert_input",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "provider",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_max_fields",
          "fields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_max_order_by",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_min_fields",
          "fields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_min_order_by",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authUserProviders_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authUserProviders_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_order_by",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "provider",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authProviders_order_by",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserProviders_select_column",
          "enumValues": [
            {
              "name": "accessToken"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "providerId"
            },
            {
              "name": "providerUserId"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_set_input",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserProviders_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserProviders_update_column",
          "enumValues": [
            {
              "name": "accessToken"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "providerId"
            },
            {
              "name": "providerUserId"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserProviders_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserProviders_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "role",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "roleByRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_aggregate_bool_exp",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_aggregate_bool_exp_count",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_aggregate_bool_exp_count",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "authUserRoles_select_column",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_aggregate_order_by",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_min_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserRoles_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "roleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserRoles_constraint",
          "enumValues": [
            {
              "name": "user_roles_pkey"
            },
            {
              "name": "user_roles_user_id_role_key"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_insert_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "roleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_max_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_max_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_min_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_min_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authUserRoles_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authUserRoles_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_order_by",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "roleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_order_by",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserRoles_select_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "role"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_set_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserRoles_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserRoles_update_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "role"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserRoles_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserRoles_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "transports",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_aggregate_bool_exp",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_aggregate_bool_exp_count",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_aggregate_bool_exp_count",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "authUserSecurityKeys_select_column",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_aggregate_order_by",
          "inputFields": [
            {
              "name": "avg",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_avg_order_by",
                "ofType": null
              }
            },
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_min_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_stddev_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_stddev_pop_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_stddev_samp_order_by",
                "ofType": null
              }
            },
            {
              "name": "sum",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_sum_order_by",
                "ofType": null
              }
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_var_pop_order_by",
                "ofType": null
              }
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_var_samp_order_by",
                "ofType": null
              }
            },
            {
              "name": "variance",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_variance_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserSecurityKeys_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_avg_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_avg_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "counter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bytea_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserSecurityKeys_constraint",
          "enumValues": [
            {
              "name": "user_security_key_credential_id_key"
            },
            {
              "name": "user_security_keys_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_inc_input",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_insert_input",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_max_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_max_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_min_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_min_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "authUserSecurityKeys_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "authUserSecurityKeys_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "user",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_order_by",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserSecurityKeys_select_column",
          "enumValues": [
            {
              "name": "counter"
            },
            {
              "name": "credentialId"
            },
            {
              "name": "credentialPublicKey"
            },
            {
              "name": "id"
            },
            {
              "name": "nickname"
            },
            {
              "name": "transports"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_set_input",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_stddev_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_pop_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_stddev_pop_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_samp_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_stddev_samp_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserSecurityKeys_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "credentialPublicKey",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_sum_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_sum_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserSecurityKeys_update_column",
          "enumValues": [
            {
              "name": "counter"
            },
            {
              "name": "credentialId"
            },
            {
              "name": "credentialPublicKey"
            },
            {
              "name": "id"
            },
            {
              "name": "nickname"
            },
            {
              "name": "transports"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_updates",
          "inputFields": [
            {
              "name": "_inc",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_inc_input",
                "ofType": null
              }
            },
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "authUserSecurityKeys_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_var_pop_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_var_pop_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_var_samp_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_var_samp_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_variance_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "authUserSecurityKeys_variance_order_by",
          "inputFields": [
            {
              "name": "counter",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "bigint"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "bigint_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bigint",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bigint",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "bytea"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "bytea_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bytea",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "bytea",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bytea",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "citext"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "citext_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_ilike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "citext",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_iregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_like",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nilike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "citext",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_niregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nlike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nsimilar",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_regex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_similar",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "cursor_ordering",
          "enumValues": [
            {
              "name": "ASC"
            },
            {
              "name": "DESC"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "favorites",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "favorites_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "favorites",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "favorites_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "favorites_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "favorites_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "favorites_constraint",
          "enumValues": [
            {
              "name": "favorites_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_insert_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "favorites_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "favorites_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "favorites_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "favorites",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "favorites_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "favorites_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "favorites_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_order_by",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "favorites_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_set_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "favorites_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "favorites_update_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "favorites_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "favorites_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "favorites_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "jsonb"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_cast_exp",
          "inputFields": [
            {
              "name": "String",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_comparison_exp",
          "inputFields": [
            {
              "name": "_cast",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_cast_exp",
                "ofType": null
              }
            },
            {
              "name": "_contained_in",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_contains",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_has_key",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_has_keys_all",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_has_keys_any",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "mutation_root",
          "fields": [
            {
              "name": "deleteAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviderRequests_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviders_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRefreshTokens_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRoles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserProviders_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserRoles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserSecurityKeys_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_favorites",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "favorites_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_favorites_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "favorites",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_profiles",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "profiles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_profiles_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "profiles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_ratings",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ratings_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_ratings_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "ratings",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_watchlist",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "watchlist_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_watchlist_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "insertAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviders_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviderRequests_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authProviderRequests_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authProviders_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRefreshTokens_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authRefreshTokens_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRoles_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authRoles_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserProviders_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserProviders_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserRoles_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserRoles_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserSecurityKeys_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserSecurityKeys_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insertUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "users_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_favorites",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "favorites_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_favorites_one",
              "type": {
                "kind": "OBJECT",
                "name": "favorites",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "favorites_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_profiles",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "profiles_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_profiles_one",
              "type": {
                "kind": "OBJECT",
                "name": "profiles",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "profiles_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_ratings",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "ratings_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_ratings_one",
              "type": {
                "kind": "OBJECT",
                "name": "ratings",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ratings_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_watchlist",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "watchlist_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_watchlist_one",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "watchlist_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "updateAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviders_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_append_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_at_path_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_elem_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_key_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_prepend_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviderRequests_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_append_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_at_path_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_elem_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_delete_key_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_prepend_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviderRequests_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authProviders_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRefreshTokens_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRefreshTokens_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRoles_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authRoles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserProviders_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserProviders_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserRoles_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserRoles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserSecurityKeys_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "authUserSecurityKeys_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_append_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_at_path_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_elem_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_key_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_prepend_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "updateUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_append_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_at_path_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_elem_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_delete_key_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_prepend_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authProviderRequests_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authProviderRequests_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authProviders_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authProviders_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authRefreshTokens_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authRefreshTokens_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authRoles_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authRoles_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserProviders_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserProviders_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserRoles_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserRoles_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserSecurityKeys_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "authUserSecurityKeys_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_favorites",
              "type": {
                "kind": "OBJECT",
                "name": "favorites_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "favorites_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_favorites_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "favorites",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "favorites_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_favorites_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "favorites_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "favorites_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_profiles",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "profiles_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_profiles_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "profiles",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "profiles_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_profiles_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "profiles_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "profiles_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_ratings",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ratings_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_ratings_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "ratings",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_inc_input",
                    "ofType": null
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ratings_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_ratings_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ratings_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "ratings_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_users_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "users_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_watchlist",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "watchlist_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_watchlist_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "watchlist_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_watchlist_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "watchlist_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "watchlist_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "order_by",
          "enumValues": [
            {
              "name": "asc"
            },
            {
              "name": "asc_nulls_first"
            },
            {
              "name": "asc_nulls_last"
            },
            {
              "name": "desc"
            },
            {
              "name": "desc_nulls_first"
            },
            {
              "name": "desc_nulls_last"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "profiles",
          "fields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "created_at",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "username",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "profiles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "profiles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "profiles_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_avg_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "profiles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "avatar",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "bio",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "created_at",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "karma",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "username",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "website",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "profiles_constraint",
          "enumValues": [
            {
              "name": "profile_creator_user_id_key"
            },
            {
              "name": "profile_pkey"
            },
            {
              "name": "profile_profile_num_key"
            },
            {
              "name": "profile_username_key"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_inc_input",
          "inputFields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_insert_input",
          "inputFields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "created_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "profiles_max_fields",
          "fields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "created_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_min_fields",
          "fields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "created_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "profiles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "profiles_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "profiles_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "profiles_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_order_by",
          "inputFields": [
            {
              "name": "avatar",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "bio",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "created_at",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "karma",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "username",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "website",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "profiles_select_column",
          "enumValues": [
            {
              "name": "avatar"
            },
            {
              "name": "bio"
            },
            {
              "name": "created_at"
            },
            {
              "name": "creator_user_id"
            },
            {
              "name": "id"
            },
            {
              "name": "karma"
            },
            {
              "name": "location"
            },
            {
              "name": "name"
            },
            {
              "name": "profile_num"
            },
            {
              "name": "updated_at"
            },
            {
              "name": "username"
            },
            {
              "name": "website"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_set_input",
          "inputFields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "created_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "profiles_stddev_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_stddev_pop_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_stddev_samp_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "profiles_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "avatar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "bio",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "created_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "creator_user_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "karma",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "name": "updated_at",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "website",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "profiles_sum_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "profiles_update_column",
          "enumValues": [
            {
              "name": "avatar"
            },
            {
              "name": "bio"
            },
            {
              "name": "created_at"
            },
            {
              "name": "creator_user_id"
            },
            {
              "name": "id"
            },
            {
              "name": "karma"
            },
            {
              "name": "location"
            },
            {
              "name": "name"
            },
            {
              "name": "profile_num"
            },
            {
              "name": "updated_at"
            },
            {
              "name": "username"
            },
            {
              "name": "website"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "profiles_updates",
          "inputFields": [
            {
              "name": "_inc",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "profiles_inc_input",
                "ofType": null
              }
            },
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "profiles_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "profiles_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "profiles_var_pop_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_var_samp_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "profiles_variance_fields",
          "fields": [
            {
              "name": "profile_num",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "query_root",
          "fields": [
            {
              "name": "authProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviderRequests_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviderRequestsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviderRequests_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokensAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeysAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "favorites",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "favorites_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "favorites_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "favorites_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "favorites_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "favorites_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "favorites",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "profiles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "profiles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "profiles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "profiles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "profiles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "profiles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "profiles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "profiles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "profiles_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "profiles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "ratings",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ratings",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ratings_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ratings_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ratings_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ratings_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ratings_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ratings_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ratings_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "ratings",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "usersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "watchlist",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "watchlist_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "watchlist_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "watchlist_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "watchlist_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "watchlist_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "rating",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ratings",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ratings_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "ratings_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_avg_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ratings_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "rating",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "ratings_constraint",
          "enumValues": [
            {
              "name": "ratings_pkey"
            },
            {
              "name": "ratings_profile_id_podcast_id_key"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_inc_input",
          "inputFields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_insert_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ratings_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ratings",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ratings_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ratings_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ratings_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_order_by",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "rating",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "ratings_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            },
            {
              "name": "rating"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_set_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ratings_stddev_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_stddev_pop_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_stddev_samp_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ratings_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ratings_sum_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "ratings_update_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            },
            {
              "name": "rating"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ratings_updates",
          "inputFields": [
            {
              "name": "_inc",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ratings_inc_input",
                "ofType": null
              }
            },
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ratings_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ratings_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ratings_var_pop_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_var_samp_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "ratings_variance_fields",
          "fields": [
            {
              "name": "rating",
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "subscription_root",
          "fields": [
            {
              "name": "authProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviderRequests_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviderRequestsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviderRequests_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviderRequests_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviderRequests_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authProviders_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authProviders_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokensAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authRoles_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRoles_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserProviders_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserRoles_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeysAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "favorites",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "favorites_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "favorites_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "favorites_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "favorites_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "favorites_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "favorites_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "favorites",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "favorites_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "favorites",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "favorites_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "favorites_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "profiles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "profiles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "profiles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "profiles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "profiles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "profiles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "profiles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "profiles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "profiles_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "profiles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "profiles_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "profiles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "profiles_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "profiles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ratings",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ratings",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ratings_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ratings_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ratings_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ratings_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ratings_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ratings_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ratings_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "ratings",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "ratings_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ratings",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ratings_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ratings_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "usersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "users_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "watchlist",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "watchlist_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "watchlist_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "watchlist_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "watchlist_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "watchlist_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "watchlist_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "watchlist_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "watchlist",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "watchlist_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "SCALAR",
          "name": "timestamptz"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "timestamptz_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamptz",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamptz",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "defaultRoleByRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "disabled",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "args": [
                {
                  "name": "path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "refreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "refreshTokens_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authRefreshTokens_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authRefreshTokens_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "roles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "roles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserRoles_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserRoles_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "securityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "securityKeys_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserSecurityKeys_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserSecurityKeys_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "authUserProviders_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "authUserProviders_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "users_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "users_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_aggregate_bool_exp",
          "inputFields": [
            {
              "name": "bool_and",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_aggregate_bool_exp_bool_and",
                "ofType": null
              }
            },
            {
              "name": "bool_or",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_aggregate_bool_exp_bool_or",
                "ofType": null
              }
            },
            {
              "name": "count",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_aggregate_bool_exp_count",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_aggregate_bool_exp_bool_and",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns",
                  "ofType": null
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Boolean_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_aggregate_bool_exp_bool_or",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns",
                  "ofType": null
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Boolean_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_aggregate_bool_exp_count",
          "inputFields": [
            {
              "name": "arguments",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "users_select_column",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "distinct",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "filter",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "predicate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "users_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "users_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_aggregate_order_by",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_min_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_append_input",
          "inputFields": [
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "activeMfaType",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "defaultRoleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "citext_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "citext_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "refreshTokens",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "refreshTokens_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_aggregate_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "roles",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "roles_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_aggregate_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "securityKeys",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "securityKeys_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_aggregate_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_aggregate_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_constraint",
          "enumValues": [
            {
              "name": "users_email_key"
            },
            {
              "name": "users_phone_number_key"
            },
            {
              "name": "users_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_delete_at_path_input",
          "inputFields": [
            {
              "name": "metadata",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_delete_elem_input",
          "inputFields": [
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_delete_key_input",
          "inputFields": [
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_insert_input",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "defaultRoleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "refreshTokens",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_arr_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "roles",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_arr_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "securityKeys",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_arr_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "userProviders",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_arr_rel_insert_input",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users_max_fields",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_max_order_by",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users_min_fields",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_min_order_by",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_obj_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_insert_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "users_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_order_by",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "defaultRoleByRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRoles_order_by",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "refreshTokens_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authRefreshTokens_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "roles_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserRoles_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "securityKeys_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserSecurityKeys_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "authUserProviders_aggregate_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_prepend_input",
          "inputFields": [
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column",
          "enumValues": [
            {
              "name": "activeMfaType"
            },
            {
              "name": "avatarUrl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "currentChallenge"
            },
            {
              "name": "defaultRole"
            },
            {
              "name": "disabled"
            },
            {
              "name": "displayName"
            },
            {
              "name": "email"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "id"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "lastSeen"
            },
            {
              "name": "locale"
            },
            {
              "name": "metadata"
            },
            {
              "name": "newEmail"
            },
            {
              "name": "otpHash"
            },
            {
              "name": "otpHashExpiresAt"
            },
            {
              "name": "otpMethodLastUsed"
            },
            {
              "name": "passwordHash"
            },
            {
              "name": "phoneNumber"
            },
            {
              "name": "phoneNumberVerified"
            },
            {
              "name": "ticket"
            },
            {
              "name": "ticketExpiresAt"
            },
            {
              "name": "totpSecret"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns",
          "enumValues": [
            {
              "name": "disabled"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "phoneNumberVerified"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns",
          "enumValues": [
            {
              "name": "disabled"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "phoneNumberVerified"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_set_input",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_update_column",
          "enumValues": [
            {
              "name": "activeMfaType"
            },
            {
              "name": "avatarUrl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "currentChallenge"
            },
            {
              "name": "defaultRole"
            },
            {
              "name": "disabled"
            },
            {
              "name": "displayName"
            },
            {
              "name": "email"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "id"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "lastSeen"
            },
            {
              "name": "locale"
            },
            {
              "name": "metadata"
            },
            {
              "name": "newEmail"
            },
            {
              "name": "otpHash"
            },
            {
              "name": "otpHashExpiresAt"
            },
            {
              "name": "otpMethodLastUsed"
            },
            {
              "name": "passwordHash"
            },
            {
              "name": "phoneNumber"
            },
            {
              "name": "phoneNumberVerified"
            },
            {
              "name": "ticket"
            },
            {
              "name": "ticketExpiresAt"
            },
            {
              "name": "totpSecret"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_updates",
          "inputFields": [
            {
              "name": "_append",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_append_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_at_path",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_delete_at_path_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_elem",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_delete_elem_input",
                "ofType": null
              }
            },
            {
              "name": "_delete_key",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_delete_key_input",
                "ofType": null
              }
            },
            {
              "name": "_prepend",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_prepend_input",
                "ofType": null
              }
            },
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "uuid"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "uuid_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "watchlist",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "watchlist_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "watchlist",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "watchlist_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "watchlist_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "watchlist_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "watchlist_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "watchlist_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "watchlist_constraint",
          "enumValues": [
            {
              "name": "watchlist_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_insert_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "watchlist_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "watchlist_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "watchlist_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "watchlist",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "watchlist_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "watchlist_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "watchlist_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_order_by",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "watchlist_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_set_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "watchlist_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "podcast_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "profile_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "watchlist_update_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "podcast_id"
            },
            {
              "name": "profile_id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "watchlist_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "watchlist_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "watchlist_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "Any"
        }
      ],
      "directives": []
    }
  } as const,
  types: {} as {
    Scalars: Scalars,
    Boolean_Comparison_Exp: Boolean_Comparison_Exp,
    Int_Comparison_Exp: Int_Comparison_Exp,
    String_Comparison_Exp: String_Comparison_Exp,
    AuthProviderRequests: AuthProviderRequests,
    AuthProviderRequests_OptionsArgs: AuthProviderRequests_OptionsArgs,
    AuthProviderRequests_Aggregate: AuthProviderRequests_Aggregate,
    AuthProviderRequests_Aggregate_Fields: AuthProviderRequests_Aggregate_Fields,
    AuthProviderRequests_Aggregate_Fields_CountArgs: AuthProviderRequests_Aggregate_Fields_CountArgs,
    AuthProviderRequests_Append_Input: AuthProviderRequests_Append_Input,
    AuthProviderRequests_Bool_Exp: AuthProviderRequests_Bool_Exp,
    AuthProviderRequests_Delete_At_Path_Input: AuthProviderRequests_Delete_At_Path_Input,
    AuthProviderRequests_Delete_Elem_Input: AuthProviderRequests_Delete_Elem_Input,
    AuthProviderRequests_Delete_Key_Input: AuthProviderRequests_Delete_Key_Input,
    AuthProviderRequests_Insert_Input: AuthProviderRequests_Insert_Input,
    AuthProviderRequests_Max_Fields: AuthProviderRequests_Max_Fields,
    AuthProviderRequests_Min_Fields: AuthProviderRequests_Min_Fields,
    AuthProviderRequests_Mutation_Response: AuthProviderRequests_Mutation_Response,
    AuthProviderRequests_On_Conflict: AuthProviderRequests_On_Conflict,
    AuthProviderRequests_Order_By: AuthProviderRequests_Order_By,
    AuthProviderRequests_Pk_Columns_Input: AuthProviderRequests_Pk_Columns_Input,
    AuthProviderRequests_Prepend_Input: AuthProviderRequests_Prepend_Input,
    AuthProviderRequests_Set_Input: AuthProviderRequests_Set_Input,
    AuthProviderRequests_Stream_Cursor_Input: AuthProviderRequests_Stream_Cursor_Input,
    AuthProviderRequests_Stream_Cursor_Value_Input: AuthProviderRequests_Stream_Cursor_Value_Input,
    AuthProviderRequests_Updates: AuthProviderRequests_Updates,
    AuthProviders: AuthProviders,
    AuthProviders_UserProvidersArgs: AuthProviders_UserProvidersArgs,
    AuthProviders_UserProviders_AggregateArgs: AuthProviders_UserProviders_AggregateArgs,
    AuthProviders_Aggregate: AuthProviders_Aggregate,
    AuthProviders_Aggregate_Fields: AuthProviders_Aggregate_Fields,
    AuthProviders_Aggregate_Fields_CountArgs: AuthProviders_Aggregate_Fields_CountArgs,
    AuthProviders_Bool_Exp: AuthProviders_Bool_Exp,
    AuthProviders_Insert_Input: AuthProviders_Insert_Input,
    AuthProviders_Max_Fields: AuthProviders_Max_Fields,
    AuthProviders_Min_Fields: AuthProviders_Min_Fields,
    AuthProviders_Mutation_Response: AuthProviders_Mutation_Response,
    AuthProviders_Obj_Rel_Insert_Input: AuthProviders_Obj_Rel_Insert_Input,
    AuthProviders_On_Conflict: AuthProviders_On_Conflict,
    AuthProviders_Order_By: AuthProviders_Order_By,
    AuthProviders_Pk_Columns_Input: AuthProviders_Pk_Columns_Input,
    AuthProviders_Set_Input: AuthProviders_Set_Input,
    AuthProviders_Stream_Cursor_Input: AuthProviders_Stream_Cursor_Input,
    AuthProviders_Stream_Cursor_Value_Input: AuthProviders_Stream_Cursor_Value_Input,
    AuthProviders_Updates: AuthProviders_Updates,
    AuthRefreshTokens: AuthRefreshTokens,
    AuthRefreshTokens_Aggregate: AuthRefreshTokens_Aggregate,
    AuthRefreshTokens_Aggregate_Bool_Exp: AuthRefreshTokens_Aggregate_Bool_Exp,
    AuthRefreshTokens_Aggregate_Bool_Exp_Count: AuthRefreshTokens_Aggregate_Bool_Exp_Count,
    AuthRefreshTokens_Aggregate_Fields: AuthRefreshTokens_Aggregate_Fields,
    AuthRefreshTokens_Aggregate_Fields_CountArgs: AuthRefreshTokens_Aggregate_Fields_CountArgs,
    AuthRefreshTokens_Aggregate_Order_By: AuthRefreshTokens_Aggregate_Order_By,
    AuthRefreshTokens_Arr_Rel_Insert_Input: AuthRefreshTokens_Arr_Rel_Insert_Input,
    AuthRefreshTokens_Bool_Exp: AuthRefreshTokens_Bool_Exp,
    AuthRefreshTokens_Insert_Input: AuthRefreshTokens_Insert_Input,
    AuthRefreshTokens_Max_Fields: AuthRefreshTokens_Max_Fields,
    AuthRefreshTokens_Max_Order_By: AuthRefreshTokens_Max_Order_By,
    AuthRefreshTokens_Min_Fields: AuthRefreshTokens_Min_Fields,
    AuthRefreshTokens_Min_Order_By: AuthRefreshTokens_Min_Order_By,
    AuthRefreshTokens_Mutation_Response: AuthRefreshTokens_Mutation_Response,
    AuthRefreshTokens_On_Conflict: AuthRefreshTokens_On_Conflict,
    AuthRefreshTokens_Order_By: AuthRefreshTokens_Order_By,
    AuthRefreshTokens_Pk_Columns_Input: AuthRefreshTokens_Pk_Columns_Input,
    AuthRefreshTokens_Set_Input: AuthRefreshTokens_Set_Input,
    AuthRefreshTokens_Stream_Cursor_Input: AuthRefreshTokens_Stream_Cursor_Input,
    AuthRefreshTokens_Stream_Cursor_Value_Input: AuthRefreshTokens_Stream_Cursor_Value_Input,
    AuthRefreshTokens_Updates: AuthRefreshTokens_Updates,
    AuthRoles: AuthRoles,
    AuthRoles_UserRolesArgs: AuthRoles_UserRolesArgs,
    AuthRoles_UserRoles_AggregateArgs: AuthRoles_UserRoles_AggregateArgs,
    AuthRoles_UsersByDefaultRoleArgs: AuthRoles_UsersByDefaultRoleArgs,
    AuthRoles_UsersByDefaultRole_AggregateArgs: AuthRoles_UsersByDefaultRole_AggregateArgs,
    AuthRoles_Aggregate: AuthRoles_Aggregate,
    AuthRoles_Aggregate_Fields: AuthRoles_Aggregate_Fields,
    AuthRoles_Aggregate_Fields_CountArgs: AuthRoles_Aggregate_Fields_CountArgs,
    AuthRoles_Bool_Exp: AuthRoles_Bool_Exp,
    AuthRoles_Insert_Input: AuthRoles_Insert_Input,
    AuthRoles_Max_Fields: AuthRoles_Max_Fields,
    AuthRoles_Min_Fields: AuthRoles_Min_Fields,
    AuthRoles_Mutation_Response: AuthRoles_Mutation_Response,
    AuthRoles_Obj_Rel_Insert_Input: AuthRoles_Obj_Rel_Insert_Input,
    AuthRoles_On_Conflict: AuthRoles_On_Conflict,
    AuthRoles_Order_By: AuthRoles_Order_By,
    AuthRoles_Pk_Columns_Input: AuthRoles_Pk_Columns_Input,
    AuthRoles_Set_Input: AuthRoles_Set_Input,
    AuthRoles_Stream_Cursor_Input: AuthRoles_Stream_Cursor_Input,
    AuthRoles_Stream_Cursor_Value_Input: AuthRoles_Stream_Cursor_Value_Input,
    AuthRoles_Updates: AuthRoles_Updates,
    AuthUserProviders: AuthUserProviders,
    AuthUserProviders_Aggregate: AuthUserProviders_Aggregate,
    AuthUserProviders_Aggregate_Bool_Exp: AuthUserProviders_Aggregate_Bool_Exp,
    AuthUserProviders_Aggregate_Bool_Exp_Count: AuthUserProviders_Aggregate_Bool_Exp_Count,
    AuthUserProviders_Aggregate_Fields: AuthUserProviders_Aggregate_Fields,
    AuthUserProviders_Aggregate_Fields_CountArgs: AuthUserProviders_Aggregate_Fields_CountArgs,
    AuthUserProviders_Aggregate_Order_By: AuthUserProviders_Aggregate_Order_By,
    AuthUserProviders_Arr_Rel_Insert_Input: AuthUserProviders_Arr_Rel_Insert_Input,
    AuthUserProviders_Bool_Exp: AuthUserProviders_Bool_Exp,
    AuthUserProviders_Insert_Input: AuthUserProviders_Insert_Input,
    AuthUserProviders_Max_Fields: AuthUserProviders_Max_Fields,
    AuthUserProviders_Max_Order_By: AuthUserProviders_Max_Order_By,
    AuthUserProviders_Min_Fields: AuthUserProviders_Min_Fields,
    AuthUserProviders_Min_Order_By: AuthUserProviders_Min_Order_By,
    AuthUserProviders_Mutation_Response: AuthUserProviders_Mutation_Response,
    AuthUserProviders_On_Conflict: AuthUserProviders_On_Conflict,
    AuthUserProviders_Order_By: AuthUserProviders_Order_By,
    AuthUserProviders_Pk_Columns_Input: AuthUserProviders_Pk_Columns_Input,
    AuthUserProviders_Set_Input: AuthUserProviders_Set_Input,
    AuthUserProviders_Stream_Cursor_Input: AuthUserProviders_Stream_Cursor_Input,
    AuthUserProviders_Stream_Cursor_Value_Input: AuthUserProviders_Stream_Cursor_Value_Input,
    AuthUserProviders_Updates: AuthUserProviders_Updates,
    AuthUserRoles: AuthUserRoles,
    AuthUserRoles_Aggregate: AuthUserRoles_Aggregate,
    AuthUserRoles_Aggregate_Bool_Exp: AuthUserRoles_Aggregate_Bool_Exp,
    AuthUserRoles_Aggregate_Bool_Exp_Count: AuthUserRoles_Aggregate_Bool_Exp_Count,
    AuthUserRoles_Aggregate_Fields: AuthUserRoles_Aggregate_Fields,
    AuthUserRoles_Aggregate_Fields_CountArgs: AuthUserRoles_Aggregate_Fields_CountArgs,
    AuthUserRoles_Aggregate_Order_By: AuthUserRoles_Aggregate_Order_By,
    AuthUserRoles_Arr_Rel_Insert_Input: AuthUserRoles_Arr_Rel_Insert_Input,
    AuthUserRoles_Bool_Exp: AuthUserRoles_Bool_Exp,
    AuthUserRoles_Insert_Input: AuthUserRoles_Insert_Input,
    AuthUserRoles_Max_Fields: AuthUserRoles_Max_Fields,
    AuthUserRoles_Max_Order_By: AuthUserRoles_Max_Order_By,
    AuthUserRoles_Min_Fields: AuthUserRoles_Min_Fields,
    AuthUserRoles_Min_Order_By: AuthUserRoles_Min_Order_By,
    AuthUserRoles_Mutation_Response: AuthUserRoles_Mutation_Response,
    AuthUserRoles_On_Conflict: AuthUserRoles_On_Conflict,
    AuthUserRoles_Order_By: AuthUserRoles_Order_By,
    AuthUserRoles_Pk_Columns_Input: AuthUserRoles_Pk_Columns_Input,
    AuthUserRoles_Set_Input: AuthUserRoles_Set_Input,
    AuthUserRoles_Stream_Cursor_Input: AuthUserRoles_Stream_Cursor_Input,
    AuthUserRoles_Stream_Cursor_Value_Input: AuthUserRoles_Stream_Cursor_Value_Input,
    AuthUserRoles_Updates: AuthUserRoles_Updates,
    AuthUserSecurityKeys: AuthUserSecurityKeys,
    AuthUserSecurityKeys_Aggregate: AuthUserSecurityKeys_Aggregate,
    AuthUserSecurityKeys_Aggregate_Bool_Exp: AuthUserSecurityKeys_Aggregate_Bool_Exp,
    AuthUserSecurityKeys_Aggregate_Bool_Exp_Count: AuthUserSecurityKeys_Aggregate_Bool_Exp_Count,
    AuthUserSecurityKeys_Aggregate_Fields: AuthUserSecurityKeys_Aggregate_Fields,
    AuthUserSecurityKeys_Aggregate_Fields_CountArgs: AuthUserSecurityKeys_Aggregate_Fields_CountArgs,
    AuthUserSecurityKeys_Aggregate_Order_By: AuthUserSecurityKeys_Aggregate_Order_By,
    AuthUserSecurityKeys_Arr_Rel_Insert_Input: AuthUserSecurityKeys_Arr_Rel_Insert_Input,
    AuthUserSecurityKeys_Avg_Fields: AuthUserSecurityKeys_Avg_Fields,
    AuthUserSecurityKeys_Avg_Order_By: AuthUserSecurityKeys_Avg_Order_By,
    AuthUserSecurityKeys_Bool_Exp: AuthUserSecurityKeys_Bool_Exp,
    AuthUserSecurityKeys_Inc_Input: AuthUserSecurityKeys_Inc_Input,
    AuthUserSecurityKeys_Insert_Input: AuthUserSecurityKeys_Insert_Input,
    AuthUserSecurityKeys_Max_Fields: AuthUserSecurityKeys_Max_Fields,
    AuthUserSecurityKeys_Max_Order_By: AuthUserSecurityKeys_Max_Order_By,
    AuthUserSecurityKeys_Min_Fields: AuthUserSecurityKeys_Min_Fields,
    AuthUserSecurityKeys_Min_Order_By: AuthUserSecurityKeys_Min_Order_By,
    AuthUserSecurityKeys_Mutation_Response: AuthUserSecurityKeys_Mutation_Response,
    AuthUserSecurityKeys_On_Conflict: AuthUserSecurityKeys_On_Conflict,
    AuthUserSecurityKeys_Order_By: AuthUserSecurityKeys_Order_By,
    AuthUserSecurityKeys_Pk_Columns_Input: AuthUserSecurityKeys_Pk_Columns_Input,
    AuthUserSecurityKeys_Set_Input: AuthUserSecurityKeys_Set_Input,
    AuthUserSecurityKeys_Stddev_Fields: AuthUserSecurityKeys_Stddev_Fields,
    AuthUserSecurityKeys_Stddev_Order_By: AuthUserSecurityKeys_Stddev_Order_By,
    AuthUserSecurityKeys_Stddev_Pop_Fields: AuthUserSecurityKeys_Stddev_Pop_Fields,
    AuthUserSecurityKeys_Stddev_Pop_Order_By: AuthUserSecurityKeys_Stddev_Pop_Order_By,
    AuthUserSecurityKeys_Stddev_Samp_Fields: AuthUserSecurityKeys_Stddev_Samp_Fields,
    AuthUserSecurityKeys_Stddev_Samp_Order_By: AuthUserSecurityKeys_Stddev_Samp_Order_By,
    AuthUserSecurityKeys_Stream_Cursor_Input: AuthUserSecurityKeys_Stream_Cursor_Input,
    AuthUserSecurityKeys_Stream_Cursor_Value_Input: AuthUserSecurityKeys_Stream_Cursor_Value_Input,
    AuthUserSecurityKeys_Sum_Fields: AuthUserSecurityKeys_Sum_Fields,
    AuthUserSecurityKeys_Sum_Order_By: AuthUserSecurityKeys_Sum_Order_By,
    AuthUserSecurityKeys_Updates: AuthUserSecurityKeys_Updates,
    AuthUserSecurityKeys_Var_Pop_Fields: AuthUserSecurityKeys_Var_Pop_Fields,
    AuthUserSecurityKeys_Var_Pop_Order_By: AuthUserSecurityKeys_Var_Pop_Order_By,
    AuthUserSecurityKeys_Var_Samp_Fields: AuthUserSecurityKeys_Var_Samp_Fields,
    AuthUserSecurityKeys_Var_Samp_Order_By: AuthUserSecurityKeys_Var_Samp_Order_By,
    AuthUserSecurityKeys_Variance_Fields: AuthUserSecurityKeys_Variance_Fields,
    AuthUserSecurityKeys_Variance_Order_By: AuthUserSecurityKeys_Variance_Order_By,
    Bigint_Comparison_Exp: Bigint_Comparison_Exp,
    Bytea_Comparison_Exp: Bytea_Comparison_Exp,
    Citext_Comparison_Exp: Citext_Comparison_Exp,
    Favorites: Favorites,
    Favorites_Aggregate: Favorites_Aggregate,
    Favorites_Aggregate_Fields: Favorites_Aggregate_Fields,
    Favorites_Aggregate_Fields_CountArgs: Favorites_Aggregate_Fields_CountArgs,
    Favorites_Bool_Exp: Favorites_Bool_Exp,
    Favorites_Insert_Input: Favorites_Insert_Input,
    Favorites_Max_Fields: Favorites_Max_Fields,
    Favorites_Min_Fields: Favorites_Min_Fields,
    Favorites_Mutation_Response: Favorites_Mutation_Response,
    Favorites_On_Conflict: Favorites_On_Conflict,
    Favorites_Order_By: Favorites_Order_By,
    Favorites_Pk_Columns_Input: Favorites_Pk_Columns_Input,
    Favorites_Set_Input: Favorites_Set_Input,
    Favorites_Stream_Cursor_Input: Favorites_Stream_Cursor_Input,
    Favorites_Stream_Cursor_Value_Input: Favorites_Stream_Cursor_Value_Input,
    Favorites_Updates: Favorites_Updates,
    Jsonb_Cast_Exp: Jsonb_Cast_Exp,
    Jsonb_Comparison_Exp: Jsonb_Comparison_Exp,
    Mutation_Root: Mutation_Root,
    Mutation_Root_DeleteAuthProviderArgs: Mutation_Root_DeleteAuthProviderArgs,
    Mutation_Root_DeleteAuthProviderRequestArgs: Mutation_Root_DeleteAuthProviderRequestArgs,
    Mutation_Root_DeleteAuthProviderRequestsArgs: Mutation_Root_DeleteAuthProviderRequestsArgs,
    Mutation_Root_DeleteAuthProvidersArgs: Mutation_Root_DeleteAuthProvidersArgs,
    Mutation_Root_DeleteAuthRefreshTokenArgs: Mutation_Root_DeleteAuthRefreshTokenArgs,
    Mutation_Root_DeleteAuthRefreshTokensArgs: Mutation_Root_DeleteAuthRefreshTokensArgs,
    Mutation_Root_DeleteAuthRoleArgs: Mutation_Root_DeleteAuthRoleArgs,
    Mutation_Root_DeleteAuthRolesArgs: Mutation_Root_DeleteAuthRolesArgs,
    Mutation_Root_DeleteAuthUserProviderArgs: Mutation_Root_DeleteAuthUserProviderArgs,
    Mutation_Root_DeleteAuthUserProvidersArgs: Mutation_Root_DeleteAuthUserProvidersArgs,
    Mutation_Root_DeleteAuthUserRoleArgs: Mutation_Root_DeleteAuthUserRoleArgs,
    Mutation_Root_DeleteAuthUserRolesArgs: Mutation_Root_DeleteAuthUserRolesArgs,
    Mutation_Root_DeleteAuthUserSecurityKeyArgs: Mutation_Root_DeleteAuthUserSecurityKeyArgs,
    Mutation_Root_DeleteAuthUserSecurityKeysArgs: Mutation_Root_DeleteAuthUserSecurityKeysArgs,
    Mutation_Root_DeleteUserArgs: Mutation_Root_DeleteUserArgs,
    Mutation_Root_DeleteUsersArgs: Mutation_Root_DeleteUsersArgs,
    Mutation_Root_Delete_FavoritesArgs: Mutation_Root_Delete_FavoritesArgs,
    Mutation_Root_Delete_Favorites_By_PkArgs: Mutation_Root_Delete_Favorites_By_PkArgs,
    Mutation_Root_Delete_ProfilesArgs: Mutation_Root_Delete_ProfilesArgs,
    Mutation_Root_Delete_Profiles_By_PkArgs: Mutation_Root_Delete_Profiles_By_PkArgs,
    Mutation_Root_Delete_RatingsArgs: Mutation_Root_Delete_RatingsArgs,
    Mutation_Root_Delete_Ratings_By_PkArgs: Mutation_Root_Delete_Ratings_By_PkArgs,
    Mutation_Root_Delete_WatchlistArgs: Mutation_Root_Delete_WatchlistArgs,
    Mutation_Root_Delete_Watchlist_By_PkArgs: Mutation_Root_Delete_Watchlist_By_PkArgs,
    Mutation_Root_InsertAuthProviderArgs: Mutation_Root_InsertAuthProviderArgs,
    Mutation_Root_InsertAuthProviderRequestArgs: Mutation_Root_InsertAuthProviderRequestArgs,
    Mutation_Root_InsertAuthProviderRequestsArgs: Mutation_Root_InsertAuthProviderRequestsArgs,
    Mutation_Root_InsertAuthProvidersArgs: Mutation_Root_InsertAuthProvidersArgs,
    Mutation_Root_InsertAuthRefreshTokenArgs: Mutation_Root_InsertAuthRefreshTokenArgs,
    Mutation_Root_InsertAuthRefreshTokensArgs: Mutation_Root_InsertAuthRefreshTokensArgs,
    Mutation_Root_InsertAuthRoleArgs: Mutation_Root_InsertAuthRoleArgs,
    Mutation_Root_InsertAuthRolesArgs: Mutation_Root_InsertAuthRolesArgs,
    Mutation_Root_InsertAuthUserProviderArgs: Mutation_Root_InsertAuthUserProviderArgs,
    Mutation_Root_InsertAuthUserProvidersArgs: Mutation_Root_InsertAuthUserProvidersArgs,
    Mutation_Root_InsertAuthUserRoleArgs: Mutation_Root_InsertAuthUserRoleArgs,
    Mutation_Root_InsertAuthUserRolesArgs: Mutation_Root_InsertAuthUserRolesArgs,
    Mutation_Root_InsertAuthUserSecurityKeyArgs: Mutation_Root_InsertAuthUserSecurityKeyArgs,
    Mutation_Root_InsertAuthUserSecurityKeysArgs: Mutation_Root_InsertAuthUserSecurityKeysArgs,
    Mutation_Root_InsertUserArgs: Mutation_Root_InsertUserArgs,
    Mutation_Root_InsertUsersArgs: Mutation_Root_InsertUsersArgs,
    Mutation_Root_Insert_FavoritesArgs: Mutation_Root_Insert_FavoritesArgs,
    Mutation_Root_Insert_Favorites_OneArgs: Mutation_Root_Insert_Favorites_OneArgs,
    Mutation_Root_Insert_ProfilesArgs: Mutation_Root_Insert_ProfilesArgs,
    Mutation_Root_Insert_Profiles_OneArgs: Mutation_Root_Insert_Profiles_OneArgs,
    Mutation_Root_Insert_RatingsArgs: Mutation_Root_Insert_RatingsArgs,
    Mutation_Root_Insert_Ratings_OneArgs: Mutation_Root_Insert_Ratings_OneArgs,
    Mutation_Root_Insert_WatchlistArgs: Mutation_Root_Insert_WatchlistArgs,
    Mutation_Root_Insert_Watchlist_OneArgs: Mutation_Root_Insert_Watchlist_OneArgs,
    Mutation_Root_UpdateAuthProviderArgs: Mutation_Root_UpdateAuthProviderArgs,
    Mutation_Root_UpdateAuthProviderRequestArgs: Mutation_Root_UpdateAuthProviderRequestArgs,
    Mutation_Root_UpdateAuthProviderRequestsArgs: Mutation_Root_UpdateAuthProviderRequestsArgs,
    Mutation_Root_UpdateAuthProvidersArgs: Mutation_Root_UpdateAuthProvidersArgs,
    Mutation_Root_UpdateAuthRefreshTokenArgs: Mutation_Root_UpdateAuthRefreshTokenArgs,
    Mutation_Root_UpdateAuthRefreshTokensArgs: Mutation_Root_UpdateAuthRefreshTokensArgs,
    Mutation_Root_UpdateAuthRoleArgs: Mutation_Root_UpdateAuthRoleArgs,
    Mutation_Root_UpdateAuthRolesArgs: Mutation_Root_UpdateAuthRolesArgs,
    Mutation_Root_UpdateAuthUserProviderArgs: Mutation_Root_UpdateAuthUserProviderArgs,
    Mutation_Root_UpdateAuthUserProvidersArgs: Mutation_Root_UpdateAuthUserProvidersArgs,
    Mutation_Root_UpdateAuthUserRoleArgs: Mutation_Root_UpdateAuthUserRoleArgs,
    Mutation_Root_UpdateAuthUserRolesArgs: Mutation_Root_UpdateAuthUserRolesArgs,
    Mutation_Root_UpdateAuthUserSecurityKeyArgs: Mutation_Root_UpdateAuthUserSecurityKeyArgs,
    Mutation_Root_UpdateAuthUserSecurityKeysArgs: Mutation_Root_UpdateAuthUserSecurityKeysArgs,
    Mutation_Root_UpdateUserArgs: Mutation_Root_UpdateUserArgs,
    Mutation_Root_UpdateUsersArgs: Mutation_Root_UpdateUsersArgs,
    Mutation_Root_Update_AuthProviderRequests_ManyArgs: Mutation_Root_Update_AuthProviderRequests_ManyArgs,
    Mutation_Root_Update_AuthProviders_ManyArgs: Mutation_Root_Update_AuthProviders_ManyArgs,
    Mutation_Root_Update_AuthRefreshTokens_ManyArgs: Mutation_Root_Update_AuthRefreshTokens_ManyArgs,
    Mutation_Root_Update_AuthRoles_ManyArgs: Mutation_Root_Update_AuthRoles_ManyArgs,
    Mutation_Root_Update_AuthUserProviders_ManyArgs: Mutation_Root_Update_AuthUserProviders_ManyArgs,
    Mutation_Root_Update_AuthUserRoles_ManyArgs: Mutation_Root_Update_AuthUserRoles_ManyArgs,
    Mutation_Root_Update_AuthUserSecurityKeys_ManyArgs: Mutation_Root_Update_AuthUserSecurityKeys_ManyArgs,
    Mutation_Root_Update_FavoritesArgs: Mutation_Root_Update_FavoritesArgs,
    Mutation_Root_Update_Favorites_By_PkArgs: Mutation_Root_Update_Favorites_By_PkArgs,
    Mutation_Root_Update_Favorites_ManyArgs: Mutation_Root_Update_Favorites_ManyArgs,
    Mutation_Root_Update_ProfilesArgs: Mutation_Root_Update_ProfilesArgs,
    Mutation_Root_Update_Profiles_By_PkArgs: Mutation_Root_Update_Profiles_By_PkArgs,
    Mutation_Root_Update_Profiles_ManyArgs: Mutation_Root_Update_Profiles_ManyArgs,
    Mutation_Root_Update_RatingsArgs: Mutation_Root_Update_RatingsArgs,
    Mutation_Root_Update_Ratings_By_PkArgs: Mutation_Root_Update_Ratings_By_PkArgs,
    Mutation_Root_Update_Ratings_ManyArgs: Mutation_Root_Update_Ratings_ManyArgs,
    Mutation_Root_Update_Users_ManyArgs: Mutation_Root_Update_Users_ManyArgs,
    Mutation_Root_Update_WatchlistArgs: Mutation_Root_Update_WatchlistArgs,
    Mutation_Root_Update_Watchlist_By_PkArgs: Mutation_Root_Update_Watchlist_By_PkArgs,
    Mutation_Root_Update_Watchlist_ManyArgs: Mutation_Root_Update_Watchlist_ManyArgs,
    Profiles: Profiles,
    Profiles_Aggregate: Profiles_Aggregate,
    Profiles_Aggregate_Fields: Profiles_Aggregate_Fields,
    Profiles_Aggregate_Fields_CountArgs: Profiles_Aggregate_Fields_CountArgs,
    Profiles_Avg_Fields: Profiles_Avg_Fields,
    Profiles_Bool_Exp: Profiles_Bool_Exp,
    Profiles_Inc_Input: Profiles_Inc_Input,
    Profiles_Insert_Input: Profiles_Insert_Input,
    Profiles_Max_Fields: Profiles_Max_Fields,
    Profiles_Min_Fields: Profiles_Min_Fields,
    Profiles_Mutation_Response: Profiles_Mutation_Response,
    Profiles_On_Conflict: Profiles_On_Conflict,
    Profiles_Order_By: Profiles_Order_By,
    Profiles_Pk_Columns_Input: Profiles_Pk_Columns_Input,
    Profiles_Set_Input: Profiles_Set_Input,
    Profiles_Stddev_Fields: Profiles_Stddev_Fields,
    Profiles_Stddev_Pop_Fields: Profiles_Stddev_Pop_Fields,
    Profiles_Stddev_Samp_Fields: Profiles_Stddev_Samp_Fields,
    Profiles_Stream_Cursor_Input: Profiles_Stream_Cursor_Input,
    Profiles_Stream_Cursor_Value_Input: Profiles_Stream_Cursor_Value_Input,
    Profiles_Sum_Fields: Profiles_Sum_Fields,
    Profiles_Updates: Profiles_Updates,
    Profiles_Var_Pop_Fields: Profiles_Var_Pop_Fields,
    Profiles_Var_Samp_Fields: Profiles_Var_Samp_Fields,
    Profiles_Variance_Fields: Profiles_Variance_Fields,
    Query_Root: Query_Root,
    Query_Root_AuthProviderArgs: Query_Root_AuthProviderArgs,
    Query_Root_AuthProviderRequestArgs: Query_Root_AuthProviderRequestArgs,
    Query_Root_AuthProviderRequestsArgs: Query_Root_AuthProviderRequestsArgs,
    Query_Root_AuthProviderRequestsAggregateArgs: Query_Root_AuthProviderRequestsAggregateArgs,
    Query_Root_AuthProvidersArgs: Query_Root_AuthProvidersArgs,
    Query_Root_AuthProvidersAggregateArgs: Query_Root_AuthProvidersAggregateArgs,
    Query_Root_AuthRefreshTokenArgs: Query_Root_AuthRefreshTokenArgs,
    Query_Root_AuthRefreshTokensArgs: Query_Root_AuthRefreshTokensArgs,
    Query_Root_AuthRefreshTokensAggregateArgs: Query_Root_AuthRefreshTokensAggregateArgs,
    Query_Root_AuthRoleArgs: Query_Root_AuthRoleArgs,
    Query_Root_AuthRolesArgs: Query_Root_AuthRolesArgs,
    Query_Root_AuthRolesAggregateArgs: Query_Root_AuthRolesAggregateArgs,
    Query_Root_AuthUserProviderArgs: Query_Root_AuthUserProviderArgs,
    Query_Root_AuthUserProvidersArgs: Query_Root_AuthUserProvidersArgs,
    Query_Root_AuthUserProvidersAggregateArgs: Query_Root_AuthUserProvidersAggregateArgs,
    Query_Root_AuthUserRoleArgs: Query_Root_AuthUserRoleArgs,
    Query_Root_AuthUserRolesArgs: Query_Root_AuthUserRolesArgs,
    Query_Root_AuthUserRolesAggregateArgs: Query_Root_AuthUserRolesAggregateArgs,
    Query_Root_AuthUserSecurityKeyArgs: Query_Root_AuthUserSecurityKeyArgs,
    Query_Root_AuthUserSecurityKeysArgs: Query_Root_AuthUserSecurityKeysArgs,
    Query_Root_AuthUserSecurityKeysAggregateArgs: Query_Root_AuthUserSecurityKeysAggregateArgs,
    Query_Root_FavoritesArgs: Query_Root_FavoritesArgs,
    Query_Root_Favorites_AggregateArgs: Query_Root_Favorites_AggregateArgs,
    Query_Root_Favorites_By_PkArgs: Query_Root_Favorites_By_PkArgs,
    Query_Root_ProfilesArgs: Query_Root_ProfilesArgs,
    Query_Root_Profiles_AggregateArgs: Query_Root_Profiles_AggregateArgs,
    Query_Root_Profiles_By_PkArgs: Query_Root_Profiles_By_PkArgs,
    Query_Root_RatingsArgs: Query_Root_RatingsArgs,
    Query_Root_Ratings_AggregateArgs: Query_Root_Ratings_AggregateArgs,
    Query_Root_Ratings_By_PkArgs: Query_Root_Ratings_By_PkArgs,
    Query_Root_UserArgs: Query_Root_UserArgs,
    Query_Root_UsersArgs: Query_Root_UsersArgs,
    Query_Root_UsersAggregateArgs: Query_Root_UsersAggregateArgs,
    Query_Root_WatchlistArgs: Query_Root_WatchlistArgs,
    Query_Root_Watchlist_AggregateArgs: Query_Root_Watchlist_AggregateArgs,
    Query_Root_Watchlist_By_PkArgs: Query_Root_Watchlist_By_PkArgs,
    Ratings: Ratings,
    Ratings_Aggregate: Ratings_Aggregate,
    Ratings_Aggregate_Fields: Ratings_Aggregate_Fields,
    Ratings_Aggregate_Fields_CountArgs: Ratings_Aggregate_Fields_CountArgs,
    Ratings_Avg_Fields: Ratings_Avg_Fields,
    Ratings_Bool_Exp: Ratings_Bool_Exp,
    Ratings_Inc_Input: Ratings_Inc_Input,
    Ratings_Insert_Input: Ratings_Insert_Input,
    Ratings_Max_Fields: Ratings_Max_Fields,
    Ratings_Min_Fields: Ratings_Min_Fields,
    Ratings_Mutation_Response: Ratings_Mutation_Response,
    Ratings_On_Conflict: Ratings_On_Conflict,
    Ratings_Order_By: Ratings_Order_By,
    Ratings_Pk_Columns_Input: Ratings_Pk_Columns_Input,
    Ratings_Set_Input: Ratings_Set_Input,
    Ratings_Stddev_Fields: Ratings_Stddev_Fields,
    Ratings_Stddev_Pop_Fields: Ratings_Stddev_Pop_Fields,
    Ratings_Stddev_Samp_Fields: Ratings_Stddev_Samp_Fields,
    Ratings_Stream_Cursor_Input: Ratings_Stream_Cursor_Input,
    Ratings_Stream_Cursor_Value_Input: Ratings_Stream_Cursor_Value_Input,
    Ratings_Sum_Fields: Ratings_Sum_Fields,
    Ratings_Updates: Ratings_Updates,
    Ratings_Var_Pop_Fields: Ratings_Var_Pop_Fields,
    Ratings_Var_Samp_Fields: Ratings_Var_Samp_Fields,
    Ratings_Variance_Fields: Ratings_Variance_Fields,
    Subscription_Root: Subscription_Root,
    Subscription_Root_AuthProviderArgs: Subscription_Root_AuthProviderArgs,
    Subscription_Root_AuthProviderRequestArgs: Subscription_Root_AuthProviderRequestArgs,
    Subscription_Root_AuthProviderRequestsArgs: Subscription_Root_AuthProviderRequestsArgs,
    Subscription_Root_AuthProviderRequestsAggregateArgs: Subscription_Root_AuthProviderRequestsAggregateArgs,
    Subscription_Root_AuthProviderRequests_StreamArgs: Subscription_Root_AuthProviderRequests_StreamArgs,
    Subscription_Root_AuthProvidersArgs: Subscription_Root_AuthProvidersArgs,
    Subscription_Root_AuthProvidersAggregateArgs: Subscription_Root_AuthProvidersAggregateArgs,
    Subscription_Root_AuthProviders_StreamArgs: Subscription_Root_AuthProviders_StreamArgs,
    Subscription_Root_AuthRefreshTokenArgs: Subscription_Root_AuthRefreshTokenArgs,
    Subscription_Root_AuthRefreshTokensArgs: Subscription_Root_AuthRefreshTokensArgs,
    Subscription_Root_AuthRefreshTokensAggregateArgs: Subscription_Root_AuthRefreshTokensAggregateArgs,
    Subscription_Root_AuthRefreshTokens_StreamArgs: Subscription_Root_AuthRefreshTokens_StreamArgs,
    Subscription_Root_AuthRoleArgs: Subscription_Root_AuthRoleArgs,
    Subscription_Root_AuthRolesArgs: Subscription_Root_AuthRolesArgs,
    Subscription_Root_AuthRolesAggregateArgs: Subscription_Root_AuthRolesAggregateArgs,
    Subscription_Root_AuthRoles_StreamArgs: Subscription_Root_AuthRoles_StreamArgs,
    Subscription_Root_AuthUserProviderArgs: Subscription_Root_AuthUserProviderArgs,
    Subscription_Root_AuthUserProvidersArgs: Subscription_Root_AuthUserProvidersArgs,
    Subscription_Root_AuthUserProvidersAggregateArgs: Subscription_Root_AuthUserProvidersAggregateArgs,
    Subscription_Root_AuthUserProviders_StreamArgs: Subscription_Root_AuthUserProviders_StreamArgs,
    Subscription_Root_AuthUserRoleArgs: Subscription_Root_AuthUserRoleArgs,
    Subscription_Root_AuthUserRolesArgs: Subscription_Root_AuthUserRolesArgs,
    Subscription_Root_AuthUserRolesAggregateArgs: Subscription_Root_AuthUserRolesAggregateArgs,
    Subscription_Root_AuthUserRoles_StreamArgs: Subscription_Root_AuthUserRoles_StreamArgs,
    Subscription_Root_AuthUserSecurityKeyArgs: Subscription_Root_AuthUserSecurityKeyArgs,
    Subscription_Root_AuthUserSecurityKeysArgs: Subscription_Root_AuthUserSecurityKeysArgs,
    Subscription_Root_AuthUserSecurityKeysAggregateArgs: Subscription_Root_AuthUserSecurityKeysAggregateArgs,
    Subscription_Root_AuthUserSecurityKeys_StreamArgs: Subscription_Root_AuthUserSecurityKeys_StreamArgs,
    Subscription_Root_FavoritesArgs: Subscription_Root_FavoritesArgs,
    Subscription_Root_Favorites_AggregateArgs: Subscription_Root_Favorites_AggregateArgs,
    Subscription_Root_Favorites_By_PkArgs: Subscription_Root_Favorites_By_PkArgs,
    Subscription_Root_Favorites_StreamArgs: Subscription_Root_Favorites_StreamArgs,
    Subscription_Root_ProfilesArgs: Subscription_Root_ProfilesArgs,
    Subscription_Root_Profiles_AggregateArgs: Subscription_Root_Profiles_AggregateArgs,
    Subscription_Root_Profiles_By_PkArgs: Subscription_Root_Profiles_By_PkArgs,
    Subscription_Root_Profiles_StreamArgs: Subscription_Root_Profiles_StreamArgs,
    Subscription_Root_RatingsArgs: Subscription_Root_RatingsArgs,
    Subscription_Root_Ratings_AggregateArgs: Subscription_Root_Ratings_AggregateArgs,
    Subscription_Root_Ratings_By_PkArgs: Subscription_Root_Ratings_By_PkArgs,
    Subscription_Root_Ratings_StreamArgs: Subscription_Root_Ratings_StreamArgs,
    Subscription_Root_UserArgs: Subscription_Root_UserArgs,
    Subscription_Root_UsersArgs: Subscription_Root_UsersArgs,
    Subscription_Root_UsersAggregateArgs: Subscription_Root_UsersAggregateArgs,
    Subscription_Root_Users_StreamArgs: Subscription_Root_Users_StreamArgs,
    Subscription_Root_WatchlistArgs: Subscription_Root_WatchlistArgs,
    Subscription_Root_Watchlist_AggregateArgs: Subscription_Root_Watchlist_AggregateArgs,
    Subscription_Root_Watchlist_By_PkArgs: Subscription_Root_Watchlist_By_PkArgs,
    Subscription_Root_Watchlist_StreamArgs: Subscription_Root_Watchlist_StreamArgs,
    Timestamptz_Comparison_Exp: Timestamptz_Comparison_Exp,
    Users: Users,
    Users_MetadataArgs: Users_MetadataArgs,
    Users_RefreshTokensArgs: Users_RefreshTokensArgs,
    Users_RefreshTokens_AggregateArgs: Users_RefreshTokens_AggregateArgs,
    Users_RolesArgs: Users_RolesArgs,
    Users_Roles_AggregateArgs: Users_Roles_AggregateArgs,
    Users_SecurityKeysArgs: Users_SecurityKeysArgs,
    Users_SecurityKeys_AggregateArgs: Users_SecurityKeys_AggregateArgs,
    Users_UserProvidersArgs: Users_UserProvidersArgs,
    Users_UserProviders_AggregateArgs: Users_UserProviders_AggregateArgs,
    Users_Aggregate: Users_Aggregate,
    Users_Aggregate_Bool_Exp: Users_Aggregate_Bool_Exp,
    Users_Aggregate_Bool_Exp_Bool_And: Users_Aggregate_Bool_Exp_Bool_And,
    Users_Aggregate_Bool_Exp_Bool_Or: Users_Aggregate_Bool_Exp_Bool_Or,
    Users_Aggregate_Bool_Exp_Count: Users_Aggregate_Bool_Exp_Count,
    Users_Aggregate_Fields: Users_Aggregate_Fields,
    Users_Aggregate_Fields_CountArgs: Users_Aggregate_Fields_CountArgs,
    Users_Aggregate_Order_By: Users_Aggregate_Order_By,
    Users_Append_Input: Users_Append_Input,
    Users_Arr_Rel_Insert_Input: Users_Arr_Rel_Insert_Input,
    Users_Bool_Exp: Users_Bool_Exp,
    Users_Delete_At_Path_Input: Users_Delete_At_Path_Input,
    Users_Delete_Elem_Input: Users_Delete_Elem_Input,
    Users_Delete_Key_Input: Users_Delete_Key_Input,
    Users_Insert_Input: Users_Insert_Input,
    Users_Max_Fields: Users_Max_Fields,
    Users_Max_Order_By: Users_Max_Order_By,
    Users_Min_Fields: Users_Min_Fields,
    Users_Min_Order_By: Users_Min_Order_By,
    Users_Mutation_Response: Users_Mutation_Response,
    Users_Obj_Rel_Insert_Input: Users_Obj_Rel_Insert_Input,
    Users_On_Conflict: Users_On_Conflict,
    Users_Order_By: Users_Order_By,
    Users_Pk_Columns_Input: Users_Pk_Columns_Input,
    Users_Prepend_Input: Users_Prepend_Input,
    Users_Set_Input: Users_Set_Input,
    Users_Stream_Cursor_Input: Users_Stream_Cursor_Input,
    Users_Stream_Cursor_Value_Input: Users_Stream_Cursor_Value_Input,
    Users_Updates: Users_Updates,
    Uuid_Comparison_Exp: Uuid_Comparison_Exp,
    Watchlist: Watchlist,
    Watchlist_Aggregate: Watchlist_Aggregate,
    Watchlist_Aggregate_Fields: Watchlist_Aggregate_Fields,
    Watchlist_Aggregate_Fields_CountArgs: Watchlist_Aggregate_Fields_CountArgs,
    Watchlist_Bool_Exp: Watchlist_Bool_Exp,
    Watchlist_Insert_Input: Watchlist_Insert_Input,
    Watchlist_Max_Fields: Watchlist_Max_Fields,
    Watchlist_Min_Fields: Watchlist_Min_Fields,
    Watchlist_Mutation_Response: Watchlist_Mutation_Response,
    Watchlist_On_Conflict: Watchlist_On_Conflict,
    Watchlist_Order_By: Watchlist_Order_By,
    Watchlist_Pk_Columns_Input: Watchlist_Pk_Columns_Input,
    Watchlist_Set_Input: Watchlist_Set_Input,
    Watchlist_Stream_Cursor_Input: Watchlist_Stream_Cursor_Input,
    Watchlist_Stream_Cursor_Value_Input: Watchlist_Stream_Cursor_Value_Input,
    Watchlist_Updates: Watchlist_Updates
  }
}