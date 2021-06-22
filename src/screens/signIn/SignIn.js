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
import {AppInput} from '../../components/AppInput';
export class SignIn extends React.Component {
  state = {
    showLoading: false,
    phone: '+92',
  };

  loading = () => (
    <View
      style={{
        height: '100%',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#0004',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          style={{
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              // backgroundColor: '#fff',
              flex: 1,
            }}>
            {this.state.showLoading === true ? this.loading() : null}
            {/* back button */}
            <View
              style={{
                // backgroundColor: '#faf',
                height: h('6%'),
                justifyContent: 'center',
                paddingLeft: w('3%'),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={{
                  // backgroundColor: '#aaf',
                  height: h('6%'),
                  width: w('10%'),
                }}>
                <Icon name={'ios-arrow-back'} size={h('4%')} color={'#000'} />
              </TouchableOpacity>
            </View>
            {/* top view */}
            <View
              style={{
                height: h('20%'),
                // backgroundColor: '#aaf',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingBottom: h('2%'),
              }}>
              <Avatar
                size="large"
                rounded
                title="MF"
                containerStyle={{
                  backgroundColor: '#0007',
                }}
              />

              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                Sign In
              </Text>
            </View>

            {/* center view */}
            <View
              style={{
                height: h('45%'),
                // backgroundColor: '#afa',
                alignItems: 'center',
                paddingBottom: h('2%'),
              }}>
              <AppInput
                icName={'person'}
                placeholder={'Name'}
                placeholderTextColor={'red'}
                onChangeText={value => {
                  console.warn(value);
                }}
              />

              <AppInput
                onChangeText={phone => {
                  this.setState({phone});
                }}
                icName={'call'}
                placeholder={'Phone'}
                keyboardType={'number-pad'}
                value={this.state.phone}
                maxLength={13}
              />

              <AppInput
                icName={'lock-closed'}
                placeholder={'Password'}
                secureTextEntry
              />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
