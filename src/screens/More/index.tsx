import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image,TouchableOpacity, ImageSourcePropType, Text, View} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import Divider from '../../components/Divider/Divider';
import colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { APPEREANCE } from '../../constants/Navigator';
import { useTypedSelector } from '../../redux/Store';

interface SettingItem {
  id: number;
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
}

const More = () => {

  const navigation = useNavigation<NavigationProps>();
  const THEME = useTypedSelector((state) => state.app.theme);

  let settingData: SettingItem[] = [
    { 
    id: 0,
    title: "Account", 
    icon: icons.account,
    onPress: () => {
      console.log("Accounts");
    },
  },
  { 
    id: 1,
    title: "Chats", 
    icon: icons.chatInactive,
    onPress: () => {
      console.log("Chats");
    },
  },
  { 
    id: 2,
    title: "Appereance", 
    icon: icons.appereance,
    onPress: () => {
      // console.log("Appereance");
      navigation.navigate(APPEREANCE);
    },
  },
  { 
    id: 3,
    title: "Notification", 
    icon: icons.notifications,
    onPress: () => {
      console.log("Nofity");
    },
  },
  { 
    id: 4,
    title: "Privacy", 
    icon: icons.privacy,
    onPress: () => {
      console.log("Privacy");
    },
  },
  { 
    id: 5,
    title: "Data Usage", 
    icon: icons.dataUsage,
    onPress: () => {
      console.log("Data usage");
    },
  },
  ]
  let settingDataAfterDivider: SettingItem[] = [
    { 
    id: 0,
    title: "Help", 
    icon: icons.help,
    onPress: () => {
    
      console.log("help");
      
    },
  },
  { 
    id: 1,
    title: "Invite Your Friends", 
    icon: icons.invite,
    onPress: () => {
      console.log("invite");
    },
  },
  ]

  
  return (
    <CustomBackground>
    <View style={styles.container}>
    <CustomHeader 
      title={"More"}
      leftIcon={0} 
      onPressLeftIcon={()=>{}}

      rightIcon={0} 
      onPressRightIcon={()=>{console.log("RIcon");
      }}
      secondRightIcon={0}
      onPressSecondRightIcon={()=>{}}
      marginTop={hp(1)}
      marginBottom={hp(4)}
      />

      <TouchableOpacity style={styles.userInformation}>
          <View style={styles.userImg}>
          <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={icons.defaultAccountImageLight}  resizeMode="contain" />
          </View>
          <View style={styles.userNameView}>
            <Text style={{...styles.userName,
           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
            }}>Almayra Zamzamy</Text>
            <Text style={{...styles.userNumber,
            color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
            }}>+62 1309 - 1710 - 1920</Text>
          </View>
          <View style={styles.forwardIcon}>
          <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={icons.forward}  resizeMode="contain" />
          </View>
      </TouchableOpacity>
      {settingData.map((item)=>(
        <TouchableOpacity key={item.id} onPress={item.onPress} style={styles.settingCard}>
            <View style={styles.settingIcon}>
            <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={item.icon}  resizeMode="contain" />
            </View>
            <Text style={{...styles.settingTitle,
            color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
            }}>{item.title}</Text>
            <View style={styles.forwardIcon}>
          <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={icons.forward}  resizeMode="contain" />
          </View>
        </TouchableOpacity>
      ))}
      <Divider 
       marginTop={hp(2)}
       marginBottom={hp(2)} 
       marginLeft={0}
       marginRight={0}
       height={hp(0.2)}
       width={wp(85)}
       alignSelf='center'
       dividerColor={THEME === "Dark" ? colors.lightGrey : colors.grey}
      />
       {settingDataAfterDivider.map((item)=>(
        <TouchableOpacity key={item.id} onPress={item.onPress} style={styles.settingCard}>
            <View style={styles.settingIcon}>
            <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={item.icon}  resizeMode="contain" />
            </View>
            <Text style={{...styles.settingTitle,
             color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
            }}>{item.title}</Text>
            <View style={styles.forwardIcon}>
          <Image style={{...styles.image,
          tintColor: THEME === "Dark" ? colors.lightTheme : colors.darkTheme,
           }} source={icons.forward}  resizeMode="contain" />
          </View>
        </TouchableOpacity>
      ))}
     
    </View>
    </CustomBackground>
  );
};

export default More;
