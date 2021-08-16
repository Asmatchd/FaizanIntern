/* eslint-disable no-alert */
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
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmailValidator from 'email-validator';
import {Avatar} from 'react-native-elements';
import {baseUrl, axiosInstance} from '../../services/Api';

export class SignUp extends React.Component {
  state = {
    showLoading: false,
    img: '',

    name: '',
    password: '',
    email: '',
    phone: '',
  };

  storeData = () => {
    let {name, email, phone, password} = this.state;

    const validator = EmailValidator.validate(email);

    let formattedEmail = email.toLowerCase().trim();

    if (name === '' || password === '' || email === '' || phone === '') {
      alert('All fields are required');
    } else {
      if (validator === true) {
        if (password.length < 8) {
          alert('Password must contain 8 characters');
        } else {
          if (phone.length < 11) {
            alert('Phone must contain 11 Digits');
          } else {
            const param = {
              name,
              phone,
              email: formattedEmail,
              password,
            };

            axiosInstance
              .post(baseUrl + 'users/signUp', param)
              .then(res => {
                const data = res.data;
                if (data.status === '200') {
                  alert(
                    'Account successfully created kindly sign in to your account',
                  );
                  this.props.navigation.replace('SignIn');
                } else {
                  alert(data.msg);
                }
              })
              .catch(err => {
                console.warn(err);
              });

            // AsyncStorage.setItem(
            //   'userData',
            //   JSON.stringify(param),
            //   (err, data) => {
            //     if (!err) {
            //       this.props.navigation.replace('TabNavigator');
            //     } else {
            //       console.warn(err);
            //     }
            //   },
            // );
          }
        }
      } else {
        alert('Please enter a valid Email');
      }
    }
  };

  getData = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      if (!error && data !== null) {
        // const userData = JSON.parse(data);
        console.warn('data is = ' + data);
      } else {
        console.warn('Error');
      }
    });
  };

  removeData = () => {
    AsyncStorage.removeItem('userData', () => {
      console.warn('Removed');
    });
  };

  bottomView = () => (
    <View
      style={{
        height: h('25.5%'),
        // backgroundColor: '#faf',
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: h('7%'),
            width: '90%',
            // backgroundColor: '#a3a',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: h('2.5%'),
              fontWeight: 'bold',
            }}>
            Create
          </Text>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('Basics');
              // this.props.navigation.replace('Basics');
              // this.setState({showLoading: true}, () => {
              //   this.stop();
              // });
              // this.props.navigation.replace('TabNavigator');
              this.storeData();
              // this.getData();
              // this.removeData();
            }}
            style={{
              height: h('4%'),
              width: w('15%'),
              backgroundColor: 'orange',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('2%'),
              marginLeft: w('2%'),
              // marginRight: 25,
            }}>
            <Icon name={'ios-arrow-forward'} size={h('4%')} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: h('6%'),
          // backgroundColor: '#a6a',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Or create account using social media</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: h('8%'),
          // backgroundColor: '#a6a',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '40%',
            // backgroundColor: '#fff',
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
  );
  test = () => {
    // both are same

    if (1 > 2) {
      console.warn('1');
    } else {
      console.warn('2');
    }

    1 > 2 ? console.warn('1') : console.warn('2');
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

  stop = () => {
    setTimeout(() => {
      this.setState({showLoading: false});
    }, 5000);
  };

  captureImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    launchCamera(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        // actual URL of image
        const source = {uri: response.assets[0].uri};

        // actual data of image
        // const source = response.data;

        this.setState({
          img: source,
        });
      }
    });
  };

  selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        // actual URL of image
        const source = {uri: response.assets[0].uri};

        // actual data of image
        // const source = response.data;

        this.setState({
          img: source,
        });
      }
    });
  };

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
              {/* <View
                style={{
                  height: h('10%'),
                  width: h('10%'),
                  backgroundColor: '#0008',
                  borderRadius: h('5%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={this.state.img}
                  // Following method used to call image from internet instead of assets folder of project
                  // source={{
                  //   uri: 'https://images.indianexpress.com/2019/03/baby-sit-up.jpg',
                  // }}
                  style={{
                    // height: h('5%'),
                    // width: h('5%'),
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                    resizeMode: 'cover',
                    // resizeMode: 'repeat',
                  }}
                  overflow={'hidden'}
                />
              </View> */}

              <Avatar
                size="large"
                rounded
                title="MF"
                onPress={() => {
                  this.captureImage();
                }}
                containerStyle={{
                  backgroundColor: '#0007',
                }}
                source={this.state.img}
              />

              <Avatar
                size="small"
                rounded
                title="LB"
                onPress={() => {
                  this.selectImage();
                }}
                containerStyle={{
                  backgroundColor: '#0007',
                }}
                source={this.state.img}
              />
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                Create Account
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
              {/* name */}
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
                  <Icon name={'person'} size={h('3%')} color={'black'} />
                </View>
                <TextInput
                  onChangeText={name => {
                    this.setState({name});
                  }}
                  style={{
                    // backgroundColor: '#ffa',
                    width: '85%',
                    height: '100%',
                  }}
                  placeholder={'Name'}
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
                  onChangeText={phone => {
                    this.setState({phone});
                  }}
                  style={{
                    // backgroundColor: '#ffa',
                    width: '85%',
                    height: '100%',
                  }}
                  placeholder={'Phone'}
                  maxLength={11}
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
                  onChangeText={email => {
                    this.setState({email});
                  }}
                  style={{
                    // backgroundColor: '#ffa',
                    width: '85%',
                    height: '100%',
                  }}
                  placeholder={'Email'}
                  autoCapitalize={'none'}
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
                  onChangeText={password => {
                    this.setState({password});
                  }}
                  style={{
                    // backgroundColor: '#ffa',
                    width: '85%',
                    height: '100%',
                  }}
                  placeholder={'Password'}
                  secureTextEntry
                />
              </View>
            </View>
            {/* bottom view */}
            {this.bottomView()}
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
