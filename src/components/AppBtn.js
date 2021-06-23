/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          {...this.props}
          style={[
            {
              width: '70%',
              height: h('6%'),
              backgroundColor: 'orange',
              borderRadius: h('2%'),
              // marginTop: h('2%'),
              alignItems: 'center',
              justifyContent: 'center',
            },
            this.props.st,
          ]}>
          <Text
            style={{
              color: '#fff',
              fontSize: h('2.5%'),
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
