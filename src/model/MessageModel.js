import {convertSecondsToDate} from '../utility/utils';

export const MessageModel = (item, id) => {
  return {
    msg: item.text || null,
    uid: item.senderId,
    id: id,
    messageStatus: item.read,
    dateTime: convertSecondsToDate(item.dateTime),
    file: item.file || null,
  };
};

export const MessageListItemModel = (item, uid, docId) => {
  return {
    send: uid === item.lastMessage.from ? true : false,
    last_massage: item.lastMessage.text,
    uid:
      uid === item.lastMessage.from ? item.lastMessage.to : item.lastMessage.to,
    id: docId,
    avatar_link: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'Ratul Bhowmick',
    unread: item.unread,
    dateTime: convertSecondsToDate(item.lastMessage.dateTime),
  };
};
