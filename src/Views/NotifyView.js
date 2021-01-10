//通知的橫列
import React from 'react';
import {View} from 'react-native';
import ResultRow from '../Views/Elements/ResultRow';

export default function NotifyView(props) {
  const {datas} = props;
  return (
    <View>
      {datas.map((data) => {
        const title = data.userName + data.status;
        return (
          <ResultRow
            avatar={data.userImage}
            title={title}
            subtitle={data.time}
            photo={data.url}
          />
        );
      })}
    </View>
  );
}
