/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export class Buttons extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#0002',
          //height: 500,
          //width: 200,
          flex: 1,
          alignItems: 'center',
          // alignItems: 'flex-end',
          justifyContent: 'center',
          // justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            // disabled={true}
            style={{
              height: 50,
              width: '40%',
              backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              console.warn('1 Pressed');
            }}>
            <Text>Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // disabled={true}
            style={{
              height: 50,
              width: '40%',
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              // marginTop: 20,
            }}
            onPress={() => {
              console.warn('2 Pressed');
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Button 2
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
