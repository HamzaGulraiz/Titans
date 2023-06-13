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
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack: any;
};

type HomeButtonCardProps = {
  id: number;
  title: string;
  onPress: () => void;
  icon: ImageSourcePropType;
};

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  const homeButtonFirstCard: HomeButtonCardProps[] = [
    {
      id: 0,
      title: 'Deposit',
      onPress: () => {},
      icon: icons.DEPOSIT,
    },
    {
      id: 1,
      title: 'Referral',
      onPress: () => {},
      icon: icons.REFFERAL,
    },
    {
      id: 2,
      title: 'Grid Trading',
      onPress: () => {},
      icon: icons.GRID_TRADING,
    },
    {
      id: 3,
      title: 'Margin',
      onPress: () => {},
      icon: icons.MARGIN,
    },
  ];

  const homeButtonSecondCard: HomeButtonCardProps[] = [
    {
      id: 0,
      title: 'Launchpad',
      onPress: () => {},
      icon: icons.LAUNCH_PAD,
    },
    {
      id: 1,
      title: 'Savings',
      onPress: () => {},
      icon: icons.SAVINGS,
    },
    {
      id: 2,
      title: 'Liquid Swap',
      onPress: () => {},
      icon: icons.LIQUID_SWAP,
    },
    {
      id: 3,
      title: 'More',
      onPress: () => {},
      icon: icons.MORE,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.BACKGROUND}}>
        <CustomHeader
          pictureIcon={icons.DEFAULT_USER}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          rightIcon={icons.NOTIFICATION}
          secondRightIcon={icons.SCAN}
          thirdRightIcon={icons.SEARCH}
          marginBottom={hp(4)}
        />
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'space-evenly',
            borderColor: colors.DIVIDER_COLOR,
            borderBottomWidth: hp(0.05),
          }}>
          {homeButtonFirstCard.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={item.onPress}
              style={{
                ...styles.card,
                borderColor:
                  item.id === 0 || item.id === 1 || item.id === 2
                    ? colors.DIVIDER_COLOR
                    : colors.TRANSPARENT,
                borderRightWidth: hp(0.05),
              }}>
              <Image
                source={item.icon}
                style={styles.cardIcon}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'space-evenly',
            borderColor: colors.DIVIDER_COLOR,
            borderBottomWidth: hp(0.05),
          }}>
          {homeButtonSecondCard.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={item.onPress}
              style={{
                ...styles.card,
                borderColor:
                  item.id === 0 || item.id === 1 || item.id === 2
                    ? colors.DIVIDER_COLOR
                    : colors.TRANSPARENT,
                borderRightWidth: hp(0.05),
              }}>
              <Image
                source={item.icon}
                style={styles.cardIcon}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
    </View>
  );
};

export default Home;
