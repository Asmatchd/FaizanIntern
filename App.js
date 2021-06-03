/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          //height: 500,
          //width: 200,
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#aaf',
            height: 100,
            width: 100,
          }}></View>

        <View
          style={{
            backgroundColor: '#aff',
            height: 150,
            width: 150,
          }}>
          <View
            style={{
              backgroundColor: 'black',
              height: 50,
              width: 50,
            }}></View>
        </View>
      </View>
    );
  }
}

export default App;
