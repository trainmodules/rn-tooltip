//  @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  style: any,
  isDown: boolean,
};

const Triangle = ({ style, isDown }: Props) => (
  <View style={[isDown ? styles.down : {}]}>
    <View style={styles.square} />
    <View style={styles.triangle} />
  </View>
);

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: '180deg' }],
  },
  square: {
    backgroundColor: 'white',
    height: 10,
    position: 'absolute',
    bottom: -8,
    width: 24,
    zIndex: 99,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowColor: '#363636',
    shadowOffset: { screenHeight: 2, screenWidth: 2 },
    zIndex: 1,
  },
});

export default Triangle;
