import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  topView: {
    height: h('85%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: h('30%'),
    width: h('30%'),
  },
  centerTxt: {
    fontSize: h('3%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomView: {
    height: h('10%'),
    width: '100%',
    // backgroundColor: '#afa',
    justifyContent: 'center',
  },
  bottomTxt: {
    textAlign: 'center',
    color: '#fff',
  },
});
