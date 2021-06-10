/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';

export class Buttons extends React.Component {
  state = {
    firstValue: '',
    secondValue: '10',
  };

  firstFunction = data => {
    if (data === '1') {
      console.warn('1 Pressed');
    } else {
      console.warn('2 Pressed');
    }
  };

  addFunction = (a, b) => {
    const ans = a + b;
    console.warn('answer is ' + ans);
  };

  subtractFunction = (a, b) => {
    const ans = a - b;
    console.warn('answer is ' + ans);
  };

  combined = (a, b, fn) => {
    // if (fn === 'add') {
    //   const ans = a + b;
    //   console.warn('after addition answer is ' + ans);
    // } else {
    //   const ans = a - b;
    //   console.warn('after subtraction answer is ' + ans);
    // }
    if (fn === 'add') {
      const ans = +this.state.firstValue + +this.state.secondValue;
      console.warn('after addition answer is ' + ans);
    } else {
      const ans = +this.state.firstValue - +this.state.secondValue;
      console.warn('after subtraction answer is ' + ans);
    }
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          //height: 500,
          //width: 200,
          flex: 1,
          alignItems: 'center',
          // alignItems: 'flex-end',
          justifyContent: 'center',
          // justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            // disabled={true}
            style={{
              height: 50,
              width: '40%',
              backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              this.firstFunction('1');
            }}>
            <Text>Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // disabled={true}
            style={{
              height: 50,
              width: '40%',
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              // marginTop: 20,
            }}
            onPress={() => {
              this.firstFunction('2');
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Button 2
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          // disabled={true}
          style={{
            height: 50,
            width: '40%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            const a = 29;
            const b = 13;
            const fn = 'add';
            // this.addFunction(a, b);
            this.combined(a, b, fn);
          }}>
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // disabled={true}
          style={{
            height: 50,
            width: '40%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            const a = 37;
            const b = 50;
            const fn = 'subtract';
            // this.subtractFunction(a, b);
            this.combined(a, b, fn);
          }}>
          <Text>Subtract</Text>
        </TouchableOpacity>

        <TextInput
          // onChangeText={txt => {
          //   this.setState({firstValue: txt});
          // }}
          onChangeText={firstValue => {
            this.setState({firstValue});
          }}
          style={{
            // height: 50,
            width: '95%',
            backgroundColor: '#0001',
            borderWidth: 0.5,
            borderColor: 'red',
            marginTop: 5,
            borderRadius: 5,
            fontSize: 20,
            color: 'blue',
          }}
          placeholder={'First number'}
          placeholderTextColor={'red'}
          numberOfLines={5}
          // minHeight={50}
          // maxHeight={200}
          multiline
          keyboardType={'number-pad'}
          textAlignVertical={'top'}
          value={this.state.firstValue}
          // for password entry  uncomment  this
          // secureTextEntry
        />

        <TextInput
          // onChangeText={txt => {
          //   this.setState({firstValue: txt});
          // }}
          onChangeText={secondValue => {
            this.setState({secondValue});
          }}
          style={{
            height: 40,
            width: '95%',
            backgroundColor: '#0001',
            borderWidth: 0.5,
            borderColor: 'red',
            marginTop: 5,
            borderRadius: 5,
          }}
          placeholder={'Second number'}
          // numberOfLines={2}
          // multiline={true}
          keyboardType={'phone-pad'}
          value={this.state.secondValue}
          editable={false}
        />
      </View>
    );
  }
}
