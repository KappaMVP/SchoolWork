//通用icon集合
import React from 'react';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome_5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon(props) {
  const {lib, ...items} = props;
  switch (lib) {
    case 'Zocial':
      return <Zocial {...items} />;
    case 'Entypo':
      return <Entypo {...items} />;
    case 'Feather':
      return <Feather {...items} />;
    case 'Ionicons':
      return <Ionicons {...items} />;
    case 'Fontisto':
      return <Fontisto {...items} />;
    case 'Octicons':
      return <Octicons {...items} />;
    case 'EvilIcons':
      return <EvilIcons {...items} />;
    case 'AntDesign':
      return <AntDesign {...items} />;
    case 'Foundation':
      return <Foundation {...items} />;
    case 'FontAwesome':
      return <FontAwesome {...items} />;
    case 'FontAwesome5':
      return <FontAwesome_5 {...items} />;
    case 'MaterialIcons':
      return <MaterialIcons {...items} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...items} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...items} />;
    default:
      break;
  }
}

export default Icon;
