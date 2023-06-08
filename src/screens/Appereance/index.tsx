import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import CustomBackground from '../../components/Background/Background'
import CustomHeader from '../../components/HeaderBar/Header'
import icons from '../../assets/icons/icons';
import { setData } from '../../asyncStorage/AsyncStorage';
import { setTheme } from '../../redux/Action';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/Store';
import colors from '../../assets/colors/colors';

const Appereance = () => {
  const dispatch = useDispatch();
  const THEME = useTypedSelector((state) => state.app.theme);
  const [lightMode, setLightMode] = useState(true);

  const handleThemeTap = () => {
    setLightMode(prevState => !prevState);
    setData({storageKey: "theme",value: lightMode ? "Light" : "Dark"});
    dispatch(setTheme(lightMode ? "Light" : "Dark"));
  }

  return (
    <CustomBackground>
    <View style={styles.container}> 
    <CustomHeader 
      title={"Appereance"}
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

     
      
        <View style={styles.imageContainer}>
        <Text style={{...styles.title,
        color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}>Theme</Text>
            <TouchableOpacity onPress={handleThemeTap} style={styles.logo}>
                <Image source={lightMode ? icons.sun : icons.moon} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.logo}>
                <Image source={icons.moon} style={styles.image} resizeMode="contain" />
            </TouchableOpacity> */}
        </View>

    </View>
    </CustomBackground>
  )
}

export default Appereance
