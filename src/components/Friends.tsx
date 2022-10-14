import React from 'react';
import { View, Text, Image } from 'react-native';
import { defaultStyle } from '../styles/common.style';
import { styles } from '../styles/friends.style';
import Slider from './Slider';

const imageUrls = [
  'https://res.cloudinary.com/trankhang/image/upload/v1665760553/ChouChou07_hprzb6.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760553/ChouChou05_taqaug.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760553/ChouChou04_wtyemv.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760553/ChouChou03_ssddvq.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760552/ChouChou06_ggbkq1.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760552/ChouChou01_bk53fv.jpg',
  'https://res.cloudinary.com/trankhang/image/upload/v1665760552/ChouChou02_kpl0pu.jpg',
];

const random = () => {
  return Math.floor(Math.random() * imageUrls.length);
};

const mockData = [
  {
    id: '1',
    imageUrl: imageUrls[random()],
    isOnline: false,
  },
  {
    id: '2',
    imageUrl: imageUrls[random()],
    isOnline: true,
  },
  {
    id: '3',
    imageUrl: imageUrls[random()],
    isOnline: true,
  },
  {
    id: '4',
    imageUrl: imageUrls[random()],
    isOnline: false,
  },
  {
    id: '5',
    imageUrl: imageUrls[random()],
    isOnline: true,
  },
  {
    id: '6',
    imageUrl: imageUrls[random()],
    isOnline: false,
  },
  {
    id: '7',
    imageUrl: imageUrls[random()],
    isOnline: false,
  },
  {
    id: '8',
    imageUrl: imageUrls[random()],
    isOnline: true,
  },
];

const Friends = () => {
  return (
    <View style={styles.view}>
      <Text style={[defaultStyle.text, styles.text]}>Activities</Text>
      <Slider data={mockData} />
    </View>
  );
};

export default Friends;
