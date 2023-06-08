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
      marginBottom: hp(15),
      marginHorizontal: wp(12.5),
      color:colors.black,
      textAlign:"center",
      fontWeight:"400",
      fontSize:fontsizes.px_14,
      fontFamily:fonts.Regular,
    },
    dropDownView: {
    marginHorizontal: wp(6.4),
    flexDirection: "row",
    },
    dropDown:{
      width: wp(19.7),
      height: hp(5.5),
      // backgroundColor: '#F7F7FC',
      borderRadius: wp(1),
    },
    input: {
      // borderWidth: 2,
      paddingLeft: wp(2),
      marginLeft: wp(2),
      height: hp(5.5),
      width: wp(62),
      textAlign:"left",
      // backgroundColor: '#F7F7FC',
      borderRadius: wp(1),
      fontSize:fontsizes.px_14,
      fontWeight:"600",
      fontFamily:fonts.Light,

  },

});

export default styles;
