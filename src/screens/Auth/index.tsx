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
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import CustomTopTabNavigator from '../../routes/TopTabNavigator/Navigators';
import SignIn from '../../components/Form/SignIn/SignIn';
import SignUp from '../../components/Form/SignUp/SignUp';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack: any;
};

const Auth = () => {
  const navigation = useNavigation<NavigationProps>();
  const [form, setForm] = useState('Signin');

  return (
    <CustomBackground>
      <View>
        <CustomHeader
          leftIcon={icons.CROSS}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          marginBottom={hp(4)}
        />
        <CustomTopTabNavigator setFormButton={setForm} formButton={form} />

        {form === 'Signin' ? <SignIn /> : <SignUp />}
      </View>
    </CustomBackground>
  );
};

export default Auth;
