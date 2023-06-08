import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
};

const GetStarted = () => {
  const navigation = useNavigation<NavigationProps>();
  const STYLES = ['default', 'light-content', 'dark-content'] as const;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.BACKGROUND} barStyle={STYLES[0]} />
      <ImageBackground
        source={images.SUCCESS_SCREEN_BACKGROUND}
        style={styles.background}>
        <Image resizeMode="cover" source={images.LOGO} style={styles.image} />
        <Text style={styles.logoText}>Titans Crypto</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GetStarted;
