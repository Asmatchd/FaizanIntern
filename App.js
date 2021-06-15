import 'react-native-gesture-handler';
import React from 'react';
import {Basics} from './src/screens/basics';
import {Buttons} from './src/screens/buttons';
import {SignIn} from './src/screens/signIn';
import {MainScreenNavigator} from './src/navigation/MainScreenNavigator';

class App extends React.Component {
  render() {
    return <MainScreenNavigator />;
  }
}

export default App;
