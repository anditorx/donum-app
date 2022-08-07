import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMG_ACCAOUNT_BLACK} from '../../../res';

const Header = ({...props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: 16, color: 'black'}}>Hello!</Text>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          {props.name}
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={props.image} style={{height: 35, width: 35}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
