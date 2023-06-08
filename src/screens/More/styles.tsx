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
    bottom: hp(0.5),
    // backgroundColor: colors.backGround,
  },
  userInformation: {
    marginHorizontal: wp(6.4),
    marginBottom: hp(5),
    flexDirection: "row",
    // backgroundColor:"red",
    alignItems: "center",
  },
  userImg: {
    height: hp(7),
      width: wp(13.8),
      borderRadius:wp(13.8),
  },
  image:{
    height: "100%",
    width: "100%",
  },
  userNameView: {
    marginLeft: wp(4),
  },
  userName: {
    // color:colors.black,
    textAlign:"center",
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Bold,
    marginBottom: hp(1),
  },
  userNumber:{
    // color:colors.black,
    textAlign:"center",
    fontWeight:"400",
    fontSize:fontsizes.px_12,
    fontFamily:fonts.Light,
  },
  forwardIcon: {
    position: "absolute",
    height:hp(2.3),
      width:wp(5),
      right:1,
  },
  settingCard: {
    marginHorizontal: wp(6.4),
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: "row",
    // backgroundColor:"red",
    alignItems: "center",
  },
  settingIcon:{
    height:hp(2.6),
    width:wp(5.3),
  },
  settingTitle:{
    marginLeft: wp(4),
    // color:colors.black,
    textAlign:"center",
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Bold,
  },
});

export default styles;
