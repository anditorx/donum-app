import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID,
} from './constants/global.constants';
import {DebugBanner} from './components';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  // iosClientId: GOOGLE_IOS_CLIENT_ID,
  scopes: ['profile', 'email'],
});

function App() {
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <DebugBanner />
    </>
  );
}

export default App;
