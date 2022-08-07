import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMG_ACCAOUNT_BLACK, LOGO_BAIQ} from '../../../res';

const Header = ({...props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
      }}>
      <Image source={LOGO_BAIQ} style={{height: 50, width: 50}} />
      <TouchableOpacity>
        <Image source={props.image} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
