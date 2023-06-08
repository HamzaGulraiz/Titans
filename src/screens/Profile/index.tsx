import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, Text, TouchableOpacity, View,TextInput,Platform} from 'react-native';
import React,{useState,useRef} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomButton from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
// import { VERIFICATION_CODE } from '../../constants/Navigator';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import SelectDropdown from 'react-native-select-dropdown'
import { useTypedSelector } from '../../redux/Store';
import { request, PERMISSIONS } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MY_TABS } from '../../constants/Navigator';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack:any;
}



const Profile = () => {
  const navigation = useNavigation<NavigationProps>();
  const THEME = useTypedSelector((state) => state.app.theme);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]=useState("");



  const requestCameraPermission = async () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      // setPermissionResult(result)
      console.log('Permission for camera ', result);
      // if (result === 'granted') {
      //   openCamera();
      // } else {
      // }
    });
  };

  const handleAddImage = async () => {
    await requestCameraPermission();

    const result = await launchCamera({mediaType:"photo"});
    console.log('<====>', result);
  };

  // const openGallery = async () => {
  //   launchImageLibrary(options, response => {
  //     if (response.didCancel === true) {
  //       console.log('user cancelled');
  //       refRBSheet?.current?.close();
  //       // setUploadImage('');
  //     } else {
  //       refRBSheet?.current?.close();
  //       if (response.assets.length > 6) {
  //         console.log('more than six');
  //         alert('media should not be more than 6!');
  //       }
  //       // else if (response.assets.length - 1 + images.value.length > 6) {
  //       //   alert('d not be more than 6!');
  //       // }
  //       else {
  //         checkArray(response.assets);
  //         // setImages(response.assets);
  //       }
  //     }
  //   });
  // };


  return (
    <CustomBackground>
    <View style={styles.container}>
    <CustomHeader 
      title={"Your Profile"}
      leftIcon={icons.back} 
      onPressLeftIcon={()=>{
        navigation.goBack();
      }}
      rightIcon={0} 
      onPressRightIcon={()=>{}}
    secondRightIcon={0}
    onPressSecondRightIcon={()=>{}}
    marginTop={hp(1)}
    marginBottom={hp(10)}
    />

          <View style={styles.userImg}>
          <Image style={styles.image} 
          source={
          THEME === "Dark" ?  
          icons.defaultAccountImageDark 
          : 
          icons.defaultAccountImageLight
        }  
          resizeMode="contain" />
          <TouchableOpacity onPress={handleAddImage}>
            <Image style={styles.addImage} resizeMode="contain" source={
              THEME === "Dark" ?
              icons.addImageDark
              : 
              icons.addImageLight
            } />
          </TouchableOpacity>
          </View>

<TextInput
        style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2,
        }}
        onChangeText={setFirstName}
        value={firstName}
        keyboardType="default"
        placeholder='First Name (Required)'
        numberOfLines={1}
        maxLength={15}
        placeholderTextColor={THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2}
      />

<TextInput
        style={{...styles.input,
          backgroundColor: THEME === "Dark" ? "#152033": "#F7F7FC", 
          color: THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2,
        }}
        onChangeText={setLastName}
        value={lastName}
        keyboardType="default"
        placeholder='Last Name (Optional)'
        numberOfLines={1}
        maxLength={15}
        placeholderTextColor={THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2}
      />

<View style={{
  bottom: hp(3),
  position: "absolute",
  width: "100%",
 }}>
    <CustomButton 
    title='Save'
    onPress={()=>{
      navigation.navigate(MY_TABS);
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

export default Profile;
