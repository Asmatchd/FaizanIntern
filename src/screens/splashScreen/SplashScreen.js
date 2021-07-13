/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export class SplashScreen extends React.Component {
  componentDidMount = () => {
    this.checkUser();
  };
  checkUser = () => {
    setTimeout(() => {
      this.props.navigation.replace('TabNavigator');
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
