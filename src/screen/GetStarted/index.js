import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Button} from '../../components';
import {responsiveWidth, windowWidth} from '../../utils';
import {IMG_BG_GREEN, LOGO_BAIQ} from '../../res';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_BG_GREEN}
        resizeMode="cover"
        style={styles.imageBG}>
        {/* Logo */}
        <View style={styles.wrapperLogo}>
          <Image source={LOGO_BAIQ} style={styles.logo} />
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.text1}>Berbagi Kebaikan Itu Mudah</Text>
          <Text style={styles.text2}>
            Bantu Kami Dalam Membatu Sahabat, Saudara, Dan Keluarga Kami.
          </Text>
        </View>
        {/* button login */}
      </ImageBackground>
      <View style={styles.wrapperBtnLogin}>
        <Button
          text="Login With Google"
          type="login-google"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {flex: 1},
  imageBG: {
    flex: 1,
    width: windowWidth + 20,
    marginLeft: -10,
  },
  wrapperLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {height: 250, width: 250},
  wrapperText: {paddingHorizontal: 30},
  text1: {fontSize: 26, fontWeight: 'bold', color: 'white'},
  text2: {fontSize: 18, color: 'white', marginTop: 10},
  wrapperBtnLogin: {
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
