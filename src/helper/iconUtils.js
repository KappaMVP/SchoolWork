//需要邏輯處理的icon
import React from 'react';
import Icon from '../Views/Elements/Icon';
import {mainRouter} from '../data.source';

function TabViewIcon(props) {
  const {normal, seleted} = props.source;
  const {iconSize} = mainRouter.tabIcons;
  const mode = props.focused ? seleted : normal;
  return <Icon lib={mode.lib} name={mode.name} size={iconSize} />;
}

export default TabViewIcon;
