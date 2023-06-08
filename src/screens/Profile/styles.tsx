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
    input: {
      paddingLeft: wp(2),
      marginHorizontal: wp(6.7),
      marginBottom: hp(2),
      height: hp(5.5),
      textAlign:"left",
      borderRadius: wp(1),
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
  userImg: {
    alignItems:"center",
    justifyContent:"center",
    marginBottom: hp(6),
    marginHorizontal: wp(6.7),
    // borderRadius:wp(30),
  },
  image:{
    height: hp(16),
    // height:"100%",
    width: wp(30),
    // width:"100%",
    borderRadius:wp(30),
  },
  addImage: {
    position:"absolute",
    bottom: hp(-1),
    left: wp(4),
    height: hp(4),
    width: wp(7),
  },
});

export default styles;
