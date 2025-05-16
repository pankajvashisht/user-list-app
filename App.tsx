import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import client from './src/graphql/apolloClient';
import ThemeProvider from './src/theme/ThemeProvider';
import AppNavigation from 'navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;