/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          height: h('7%'),
          backgroundColor: 'orange',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            height: h('7%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={this.props.leftIc} size={h('4%')} color={'#fff'} />
        </TouchableOpacity>

        <View
          style={{
            height: h('7%'),
            width: '70%',
            //   backgroundColor: '#a3a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: h('2.5%'),
            }}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            height: h('7%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={this.props.rightIc} size={h('4%')} color={'#fff'} />
        </TouchableOpacity>
      </View>
    );
  }
}
