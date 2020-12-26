//需要邏輯處理的icon
import React from 'react';
import Icon from '../Views/Icon';
import {indexPage} from '../data.source';

function TabViewIcon(props) {
  const {normal, seleted} = props.source;
  const {iconSize} = indexPage.tabIcons;
  if (props.focused) {
    return <Icon lib={seleted.lib} name={seleted.name} size={iconSize} />;
  } else {
    return <Icon lib={normal.lib} name={normal.name} size={iconSize} />;
  }
}

export default TabViewIcon;
