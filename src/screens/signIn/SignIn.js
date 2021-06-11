/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

export class SignIn extends React.Component {
  state = {};

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            //   backgroundColor: '#fff',
            flex: 1,
          }}>
          {/* back button */}
          <View
            style={{
              //backgroundColor: '#faf',
              height: 50,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Icon name={'ios-arrow-back'} size={25} color={'#000'} />
          </View>
          {/* top view */}
          <View
            style={{
              height: 150,
              //backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Create Account
            </Text>
          </View>
          {/* center view */}
          <View
            style={{
              height: 300,
              //backgroundColor: '#afa',
              alignItems: 'center',
              paddingBottom: 15,
            }}>
            {/* name */}
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                height: 45,
                flexDirection: 'row',
                borderRadius: 25,
                marginTop: 15,
                borderWidth: 3,
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
                <Icon name={'person'} size={20} color={'black'} />
              </View>
              <TextInput
                style={{
                  // backgroundColor: '#ffa',
                  width: '85%',
                  height: '100%',
                }}
                placeholder={'Name'}
              />
            </View>
            {/* password */}
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                height: 45,
                flexDirection: 'row',
                borderRadius: 25,
                marginTop: 15,
                borderWidth: 3,
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
                <Icon name={'lock-closed'} size={20} color={'black'} />
              </View>
              <TextInput
                style={{
                  // backgroundColor: '#ffa',
                  width: '85%',
                  height: '100%',
                }}
                placeholder={'Password'}
                secureTextEntry
              />
            </View>
            {/* email */}
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                height: 45,
                flexDirection: 'row',
                borderRadius: 25,
                marginTop: 15,
                borderWidth: 3,
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
                <Icon name={'ios-mail'} size={20} color={'black'} />
              </View>
              <TextInput
                style={{
                  // backgroundColor: '#ffa',
                  width: '85%',
                  height: '100%',
                }}
                placeholder={'Email'}
              />
            </View>
            {/* phone */}
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                height: 45,
                flexDirection: 'row',
                borderRadius: 25,
                marginTop: 15,
                borderWidth: 3,
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
                <Icon name={'call'} size={20} color={'black'} />
              </View>
              <TextInput
                style={{
                  // backgroundColor: '#ffa',
                  width: '85%',
                  height: '100%',
                }}
                placeholder={'Phone'}
              />
            </View>
          </View>
          {/* bottom view */}
          <View
            style={{
              height: 159,
              // backgroundColor: '#faf',
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  //backgroundColor: '#a3a',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Create
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 50,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 10,
                    // marginRight: 25,
                  }}>
                  <Icon name={'ios-arrow-forward'} size={25} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 50,
                //   backgroundColor: '#a6a',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Or create account using social media</Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 50,
                //backgroundColor: '#a6a',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  //backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'blue',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Fontisto name={'facebook'} size={15} color={'#fff'} />
                </View>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'rgba(25, 181, 254, 1)',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={'logo-twitter'} size={15} color={'#fff'} />
                </View>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo name={'google-'} size={15} color={'#fff'} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
