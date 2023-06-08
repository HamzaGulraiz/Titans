import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Image,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images/images';
import colors from '../../assets/colors/colors';
import {GET_STARTED} from '../../constants/Navigator';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
};

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const STYLES = ['default', 'light-content', 'dark-content'] as const;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(GET_STARTED);
    }, 2000); // 2 seconds delay
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.BACKGROUND} barStyle={STYLES[0]} />
      <ImageBackground
        source={images.SPLASHSCREEN_BACKGROUND}
        style={styles.background}>
        <Image resizeMode="cover" source={images.LOGO} style={styles.image} />
        <Text style={styles.logoText}>Titans Crypto</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
