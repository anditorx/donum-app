import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, IC_BACK, IMG_ACCAOUNT_BLACK} from '../../res';
import {getDataLocalStorage} from '../../utils';
import {LS_USER} from '../../constants/global.constants';

const Profile = ({navigation}) => {
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
      <View style={styles.wrapper_bg}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.wrapper_ic_back}>
          <Image source={IC_BACK} style={styles.ic_back} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={
              user && user.photo !== '' ? {uri: user.photo} : IMG_ACCAOUNT_BLACK
            }
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.wrapper_name}>
          <Text style={styles.text_name}>{user ? user?.name : ''}</Text>
          <Text style={styles.text_email}>{user ? user?.email : ''}</Text>
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
    height: 125,
    width: 125,
    alignSelf: 'center',
    borderRadius: 125 / 2,
    borderWidth: 4,
    borderColor: 'white',
  },
  wrapper_name: {justifyContent: 'center', alignItems: 'center'},
  text_name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  text_email: {
    color: 'white',
    fontSize: 16,
  },
  wrapper_bg: {
    backgroundColor: colors.primary,
    height: 275,
  },
});
