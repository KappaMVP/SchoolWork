//搜尋結果的那個元素
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function ResultRow(props) {
  const {
    fake: {id, postId, userName, status, time},
  } = props;
  return (
    <View>
      <TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{width: 270}}>
            <View>
              <TouchableOpacity>
                <Text>{userName}</Text>
              </TouchableOpacity>
              <Text>{status}</Text>
              <Text>{time}</Text>
            </View>
          </View>
        </View>
        <View>
          <Image />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ResultRow;
