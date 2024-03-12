import React from 'react';
import {View, Text} from 'react-native';

import {topnavStyles} from './DactiveHeader-styles';

const TopNav = () => {
  return (
    <View style={topnavStyles.container}>
      <Text style={topnavStyles.text}>D-active</Text>
    </View>
  );
};

export default TopNav;
