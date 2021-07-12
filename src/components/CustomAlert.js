/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class CustomAlert extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
            <View
              style={{
                height: h('30%'),
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: h('1%'),
              }}>
              <View
                style={{
                  height: h('8%'),
                  width: '100%',
                  // backgroundColor: '#aaf',
                  flexDirection: 'row',
                  borderBottomWidth: h('0.05%'),
                  borderColor: 'grey',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '20%',
                    // backgroundColor: '#a3a',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name={'person-add-sharp'}
                    color={'#000'}
                    size={h('5%')}
                  />
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'center',
                    // backgroundColor: '#af3',
                  }}>
                  <Text>Alert....!</Text>
                </View>
              </View>

              <View
                style={{
                  height: h('14%'),
                  width: '100%',
                  // backgroundColor: '#aaf',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: h('2%'),
                  }}>
                  {this.props.txt}
                </Text>
              </View>

              <View
                style={{
                  height: h('8%'),
                  width: '100%',
                  // backgroundColor: '#aa3',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderTopWidth: h('0.05%'),
                }}>
                <TouchableOpacity
                  onPress={this.props.laterPressed}
                  style={{
                    height: '100%',
                    width: '33%',
                    // backgroundColor: '#aa3',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{this.props.btn1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.props.noPressed}
                  style={{
                    height: '100%',
                    width: '33%',
                    // backgroundColor: '#aa3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeftWidth: h('0.05%'),
                    borderRightWidth: h('0.05%'),
                  }}>
                  <Text>{this.props.btn2}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.props.yesPressed}
                  style={{
                    height: '100%',
                    width: '33%',
                    // backgroundColor: '#aa3',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{this.props.btn3}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
