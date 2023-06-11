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
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images/images';
import CustomButton from '../../components/Button/Button';
import colors from '../../assets/colors/colors';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
};

const AccountCreated = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ImageBackground
      source={images.SUCCESS_SCREEN_BACKGROUND}
      style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={images.ACCOUNT_CREATED}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>
        Your account has been successfully created!
      </Text>

      <CustomButton
        title="Get Started"
        height={hp(6)}
        width={wp(88.4)}
        marginHorizontal={wp(5.7)}
        backgroundColor={colors.GREEN_BUTTON}
        onPress={() => {}}
        marginBottom={hp(2.2)}
      />
    </ImageBackground>
  );
};

export default AccountCreated;
