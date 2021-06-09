/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export class Buttons extends React.Component {
  firstFunction = data => {
    if (data === '1') {
      console.warn('1 Pressed');
    } else {
      console.warn('2 Pressed');
    }
  };

  addFunction = (a, b) => {
    const ans = a + b;
    console.warn('answer is ' + ans);
  };

  subtractFunction = (a, b) => {
    const ans = a - b;
    console.warn('answer is ' + ans);
  };

  combined = (a, b, fn) => {
    if (fn === 'add') {
      const ans = a + b;
      console.warn('after addition answer is ' + ans);
    } else {
      const ans = a - b;
      console.warn('after subtraction answer is ' + ans);
    }
  };

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
              this.firstFunction('1');
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
              this.firstFunction('2');
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Button 2
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          // disabled={true}
          style={{
            height: 50,
            width: '40%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            const a = 29;
            const b = 13;
            const fn = 'add';
            // this.addFunction(a, b);
            this.combined(a, b, fn);
          }}>
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // disabled={true}
          style={{
            height: 50,
            width: '40%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            const a = 37;
            const b = 50;
            const fn = 'subtract';
            // this.subtractFunction(a, b);
            this.combined(a, b, fn);
          }}>
          <Text>Subtract</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
