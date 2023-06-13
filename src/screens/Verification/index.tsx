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
import React, {useState, useRef} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import CustomButton from '../../components/Button/Button';
import {ACCOUNT_CREATED} from '../../constants/Navigator';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack: any;
};

interface HandleTextChangeProps {
  value: string;
  index: number;
}

const Verification = () => {
  const navigation = useNavigation<NavigationProps>();
  const [mobileNumber, setMobileNumber] = useState('03412344323');
  const [isLoaded, setIsLoaded] = useState(false);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const secondInputRef = useRef<any>(null);
  const thirdInputRef = useRef<any>(null);
  const fourthInputRef = useRef<any>(null);

  const handleTextChange: React.FC<HandleTextChangeProps> = ({
    value,
    index,
  }) => {
    const newCode = code.split('');
    newCode[index] = value;

    // join the individual values into a single string
    setCode(newCode.join(''));

    // move focus to the next input
    if (index === 0 && value !== '') {
      secondInputRef.current?.focus();
    } else if (index === 1 && value !== '') {
      thirdInputRef.current?.focus();
    } else if (index === 2 && value !== '') {
      fourthInputRef.current?.focus();
    }

    if (index === 3) {
      // navigation.navigate(PROFILE);
    }

    return null;
  };

  const codeValidation = () => {
    setIsLoaded(true);
    if (code.length === 4) {
      setTimeout(() => {
        setIsLoaded(false);
        navigation.navigate(ACCOUNT_CREATED);
      }, 1000);
    } else {
      setCodeError('Required');
      setIsLoaded(false);
      setTimeout(() => {
        setCodeError('');
      }, 1000);
    }
  };

  return (
    <CustomBackground>
      <>
        <CustomHeader
          leftIcon={icons.BACKARROW}
          onPressLeftIcon={() => {
            navigation.goBack();
          }}
          title="Verification"
          marginBottom={hp(4)}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Enter your code</Text>
          <Text
            style={{
              ...styles.description,
              marginBottom: hp(0.4),
              color: colors.WHITE_LIGHT_TEXT,
            }}>
            Please type the code we sent to
          </Text>
          <Text
            style={{
              ...styles.description,
              marginBottom: hp(4.4),
              color: colors.GREEN_TEXT,
            }}>
            {mobileNumber}
          </Text>

          <View style={styles.inputView}>
            <TextInput
              style={{
                ...styles.input,
                borderColor: codeError ? colors.RED_TEXT : colors.TRANSPARENT,
                // marginBottom: hp(6.6),
              }}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => handleTextChange({value, index: 0})}
              value={code[0]}
            />
            <TextInput
              style={{
                ...styles.input,
                borderColor: codeError ? colors.RED_TEXT : colors.TRANSPARENT,
                // marginBottom: hp(6.6),
              }}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => handleTextChange({value, index: 1})}
              value={code[1]}
              ref={secondInputRef}
            />
            <TextInput
              style={{
                ...styles.input,
                borderColor: codeError ? colors.RED_TEXT : colors.TRANSPARENT,
                // marginBottom: hp(6.6),
              }}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => handleTextChange({value, index: 2})}
              value={code[2]}
              ref={thirdInputRef}
            />
            <TextInput
              style={{
                ...styles.input,
                borderColor: codeError ? colors.RED_TEXT : colors.TRANSPARENT,
                // marginBottom: hp(6.6),
              }}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => handleTextChange({value, index: 3})}
              value={code[3]}
              ref={fourthInputRef}
            />
          </View>

          <Text style={styles.resend}>Resend code 30</Text>
          <Text style={styles.link}>Resend Link</Text>

          <CustomButton
            title="Continue"
            height={hp(6)}
            width={wp(88.4)}
            activityIndicator={isLoaded}
            backgroundColor={colors.GREEN_BUTTON}
            onPress={codeValidation}
            marginBottom={hp(2.2)}
          />
        </View>
      </>
    </CustomBackground>
  );
};

export default Verification;

// const Verification = () => {
//   const navigation = useNavigation<NavigationProps>();
//   const THEME = useTypedSelector((state) => state.app.theme);

//   return (
//     <CustomBackground>
//     <View style={styles.container}>
//     <CustomHeader
//       title={""}
//       leftIcon={icons.back}
//       onPressLeftIcon={()=>{
//         navigation.goBack();
//       }}
//       rightIcon={0}
//       onPressRightIcon={()=>{}}
//     secondRightIcon={0}
//     onPressSecondRightIcon={()=>{}}
//     marginTop={hp(1)}
//     marginBottom={hp(20)}
//     />

//     <Text style={{...styles.title,
//     color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//     }}>
//    Enter Code
//     </Text>
//     <Text style={{...styles.description,
//         color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//     }}>
//     We have sent you an SMS with the code to +62 1309 - 1710 - 1920
//     </Text>

//     <View
//       style={styles.inputView}>
//       <TextInput
//          style={{...styles.input,
//           backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC",
//           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//         }}
//         maxLength={1}
//         keyboardType="numeric"
//         onChangeText={value => handleTextChange({value, index:0})}
//         value={code[0]}
//       />
//       <TextInput
//          style={{...styles.input,
//           backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC",
//           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//         }}
//         maxLength={1}
//         keyboardType="numeric"
//         onChangeText={value => handleTextChange({value, index:1})}
//         value={code[1]}
//         ref={secondInputRef}
//       />
//       <TextInput
//          style={{...styles.input,
//           backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC",
//           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//         }}
//         maxLength={1}
//         keyboardType="numeric"
//         onChangeText={value => handleTextChange({value, index:2})}
//         value={code[2]}
//         ref={thirdInputRef}
//       />
//       <TextInput
//          style={{...styles.input,
//           backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC",
//           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
//         }}
//         maxLength={1}
//         keyboardType="numeric"
//         onChangeText={value => handleTextChange({value, index:3})}
//         value={code[3]}
//         ref={fourthInputRef}
//       />
//     </View>

//  <View style={{
//   bottom: hp(3),
//   position: "absolute",
//   width: "100%",
//  }}>
//     <TouchableOpacity>
//             <Text style={{...styles.link,
//              color: THEME === "Dark" ? "#F7F7FC" : "#002DE3",
//             }}>
//             Resend Code
//             </Text>
//           </TouchableOpacity>
//     </View>
//     </View>
//     </CustomBackground>
//   );
// };

// export default Verification;
