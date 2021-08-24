/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Settings extends React.Component {
  removeData = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignIn');
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AllUsers');
          }}
          style={{
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
            height: h('7%'),
            width: '100%',
            borderBottomWidth: h('0.05%'),
            borderColor: 'red',
          }}>
          <Text>All Users</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
            height: h('7%'),
            width: '100%',
            borderBottomWidth: h('0.05%'),
            borderColor: 'red',
          }}>
          <Text>Customer Care</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.removeData();
          }}
          style={{
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
            height: h('7%'),
            width: '100%',
            borderBottomWidth: h('0.05%'),
            borderColor: 'red',
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
