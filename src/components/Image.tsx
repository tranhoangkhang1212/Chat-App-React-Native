import React, { FC } from 'react';
import { Image as Img, StyleSheet, View } from 'react-native';

interface IProps {
  uri: string;
  isOnline?: boolean;
}

const Image: FC<IProps> = (props) => {
  const { uri, isOnline } = props;
  return (
    <View style={[styles.container, isOnline && styles.active]}>
      <Img
        style={[styles.image]}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  active: {
    borderColor: '#26cf68',
    borderWidth: 2,
  },
});

export default Image;
