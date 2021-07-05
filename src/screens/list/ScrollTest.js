/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
export class ScrollTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            height: 400,
            backgroundColor: '#faf',
          }}></View>
        <View
          style={{
            height: 400,
            backgroundColor: '#aaf',
          }}></View>
        <View
          style={{
            height: 400,
            backgroundColor: '#afa',
          }}></View>
      </ScrollView>
    );
  }
}
