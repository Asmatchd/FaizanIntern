/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf6',
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
            backgroundColor: '#aaf',
            height: 100,
            width: 100,
            borderWidth: 2,
            borderColor: '#aff',
            borderRadius: 50,
          }}></View>

        <View
          style={{
            backgroundColor: '#aff',
            height: 150,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftColor: 'red',
            borderTopColor: 'rgba(31, 58, 147, 0.5)',
            borderRightColor: '#0004',
            borderBottomColor: 'rgba(0,0,0,0.05)',
            // borderBottomColor: '#0001',
            borderLeftWidth: 2,
            borderTopWidth: 5,
            borderRightWidth: 10,
            borderBottomWidth: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 5,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 100,
              width: 100,
              borderWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 70,
                width: 70,
                borderWidth: 1,
                borderColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 35,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                  borderColor: 'blue',
                  borderRadius: 25,
                }}></View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 150,
            width: '100%',
            backgroundColor: '#aaf',
            marginTop: 20,
            flexDirection: 'row',
            // justifyContent: 'center',
            // justifyContent: 'space-between',
            // justifyContent: 'space-around',
            justifyContent: 'space-evenly',
            // alignItems: 'center',
            paddingTop: 40,
          }}>
          <View
            style={{
              height: 100,
              width: '25%',
              backgroundColor: 'white',
              // marginRight: 20,
              // marginTop: -20,
            }}></View>

          <View
            style={{
              height: 100,
              width: '25%',
              backgroundColor: 'black',
              // marginLeft: 20,
              // marginRight: 20,
              // marginTop: 20,
              // marginBottom: 20,
            }}></View>

          <View
            style={{
              height: 100,
              width: '25%',
              backgroundColor: 'yellow',
            }}></View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            // paddingLeft: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              // fontStyle: 'italic',
              color: 'red',
            }}
            numberOfLines={2}>
            Intern class Intern classIntern class Intern class Intern class
            Intern class Intern class Intern classIntern class Intern class
            Intern class Intern class
          </Text>
        </View>
      </View>
    );
  }
}
