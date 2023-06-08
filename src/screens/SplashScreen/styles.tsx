import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/fonts/fonts';
import fontsizes from '../../assets/fontsizes/fontsizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backGround,
  },
  background: {
    flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: hp(30),
    width: wp(19.3),
    height: wp(19),
    borderRadius: wp(19.3),
    // backgroundColor: colors.DIVIDER_COLOR,
  },
  logoText: {
    fontWeight: '700',
    fontFamily: fonts.Bold,
    fontSize: fontsizes.px_36,
    color: colors.GREEN_TEXT,
    marginTop: hp(2),
  },
  // imageView: {
  //   marginTop: hp(12),
  //   marginBottom: hp(6),
  //   marginHorizontal: wp(6.4),
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // borderWidth: 1,
  // },
  // image: {
  //   height: hp(33.3),
  //   width: wp(65),
  // },
  // description: {
  //     marginBottom: hp(15),
  //     marginHorizontal: wp(12.5),
  //     color:colors.black,
  //     textAlign:"center",
  //     fontWeight:"700",
  //     fontSize:fontsizes.px_24,
  //     fontFamily:fonts.Bold,
  //   },
  //   link:{
  //     color:colors.black,
  //     textAlign:"center",
  //     fontWeight:"600",
  //     fontSize:fontsizes.px_14,
  //     fontFamily:fonts.Bold,
  //   },
});

export default styles;
