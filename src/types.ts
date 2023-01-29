import type { GetUsersQuery } from './graphql/generated';

export type TMessage = GetUsersQuery['users'][0]['messages'][0];
export type TUser = GetUsersQuery['users'][0];
