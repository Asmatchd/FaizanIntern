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
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
      },
    ],
    filteredData: [
      {
        name: 'Faizan',
        status: 'intern',
        dob: '2000',
        age: '20',
        gender: 'male',
      },
      {
        name: 'Ali',
        status: 'intern',
        dob: '2001',
        age: '20',
      },
      {
        name: 'Umer',
        status: 'intern',
        dob: '2002',
        age: '20',
      },
      {
        name: 'Usman',
        status: 'intern',
        dob: '2003',
        age: '20',
      },
      {
        name: 'Kamran',
        status: 'intern',
        dob: '2004',
        age: '20',
      },
      {
        name: 'Nadeem',
        status: 'intern',
        dob: '2005',
        age: '20',
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
        height: h('18%'),
        backgroundColor: '#faf',
        width: '100%',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Name : {item.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        Status :{item.status}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        DOB :{item.dob}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        Age :{item.age}
      </Text>
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
