/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Switch} from 'react-native';

export class Switches extends React.Component {
  state = {
    isEnabled: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={this.state.isEnabled ? 'orange' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            this.setState({isEnabled: !this.state.isEnabled})
          }
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}
