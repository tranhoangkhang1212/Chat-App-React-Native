import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Image from '../Image';

interface IData {
  id: string;
  isOnline: boolean;
  imageUrl: string;
}

interface IProps {
  data: IData[];
}

const Slider: FC<IProps> = (props) => {
  const { data } = props;
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {data.map((v) => (
        <Image key={v.id} uri={v.imageUrl} isOnline={v.isOnline} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    overflow: 'scroll',
    marginTop: 12,
  },
});

export default Slider;
