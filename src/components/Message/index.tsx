import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/message.style';
import MessageContent from './MessageContent';
import { IProps } from '../../constants/message.type';

const Message: FC<IProps> = (props) => {
  const { data } = props;
  return (
    <View>
      <Text style={styles.text}>Messages</Text>
      <MessageContent data={data} />
    </View>
  );
};

export default Message;
