import React, { FC } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Image from '../Image';
import { IProps } from '../../constants/message.type';
import { styles } from '../../styles/message.style';

const MessageContent: FC<IProps> = (props) => {
  const { data } = props;
  return (
    <ScrollView horizontal={false} style={styles.container}>
      {data.map((v) => (
        <View style={styles.content} key={v.id}>
          <Image key={v.id} uri={v.imageUrl} isOnline={v.isOnline} />
          <View style={styles.message}>
            <Text style={styles.text}>{v.name}</Text>
            {v.messageInfo.map((ms, idx) => (
              <Text key={idx} style={styles.messageText}>
                {ms.highLight}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MessageContent;
