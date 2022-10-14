interface IMessage {
  content: string[];
  unSeen: number;
  highLight: string;
}

interface IData {
  id: string;
  isOnline: boolean;
  name: string;
  imageUrl: string;
  messageInfo: IMessage[];
}

export interface IProps {
  data: IData[];
}
