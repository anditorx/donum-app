import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  const animation = useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          source={require('../../res/assets/lottie/get-started.json')}
          loop={true}
          autoPlay={true}
          resizeMode="cover"
          style={{height: 450, width: 300}}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: 'black'}}>
          Kami Berada Dalam Misi Untuk Membantu Yang Tak Berdaya
        </Text>

        <Text style={{fontSize: 16, color: 'black', paddingTop: 10}}>
          Bantu Kami Dalam Upaya Membantu Sahabat, Saudara, Dan Keluarga Kami.
        </Text>

        <View style={{marginTop: 20}}>
          <Button
            text="Lanjut"
            right
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
