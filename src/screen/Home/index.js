import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, DUMMY_NEWS, IMG_ACCAOUNT_BLACK, LOTTIE_AMAL} from '../../res';
import {Button, Header, News} from '../../components';
import {responsiveWidth, windowWidth} from '../../utils';
import LottieView from 'lottie-react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.primary,
            height: 235,
          }}>
          <Header image={IMG_ACCAOUNT_BLACK} />
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
              Hi, Andi
            </Text>
            <Text style={{fontSize: 16, color: 'white'}}>
              Anda sudah melakukan donasi sebesar Rp200.000 sejak menggunakan
              Baiq!
            </Text>
          </View>
        </View>
        {/* hero */}
        <View style={{marginHorizontal: 20, marginTop: -60}}>
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
        <View style={{padding: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
              marginBottom: 15,
            }}>
            Berita
          </Text>
          {/* news */}
          <News />
          <News />
          {/* end news */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'white'},
});
