/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Textinput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Avatar} from 'react-native-elements';
import {AppInput, AppBtn, NavHeader} from '../../components';
export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Faizan',
        status: 'intern',
        dob: '2000',
        age: '20',
        gender: 'male',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Faizan',
        status: 'intern',
        dob: '2000',
        age: '20',
        gender: 'male',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
    ],
    filteredData: [
      {
        name: 'Faizan',
        status: 'intern',
        dob: '2000',
        age: '20',
        gender: 'male',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Faizan',
        status: 'intern',
        dob: '2000',
        age: '20',
        gender: 'male',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
    ],
    refreshing: false,
  };

  design = item => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('Details', {navData: item});
      }}
      style={{
        height: h('9%'),
        // backgroundColor: '#faf',
        width: '100%',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Avatar
          size="medium"
          rounded
          title="MF"
          containerStyle={{
            backgroundColor: '#0007',
          }}
          source={item.img}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '80%',
          // backgroundColor: '#a4a',
        }}>
        <View
          style={{
            height: '60%',
            // backgroundColor: '#aa3',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
            }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            height: '40%',
            // backgroundColor: '#ffa',
          }}>
          <Text>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  search = text => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.dob.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({filteredData: newData});
  };

  onRefresh = () => {
    this.setState({refreshing: true}, () => {
      this.loadData();
    });
  };

  loadData = () => {
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 5000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          title={'Flat List'}
        />
        <AppInput
          icName={'search'}
          placeholder={'Search'}
          onChangeText={text => this.search(text)}
        />

        <FlatList
          // inverted
          data={this.state.filteredData}
          renderItem={({item}) => this.design(item)}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => <Text>This is header</Text>}
          ListFooterComponent={() => <AppBtn txt={'Next'} />}
          showsVerticalScrollIndicator={false}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
              }}
            />
          )}
        />
      </View>
    );
  }
}
