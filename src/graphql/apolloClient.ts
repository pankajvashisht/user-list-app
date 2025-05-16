import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import awsConfig from './awsConfig';

const httpLink = createHttpLink({
  uri: awsConfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext((_, {headers}) => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      'x-api-key': awsConfig.aws_appsync_apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
