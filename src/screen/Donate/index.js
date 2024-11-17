import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, DUMMY_NEWS, IMG_ACCAOUNT_BLACK} from '../../res';
import {windowHeight, windowWidth} from '../../utils';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const Donate = () => {
  // ref
  // const bottomSheetRef = useRef < BottomSheet > null;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHero}>
        <View style={styles.wrapperImg}>
          <Image source={DUMMY_NEWS} style={styles.img} />
        </View>
        <View style={styles.wrapperDesc}>
          <Text style={styles.title}>Yayasan ABCD</Text>
          <Text style={styles.description}>
            Dengan donasi Anda, kita bisa memberikan masa depan yang lebih cerah
            bagi mereka. Mari bersama-sama kita wujudkan mimpi mereka. Bantu
            sekarang!
          </Text>
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txtBtn}>Donasi Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapperSecong}>
        <Text style={styles.titleSection}>Informasi Penggalang Dana</Text>
        <View style={styles.card}>
          <Text style={styles.txtCard}>Penggalang Dana</Text>
          <View style={styles.wrapperInsideCard}>
            <Image
              source={IMG_ACCAOUNT_BLACK}
              style={{height: 50, width: 50, marginRight: 10}}
            />
            <Text style={styles.txtSource}>Yayasan ABCD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperHero: {
    backgroundColor: 'white',
  },
  wrapperDesc: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  img: {
    height: windowWidth / 2 + 50,
    width: windowWidth,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  wrapperButton: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    color: 'white',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
  },
  wrapperSecong: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleSection: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  txtCard: {
    color: 'black',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 10,
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  txtSource: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  wrapperInsideCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
});
