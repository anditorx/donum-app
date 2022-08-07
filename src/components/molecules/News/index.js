import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DUMMY_NEWS} from '../../../res';
import {windowWidth} from '../../../utils';

const News = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom: 10,
      }}>
      <View style={{padding: 20}}>
        <Image
          source={DUMMY_NEWS}
          style={{
            height: 150,
            width: windowWidth - 80,
            resizeMode: 'cover',
            borderRadius: 15,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Lorem ipsum
        </Text>
        <Text>Lorem ipsum</Text>
      </View>
    </TouchableOpacity>
  );
};

export default News;

const styles = StyleSheet.create({});
