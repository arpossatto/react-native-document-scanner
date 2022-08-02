import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function MyCamera(props) {
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return null;
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}      
      {...props}
    />
  )
}

export default MyCamera;