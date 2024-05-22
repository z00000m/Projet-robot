import React from 'react';
import {View, StyleSheet} from 'react-native';
import CameraDirection from './CameraDirection';
import CameraControl from './CameraControl';
import CameraData from './CameraData';

const CameraInterface = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <CameraData />
      </View>
      <View style={styles.bottomLeft}>
        <CameraDirection />
      </View>
      <View style={styles.bottomRight}>
        <CameraControl />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  topLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bottomLeft: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  bottomRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CameraInterface;
