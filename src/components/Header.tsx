import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '../styles/header.style';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.text}>Messages</Text>
        <FontAwesome style={styles.pencilIcon} name="pencil-square-o" />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Search"
        />
        <EvilIcons style={styles.inputIcon} name="search" />
      </View>
    </View>
  );
};

export default Header;
