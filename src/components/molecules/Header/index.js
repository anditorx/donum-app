import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LOGO_BAIQ} from '../../../res';

const Header = ({...props}) => {
  return (
    <View style={styles.container}>
      <Image source={LOGO_BAIQ} style={styles.imageLogo} />
      <TouchableOpacity onPress={props?.onPress}>
        <Image source={props.image} style={styles.imageProfile} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  imageProfile: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    borderWidth: 1,
    borderColor: 'white',
  },
  imageLogo: {height: 50, width: 50},
});
