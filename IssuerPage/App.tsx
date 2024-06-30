/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import Card from './src/card/Card';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Issuer app</Text>
      <View style={{height: 24}} />
      <Card title="Micro FE" content="Issuer Page Card content" />
    </View>
  );
}

export default App;
