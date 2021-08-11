import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SplashScreen extends React.Component {
  componentDidMount = () => {
    this.checkUser();
  };
  checkUser = () => {
    setTimeout(() => {
      AsyncStorage.getItem('userData', (err, data) => {
        if (!err && data !== null) {
          this.props.navigation.replace('TabNavigator');
        } else {
          this.props.navigation.replace('SignIn');
        }
      });
    }, 3000);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image
            style={styles.logo}
            source={require('../../assets/orange.png')}
          />
          <Text style={styles.centerTxt}>Orange Factory</Text>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomTxt}>Designed By Faizan</Text>
        </View>
      </View>
    );
  }
}
