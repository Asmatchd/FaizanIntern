/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

export class Loading extends React.Component {
  render() {
    return this.props.showLoading ? (
      <View
        style={{
          height: '100%',
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          backgroundColor: '#0004',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text
          style={{
            marginTop: 5,
            color: '#fff',
          }}>
          Please wait..
        </Text>
      </View>
    ) : null;
  }
}
