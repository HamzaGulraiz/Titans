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
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import CustomButton from '../../components/Button/Button';
import {VERIFICATION_CODE} from '../../constants/Navigator';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
};

const RegisterWithMobile = () => {
  const navigation = useNavigation<NavigationProps>();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  //User Information After Validation
  const [userInfoValid, setUserInfoValid] = useState({
    numberValid: false,
  });

  const mobileRegisterValidation = () => {
    if (userInfoValid.numberValid === false) {
      setMobileNumberError('All fields are required');
      setTimeout(() => {
        setMobileNumberError('');
      }, 2000);
    } else {
      registerUser(mobileNumber);
    }
  };

  const registerUser = (mobileNumber?: string) => {
    setIsLoaded(true);
    let data = JSON.stringify({
      mobileNumber: mobileNumber,
    });

    setTimeout(() => {
      console.log(data);
      setIsLoaded(false);
      navigation.navigate(VERIFICATION_CODE);
    }, 2000);

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: `${Config.base_Url}register`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
    // };

    // axios
    //   .request(config)
    //   .then(response => {
    //     //setErrorMessage(response.data.message);
    //     console.log('axios then', JSON.stringify(response.data));

    //     ////Storing token in async/////
    //     const tokenValue = response.data.data.token;
    //     console.log('token sent by async register', tokenValue);
    //     AsyncStorage.setItem('userToken', tokenValue);
    //     /////////Userinformation
    //     const userInfo = JSON.stringify(response.data.data);
    //     console.log('user Info sent from login', userInfo);
    //     AsyncStorage.setItem('userInfo', userInfo);
    //     ////Redux storage
    //     dispatch(
    //       userTokenRedux({
    //         token: tokenValue,
    //       }),
    //     );

    //     setIsLoaded(true);
    //     navigation.navigate('DrawerNavigation');
    //   })
    //   .catch(error => {
    //     console.log('Register Catch', error.response);
    //     setIsLoaded(true);
    //     setErrorMessage(error.response.data.message);
    //     Toast.show(errorMessage, {
    //       duration: Toast.durations.LONG,
    //       position: Toast.positions.BOTTOM,
    //       shadow: true,
    //       animation: true,
    //       hideOnPress: true,
    //       delay: 0,
    //     });
    //   });
  };

  const [mobileNumberError, setMobileNumberError] = useState('');
  const numberValidation = (value: string) => {
    // console.log(value);
    // let regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (value.length == 0) {
      setMobileNumberError('Number required');
      setTimeout(() => {
        setMobileNumberError('');
      }, 2000);
      setUserInfoValid({
        ...userInfoValid,
        numberValid: false,
      });
    } else if (!value.trimEnd() || value.length <= 6 || value.length > 13) {
      setMobileNumberError('6-13');
      setTimeout(() => {
        setMobileNumberError('');
      }, 2000);
      setUserInfoValid({
        ...userInfoValid,
        numberValid: false,
      });
    } else {
      setMobileNumberError('');
      setTimeout(() => {
        setMobileNumberError('');
      }, 2000);
      setUserInfoValid({
        ...userInfoValid,
        numberValid: true,
      });
    }
  };

  const handleOnChangeText = (getValue: string, fieldName: string) => {
    switch (fieldName) {
      case 'phoneNumber':
        numberValidation(getValue);
        break;
      default:
      // code block
    }
  };

  return (
    <CustomBackground>
      <>
        <CustomHeader
          leftIcon={icons.BACKARROW}
          title="Sign Up"
          marginBottom={hp(4)}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Register with mobile</Text>
          <Text style={styles.description}>
            Please type your number, then we’ll send a verification code for
            authentication.
          </Text>
          <View style={styles.labelView}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={{...styles.error, marginBottom: hp(0)}}>
              {mobileNumberError}
            </Text>
          </View>
          <TextInput
            value={mobileNumber}
            onChangeText={value => {
              handleOnChangeText(value, 'phoneNumber'), setMobileNumber(value);
            }}
            style={{
              ...styles.input,
              borderColor: mobileNumberError
                ? colors.RED_TEXT
                : colors.TRANSPARENT,
              marginBottom: hp(6.6),
            }}
            placeholder="Enter your mobile"
            placeholderTextColor={colors.GREY_TEXT}
            keyboardType="phone-pad"
            numberOfLines={1}
            multiline={false}
            maxLength={30}
          />

          <CustomButton
            title="Send OTP"
            height={hp(6)}
            width={wp(88.4)}
            activityIndicator={isLoaded}
            backgroundColor={colors.GREEN_BUTTON}
            onPress={mobileRegisterValidation}
            marginBottom={hp(2.2)}
          />
        </View>
      </>
    </CustomBackground>
  );
};

export default RegisterWithMobile;
