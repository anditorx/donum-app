import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, IMG_ACCAOUNT_BLACK} from '../../res';
import {Button, Header, News} from '../../components';
import {getDataLocalStorage, windowWidth} from '../../utils';
import LottieView from 'lottie-react-native';
import {LS_USER} from '../../constants/global.constants';

const Home = ({navigation}) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUser = await getDataLocalStorage(LS_USER);
        console.log('cl log User data from local storage:', getUser);
        setUser(getUser);
      } catch (error) {
        console.error(
          'cl log Failed to fetch user data from local storage:',
          error,
        );
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.bgPrimary}>
          <Header
            image={
              user && user.photo !== '' ? {uri: user.photo} : IMG_ACCAOUNT_BLACK
            }
            onPress={() => navigation.navigate('Profile')}
          />
          <View style={styles.paddingHorizontal}>
            <Text style={styles.txtUserLoginHome}>Hi, {user?.name}</Text>
            <Text style={styles.subTextHero}>
              Anda sudah melakukan donasi sebesar Rp200.000 sejak menggunakan
              Baiq!
            </Text>
          </View>
        </View>
        {/* hero */}
        <View style={styles.wrapperSectionHero}>
          <View style={styles.wrapperCardHome}>
            <LottieView
              source={require('../../res/assets/lottie/lottie-amal.json')}
              loop={true}
              autoPlay={true}
              resizeMode="cover"
              style={styles.lottieHome}
            />
            <View style={styles.paddingHorizontal}>
              <View style={styles.marginLeft}>
                <Text style={styles.txtInsideCard}>
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
        <View style={styles.padding}>
          <Text style={styles.txtTitleSection}>Berita</Text>
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
  bgPrimary: {
    backgroundColor: colors.primary,
    height: 235,
  },
  wrapperSectionHero: {marginHorizontal: 20, marginTop: -60},
  wrapperCardHome: {
    backgroundColor: '#DEE9FD',
    width: windowWidth - 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  txtTitleSection: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginBottom: 15,
  },
  txtInsideCard: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  txtUserLoginHome: {fontSize: 26, fontWeight: 'bold', color: 'white'},
  paddingHorizontal: {paddingHorizontal: 20},
  subTextHero: {fontSize: 16, color: 'white'},
  lottieHome: {height: 120, width: 120},
  marginLeft: {marginLeft: -10},
  padding: {padding: 20},
});
