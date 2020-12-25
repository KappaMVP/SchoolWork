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
  const {lib, name, size} = props;
  switch (lib) {
    case 'Ionicons':
      return <Ionicons name={name} size={size} />;
    case 'AntDesign':
      return <AntDesign name={name} size={size} />;
    case 'Entypo':
      return <Entypo name={name} size={size} />;
    case 'EvilIcons':
      return <EvilIcons name={name} size={size} />;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} />;
    case 'FontAwesome 5':
      return <FontAwesome_5 name={name} size={size} />;
    case 'Fontisto':
      return <Fontisto name={name} size={size} />;
    case 'Foundation':
      return <Foundation name={name} size={size} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} />;
    case 'Feather':
      return <Feather name={name} size={size} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} />;
    case 'Octicons':
      return <Octicons name={name} size={size} />;
    case 'Zocial':
      return <Zocial name={name} size={size} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={size} />;
    default:
      break;
  }
}

export default Icon;
