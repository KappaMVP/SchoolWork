//最上面的bar
import React from 'react';
import {View} from 'react-native';
import IconBtn from './Elements/IconBtn';
import Styles from '../Styles/HeaderBtn.style';
import {iconData} from '../data.source';

function HeaderBtn(props) {
  return (
    <View style={Styles.container}>
      {props.data.map((element, index) => (
        <IconBtn
          key={index}
          {...element.btn}
          onPress={element.onPress}
          styles={Styles.button}
          size={iconData.headerSize}
        />
      ))}
    </View>
  );
}

export default HeaderBtn;
