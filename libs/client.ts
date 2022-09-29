import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

import { GRAPHQL_ENDPOINT } from "@/libs/constants";

export const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT);

export const queryClient = new QueryClient();
