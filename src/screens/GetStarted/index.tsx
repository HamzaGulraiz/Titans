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
import colors from '../../assets/colors/colors';
import images from '../../assets/images/images';
import CustomBackground from '../../components/Background/Background';
import CustomButton from '../../components/Button/Button';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
};

const onBoardingInformation = [
  {
    image: images.GET_STARTED1,
    title: 'Trade anytime anywhere',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    image: images.GET_STARTED2,
    title: 'Save and invest at the same time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    image: images.GET_STARTED3,
    title: 'Save and invest at the same time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

const GetStarted = () => {
  const navigation = useNavigation<NavigationProps>();

  const [id, setId] = useState(0);
  const [detail, setDetail] = useState({
    images: onBoardingInformation[0].image,
    title: onBoardingInformation[0].title,
    description: onBoardingInformation[0].description,
  });

  const handlePress = () => {
    if (id < 2) {
      setDetail({
        images: onBoardingInformation[id + 1].image,
        title: onBoardingInformation[id + 1].title,
        description: onBoardingInformation[id + 1].description,
      });
      setId(id + 1);
    } else {
      console.log('greater');
    }
  };

  return (
    <CustomBackground>
      <View>
        <View style={styles.imageView}>
          <Image
            resizeMode="cover"
            source={detail.images}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.description}>{detail.description}</Text>
        <View style={styles.dotView}>
          <View
            style={{
              ...styles.dot,
              backgroundColor: id === 0 ? colors.DOTACTIVE : colors.DOTINACTIVE,
            }}></View>
          <View
            style={{
              ...styles.dot,
              backgroundColor: id === 1 ? colors.DOTACTIVE : colors.DOTINACTIVE,
            }}></View>
          <View
            style={{
              ...styles.dot,
              backgroundColor: id === 2 ? colors.DOTACTIVE : colors.DOTINACTIVE,
            }}></View>
        </View>

        <CustomButton
          title="Next"
          onPress={handlePress}
          height={hp(7.4)}
          backgroundColor={colors.GREEN_BUTTON}
          marginHorizontal={wp(28.2)}
        />
      </View>
    </CustomBackground>
  );
};

export default GetStarted;
