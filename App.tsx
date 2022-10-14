import React from 'react';
import { Text, View } from 'react-native';
import { defaultStyle } from './src/styles/common.style';
import Home from './src/screens/Home';

const App = () => {
  return (
    <View style={defaultStyle.container}>
      <Home />
    </View>
  );
};

export default App;
