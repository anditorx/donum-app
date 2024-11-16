import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DebugBanner = () => {
  if (!__DEV__) return null;

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>DEBUG</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    overflow: 'hidden',
    width: 50,
    height: 50,
    zIndex: 1000, // memastikan berada di atas konten lainnya
    // backgroundColor: 'red',
  },
  banner: {
    position: 'absolute',
    // top: 5,
    right: -40, // adjust untuk membuatnya pas di sudut kanan atas
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    transform: [{rotate: '45deg'}],
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    width: 120,
  },
  bannerText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    marginLeft: 18,
  },
});

export default DebugBanner;
