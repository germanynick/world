declare module "moleculer-apollo-server" {
  import { ServiceSchema } from "moleculer";
  import { Config } from "apollo-server-core";
  export {
    GraphQLUpload,
    GraphQLExtension,
    gql,
    ApolloError,
    toApolloError,
    SyntaxError,
    ValidationError,
    AuthenticationError,
    ForbiddenError,
    UserInputError,
    defaultPlaygroundOptions
  } from "apollo-server-core";

  export * from "graphql-tools";

  export interface ApolloServerOptions {
    path: string;
    disableHealthCheck: boolean;
    onHealthCheck: any;
  }

  export class ApolloServer {
    createGraphQLServerOptions(req: any, res: any): Promise<any>;
    createHandler(options: ApolloServerOptions): void;
    supportsUploads(): boolean;
    supportsSubscriptions(): boolean;
  }

  export interface ApolloServiceOptions {
    typeDefs?: string;
    resolvers?: any;
    schemaDirectives?: any;
    routeOptions: {
      path: string;
      cors: boolean | Object;
      mappingPolicy: string;
      aliases?: any;
      bodyParsers?: any;
      onBeforeCall?: any;
      authorization?: boolean;
      mergeParams?: boolean;
      uses?: [any];
      callOptions?: {
        timeout?: number;
        retries?: number;
        fallbackResponse?: any;
      };
      onAfterCall?: (...args: [any]) => any;
      onError?: (...args: [any]) => any;
    };
    serverOptions: Config;
  }

  export function ApolloService(options: ApolloServiceOptions): ServiceSchema;
}
