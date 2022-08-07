import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMG_ACCAOUNT_BLACK, LOTTIE_AMAL} from '../../res';
import {Button, Header} from '../../components';
import {responsiveWidth, windowWidth} from '../../utils';
import LottieView from 'lottie-react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header image={IMG_ACCAOUNT_BLACK} name={'Andi Rustianto'} />
      {/* hero */}
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            backgroundColor: '#DEE9FD',
            width: windowWidth - 40,
            justifyContent: 'space-between',
            alignSelf: 'center',
            borderRadius: 15,
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <LottieView
            source={require('../../res/assets/lottie/lottie-amal.json')}
            loop={true}
            autoPlay={true}
            resizeMode="cover"
            style={{height: 120, width: 120}}
          />
          <View style={{paddingHorizontal: 20}}>
            <View style={{marginLeft: -10}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}>
                Donasi Sekarang Mudah{'\n'}
                Dimanapun & Kapanpun{'\n'}
                Tinggal Tap Saja!
              </Text>
            </View>
            <Button text="Donasi Sekarang!" type="donasi-home-hero" />
          </View>
        </View>
      </View>
      {/* end hero */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'white'},
});
