import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from 'react-native';

const CustomTouchable = ({ onPress, children, style }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#AAF', false)}>
        <View style={style}>
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
