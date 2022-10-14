import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/home.style';
import Header from '../components/Header';
import Friends from '../components/Friends';
import Message from '../components/Message';

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
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: false,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '2',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '3',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '4',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: false,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '5',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '6',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: false,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '7',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: false,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '8',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '9',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '10',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '11',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '12',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '13',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
  {
    id: '14',
    name: 'Chou Chou',
    imageUrl: imageUrls[random()],
    isOnline: true,
    messageInfo: [
      {
        content: [
          'jjhkjkfjksdh  sdfhsdfhs sdohfsiofhiosdfysod',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
          'fso fsiof hsofusiofs of fsfhsoifhsiofysiofuysiofusiofhsf sdf',
        ],
        unSeen: 5,
        highLight:
          'Khngafjafsdhjksdfmnkbnsdfbn sdjfhssfdh fsdfsdfsdf sdfsfsdf ssdf ',
      },
    ],
  },
];

const Home = () => {
  return (
    <View style={styles.view}>
      <Header />
      <Friends />
      <Message data={mockData} />
    </View>
  );
};

export default Home;
