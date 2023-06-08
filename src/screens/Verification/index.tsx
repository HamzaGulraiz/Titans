import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, Text, TouchableOpacity, View,TextInput} from 'react-native';
import React,{useState,useRef} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomButton from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import SelectDropdown from 'react-native-select-dropdown'
import { useTypedSelector } from '../../redux/Store';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';
import { PROFILE } from '../../constants/Navigator';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack:any;
}

interface HandleTextChangeProps {
  value:string;
  index: number;
  
}

const Verification = () => {
  const navigation = useNavigation<NavigationProps>();
  const THEME = useTypedSelector((state) => state.app.theme);
  const [code, setCode] = useState('');
  const secondInputRef = useRef<any>(null);
  const thirdInputRef = useRef<any>(null);
  const fourthInputRef = useRef<any>(null);

  const handleTextChange : React.FC<HandleTextChangeProps> = ({
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

    if(index === 3){
      navigation.navigate(PROFILE);
      
    }

     return null; 
  };



  return (
    <CustomBackground>
    <View style={styles.container}>
    <CustomHeader 
      title={""}
      leftIcon={icons.back} 
      onPressLeftIcon={()=>{
        navigation.goBack();
      }}
      rightIcon={0} 
      onPressRightIcon={()=>{}}
    secondRightIcon={0}
    onPressSecondRightIcon={()=>{}}
    marginTop={hp(1)}
    marginBottom={hp(20)}
    />

    <Text style={{...styles.title,
    color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
    }}>
   Enter Code
    </Text>
    <Text style={{...styles.description,
        color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
    }}>
    We have sent you an SMS with the code to +62 1309 - 1710 - 1920
    </Text>


    <View
      style={styles.inputView}>
      <TextInput
         style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}        
        maxLength={1}
        keyboardType="numeric"
        onChangeText={value => handleTextChange({value, index:0})}
        value={code[0]}
      />
      <TextInput
         style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={value => handleTextChange({value, index:1})}
        value={code[1]}
        ref={secondInputRef}
      />
      <TextInput
         style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}        
        maxLength={1}
        keyboardType="numeric"
        onChangeText={value => handleTextChange({value, index:2})}
        value={code[2]}
        ref={thirdInputRef}
      />
      <TextInput
         style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}        
        maxLength={1}
        keyboardType="numeric"
        onChangeText={value => handleTextChange({value, index:3})}
        value={code[3]}
        ref={fourthInputRef}
      />
    </View>

 
 <View style={{
  bottom: hp(3),
  position: "absolute",
  width: "100%",
 }}>
    <TouchableOpacity>
            <Text style={{...styles.link,
             color: THEME === "Dark" ? "#F7F7FC" : "#002DE3",
            }}>
            Resend Code
            </Text>
          </TouchableOpacity>
    </View>      
    </View>
    </CustomBackground>
  );
};

export default Verification;
