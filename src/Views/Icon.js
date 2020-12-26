//通用icon集合
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome_5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function Icon(props) {
  const {lib, ...items} = props;
  switch (lib) {
    case 'Ionicons':
      return <Ionicons {...items} />;
    case 'AntDesign':
      return <AntDesign {...items} />;
    case 'Entypo':
      return <Entypo {...items} />;
    case 'EvilIcons':
      return <EvilIcons {...items} />;
    case 'FontAwesome':
      return <FontAwesome {...items} />;
    case 'FontAwesome 5':
      return <FontAwesome_5 {...items} />;
    case 'Fontisto':
      return <Fontisto {...items} />;
    case 'Foundation':
      return <Foundation {...items} />;
    case 'MaterialIcons':
      return <MaterialIcons {...items} />;
    case 'Feather':
      return <Feather {...items} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...items} />;
    case 'Octicons':
      return <Octicons {...items} />;
    case 'Zocial':
      return <Zocial {...items} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...items} />;
    default:
      break;
  }
}

export default Icon;
