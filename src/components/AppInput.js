/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '90%',
            height: h('7%'),
            flexDirection: 'row',
            borderRadius: h('4%'),
            marginTop: h('2%'),
            borderWidth: h('0.4%'),
            borderTopWidth: 0,
            borderColor: 'rgba(0,0,0,0.05)',
          }}>
          <View
            style={{
              width: '15%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={this.props.icName} size={h('3%')} color={'black'} />
          </View>
          <TextInput
            style={{
              // backgroundColor: '#ffa',
              width: '85%',
              height: '100%',
            }}
            {...this.props}
          />
        </View>
      </View>
    );
  }
}
