/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Avatar} from 'react-native-elements';
import {AppInput, AppBtn, NavHeader, CustomAlert} from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const bg = require('../../assets/add.png');

export class Dashboard extends React.Component {
  state = {
    modalVisible: false,
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    pressed: '',
    alertVisible: false,
    laterPressed: {},
    noPressed: {},
    yesPressed: {},
    txt: '',
    btn1: '',
    btn2: '',
    btn3: '',
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
        const url = {uri: response.assets[0].uri};

        // actual data of image
        // const source = response.data;

        this.saveImg(url);
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
        const url = {uri: response.assets[0].uri};

        // actual data of image
        // const source = response.data;

        this.saveImg(url);
      }
    });
  };

  saveImg = url => {
    if (this.state.pressed === 'one') {
      this.setState({one: url});
    } else if (this.state.pressed === 'two') {
      this.setState({two: url});
    } else if (this.state.pressed === 'three') {
      this.setState({three: url});
    } else if (this.state.pressed === 'four') {
      this.setState({four: url});
    } else if (this.state.pressed === 'five') {
      this.setState({five: url});
    } else if (this.state.pressed === 'six') {
      this.setState({six: url});
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'#faf'} />
        <NavHeader
          leftIc={'list'}
          title={'Dashboard'}
          rightIc={'exit-outline'}
          rightPressed={() => {
            this.props.navigation.replace('SignUp');
          }}
          leftPressed={() => {
            this.props.navigation.openDrawer();
          }}
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
                onPress={() => {
                  this.setState({modalVisible: true});
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
                  Modal
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
                onPress={() => {
                  this.setState(
                    {
                      yesPressed: () => console.warn('yes pressed'),
                      noPressed: () => console.warn('no pressed'),
                      laterPressed: () => this.setState({alertVisible: false}),

                      txt: 'Do you really want to exit?',
                      btn1: 'Cancel',
                      btn2: 'No',
                      btn3: 'Yes',
                    },
                    () => {
                      this.setState({alertVisible: true});
                    },
                  );
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
                  Custom Alert
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
                onPress={() => {
                  this.props.navigation.navigate('LearnCalendar');
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
                  Learn Calendar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Modal
          animationType="slide"
          // transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={{flex: 1}}>
            <NavHeader
              title={'Modal'}
              rightIc={'close-sharp'}
              rightPressed={() => {
                this.setState({modalVisible: false});
              }}
            />
            <View
              style={{
                height: '30%',
                width: '100%',
                // backgroundColor: '#afa',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Alert...!', 'Please select an option.', [
                    {
                      text: 'Cancel',
                      onPress: () => console.warn('cancelled'),
                      style: 'cancel',
                    },
                    {
                      text: 'Open Camera',
                      onPress: () =>
                        this.setState({pressed: 'one'}, () => {
                          this.captureImage();
                        }),
                    },
                    {
                      text: 'Open Gellary',
                      onPress: () =>
                        this.setState({pressed: 'one'}, () => {
                          this.selectImage();
                        }),
                    },
                  ]);
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.one === '' ? bg : this.state.one}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({pressed: 'two'}, () => {
                    this.selectImage();
                  });
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.two === '' ? bg : this.state.two}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: '30%',
                width: '100%',
                // backgroundColor: '#afa',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({pressed: 'three'}, () => {
                    this.captureImage();
                  });
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.three === '' ? bg : this.state.three}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({pressed: 'four'}, () => {
                    this.selectImage();
                  });
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.four === '' ? bg : this.state.four}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: '30%',
                width: '100%',
                // backgroundColor: '#afa',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({pressed: 'five'}, () => {
                    this.captureImage();
                  });
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.five === '' ? bg : this.state.five}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({pressed: 'six'}, () => {
                    this.selectImage();
                  });
                }}
                style={{
                  height: '70%',
                  width: '40%',
                  backgroundColor: '#aff',
                }}>
                <ImageBackground
                  style={{
                    height: '100%',
                  }}
                  source={this.state.six === '' ? bg : this.state.six}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <CustomAlert
          visible={this.state.alertVisible}
          laterPressed={this.state.laterPressed}
          noPressed={this.state.noPressed}
          yesPressed={this.state.yesPressed}
          txt={this.state.txt}
          btn1={this.state.btn1}
          btn2={this.state.btn2}
          btn3={this.state.btn3}
        />
      </View>
    );
  }
}
