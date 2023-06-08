import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, Text, TouchableOpacity, View,TextInput} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomButton from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { VERIFICATION_CODE } from '../../constants/Navigator';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import SelectDropdown from 'react-native-select-dropdown'
import { useTypedSelector } from '../../redux/Store';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack:any;
}



const PhoneNumber = () => {
  const navigation = useNavigation<NavigationProps>();
  const THEME = useTypedSelector((state) => state.app.theme);
  const [text, onChangeText] = useState('');  
  const countrieCode = ["+62", "+92", "+201", "+111"]

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
    Enter Your Phone Number
    </Text>
    <Text style={{...styles.description,
        color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
    }}>
    Please confirm your country code and enter your phone number
    </Text>


    <View style={styles.dropDownView}>
      <SelectDropdown
      data={countrieCode}
      defaultValue={countrieCode[1]}
      buttonStyle={{...styles.dropDown,
      backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
      }}
      buttonTextStyle={{
        color: THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2,
        fontSize:fontsizes.px_14,
      fontWeight:"600",
      fontFamily:fonts.Light,
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
      }}
      // renderSearchInputRightIcon={renderIcon}
      // renderIcon={renderIcon}
    />
     
        <TextInput
        style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2,
        }}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder='Phone Number'
        numberOfLines={1}
        placeholderTextColor={THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2}
      />
    </View>

 
 <View style={{
  bottom: hp(3),
  position: "absolute",
  width: "100%",
 }}>
    <CustomButton 
    title='Continue'
    onPress={()=>{
      navigation.navigate(VERIFICATION_CODE);
    }}
    height={hp(7.4)}
    marginTop={0}
    marginBottom={0}
    />
    </View>      
    </View>
    </CustomBackground>
  );
};

export default PhoneNumber;
