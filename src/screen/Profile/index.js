import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, IC_BACK, IMG_ACCAOUNT_BLACK} from '../../res';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapper_bg}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.wrapper_ic_back}>
          <Image source={IC_BACK} style={styles.ic_back} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IMG_ACCAOUNT_BLACK} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.wrapper_name}>
          <Text style={styles.text_name}>Andi Rustianto</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'white'},
  wrapper_ic_back: {
    backgroundColor: 'white',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  ic_back: {
    height: 35,
    width: 35,
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 25,
  },
  wrapper_name: {justifyContent: 'center', alignItems: 'center'},
  text_name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  wrapper_bg: {
    backgroundColor: colors.primary,
    height: 235,
  },
});
