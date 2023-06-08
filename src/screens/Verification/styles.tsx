import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backGround,
  },
  title: {
      // marginTop: hp(20),
      marginBottom: hp(2),
      marginHorizontal: wp(12.5),
      color:colors.black,
      textAlign:"center",
      fontWeight:"700",
      fontSize:fontsizes.px_24,
      fontFamily:fonts.Bold,
    
  },
  description: {
      marginBottom: hp(8),
      marginHorizontal: wp(12.5),
      color:colors.black,
      textAlign:"center",
      fontWeight:"400",
      fontSize:fontsizes.px_14,
      fontFamily:fonts.Regular,
    },
    inputView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: wp(15),
      // marginBottom: hp(1.5),
      // backgroundColor:"red"
    },
    input: {
      // borderWidth: 2,
      // marginLeft: wp(2),
      height: hp(5.5),
      width: wp(10),
      textAlign:"center",
      // backgroundColor: '#F7F7FC',
      borderRadius: wp(10),
      fontSize:fontsizes.px_16,
      fontWeight:"600",
      fontFamily:fonts.Bold,

  },
  link:{
    color:colors.black,
    textAlign:"center",
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Bold,
  },
});

export default styles;
