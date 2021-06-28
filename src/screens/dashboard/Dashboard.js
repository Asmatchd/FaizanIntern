/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Avatar} from 'react-native-elements';
import {AppInput, AppBtn, NavHeader} from '../../components';
export class Dashboard extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          leftIc={'list'}
          title={'Dashboard'}
          rightIc={'exit-outline'}
        />
        <View
          style={{
            // backgroundColor: '#faf',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              // backgroundColor: '#faf',
              height: '70%',
            }}>
            <View
              style={{
                // backgroundColor: '#aaf',
                height: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('List');
                }}
                style={{
                  height: '90%',
                  width: '80%',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: h('1%'),
                  borderColor: 'orange',
                  borderWidth: h('0.1%'),
                }}>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: h('3%'),
                  }}>
                  FlatList
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: '#aaf',
                height: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: '90%',
                  width: '80%',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: h('1%'),
                  borderColor: 'orange',
                  borderWidth: h('0.1%'),
                }}>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: h('3%'),
                  }}>
                  FlatList
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: '#aaf',
                height: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: '90%',
                  width: '80%',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: h('1%'),
                  borderColor: 'orange',
                  borderWidth: h('0.1%'),
                }}>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: h('3%'),
                  }}>
                  FlatList
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
