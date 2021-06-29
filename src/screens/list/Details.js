/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {NavHeader} from '../../components';
export class Details extends React.Component {
  state = {
    userData: {},
  };

  componentDidMount = () => {
    this.setState({userData: this.props.route.params.navData});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          title={'Details'}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Name: {this.state.userData.name}</Text>
          <Text>Status: {this.state.userData.status}</Text>
          <Text>DOB: {this.state.userData.dob}</Text>
          <Text>Age: {this.state.userData.age}</Text>
          <Text>Gender: {this.state.userData.gender}</Text>
        </View>
      </View>
    );
  }
}
