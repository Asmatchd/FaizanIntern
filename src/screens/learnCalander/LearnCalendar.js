/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {AppBtn, NavHeader} from '../../components';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export class LearnCalendar extends React.Component {
  state = {
    time: '',
    date: '',
    showTimePicker: false,
    showDatePicker: false,
  };

  formateDate = date => {
    // const time = moment('2021-07-15T12:14:56.850Z').format(
    //   'D-MMMM-Y hh:m:ss a',
    // );
    // this.setState({time: time});

    const time = moment(date).format('D-MMMM-Y');
    this.setState({date: time});
  };

  formateTime = date => {
    const time = moment(date).format('hh:m:ss a');
    this.setState({time: time});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader title={'Calendar'} />

        <AppBtn
          onPress={() => {
            this.setState({showDatePicker: !this.state.showDatePicker});
          }}
          txt={'Show Date Picker'}
          st={{marginTop: 30}}
        />
        <AppBtn
          onPress={() => {
            this.setState({showTimePicker: !this.state.showTimePicker});
          }}
          txt={'Show Time Picker'}
          st={{marginTop: 30}}
        />

        <Text
          style={{
            marginTop: 100,
            textAlign: 'center',
          }}>
          Date: {this.state.date}
        </Text>

        <Text
          style={{
            marginTop: 100,
            textAlign: 'center',
          }}>
          Time: {this.state.time}
        </Text>

        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={date => this.formateDate(date)}
          onCancel={() =>
            this.setState({showDatePicker: !this.state.showDatePicker})
          }
        />

        <DateTimePickerModal
          isVisible={this.state.showTimePicker}
          mode="time"
          onConfirm={date => this.formateTime(date)}
          onCancel={() =>
            this.setState({showTimePicker: !this.state.showTimePicker})
          }
        />
      </View>
    );
  }
}
