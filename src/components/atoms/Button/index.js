import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMG_GOOGLE} from '../../../res';

const Button = ({...props}) => {
  if (props.type === 'login-google') {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          paddingVertical: 10,
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <Image source={IMG_GOOGLE} style={{height: 35, width: 35}} />
        <Text
          style={{
            color: '#57C293',
            fontWeight: 'bold',
            fontSize: 18,
            marginLeft: 20,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  if (props.type === 'donasi-home-hero') {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#36BDE2',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          paddingVertical: 10,
          // paddingHorizontal: 10,
          // width: 150,
          marginTop: 25,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  if (props.right) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: '#36BDE2',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          alignItems: 'center',
          borderRadius: 15,
          paddingVertical: 10,
          width: 150,
          marginTop: 25,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Lanjut
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#36BDE2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        width: 150,
        marginTop: 25,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
