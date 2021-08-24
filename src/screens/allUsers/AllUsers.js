/* eslint-disable no-alert */
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
import {AppInput, AppBtn, NavHeader, Loading} from '../../components';
import {axiosInstance, baseUrl} from '../../services/Api';

export class AllUsers extends React.Component {
  state = {
    data: [],
    filteredData: [],
    refreshing: false,
    showLoading: false,
  };

  componentDidMount = () => {
    this.loading(true);
    setTimeout(() => {
      this.getAllUsers();
    }, 3000);
  };

  getAllUsers = () => {
    axiosInstance
      .post(baseUrl + 'users/allUsers')
      .then(res => {
        this.loading(false);
        let data = res.data;
        if (data.status === '200') {
          this.setState({
            filteredData: data.allUsers,
            data: data.allUsers,
          });
        } else {
          alert(data.msg);
        }
      })
      .catch(err => {
        this.loading(false);
        console.warn(err);
      });
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
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  search = text => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.phone.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({filteredData: newData});
  };

  onRefresh = () => {
    this.setState({refreshing: true}, () => {
      this.setState({refreshing: false}, () => {
        this.componentDidMount();
      });
    });
  };

  loading = value => {
    this.setState({showLoading: value});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Loading showLoading={this.state.showLoading} />

        <NavHeader
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          title={'All Users'}
        />
        <AppInput
          icName={'search'}
          placeholder={'Search'}
          onChangeText={text => this.search(text)}
        />

        <FlatList
          data={this.state.filteredData}
          renderItem={({item}) => this.design(item)}
          keyExtractor={(item, index) => index}
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
