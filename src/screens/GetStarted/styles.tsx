import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/colors/colors';
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
  imageView: {
    marginTop: hp(5),
    marginBottom: hp(4),
    marginHorizontal: wp(10),
    width: wp(79.5),
    height: hp(50),
    // borderWidth: 1,
    // borderColor: colors.DIVIDER_COLOR,
    // borderRadius: wp(19.3),
    // backgroundColor: colors.DIVIDER_COLOR,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    marginHorizontal: wp(10),
    marginBottom: hp(2),
    fontWeight: '400',
    fontFamily: fonts.Regular,
    fontSize: fontsizes.px_24,
    color: colors.WHITE_BOLD_TEXT,
    textAlign: 'center',
  },
  description: {
    marginHorizontal: wp(10),
    marginBottom: hp(6),
    fontWeight: '400',
    fontFamily: fonts.Light,
    fontSize: fontsizes.px_18,
    color: colors.GREY_TEXT,
    textAlign: 'center',
  },
  dotView: {
    marginHorizontal: wp(40),
    marginBottom: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  dot: {
    height: hp(1.5),
    width: wp(3),
    borderRadius: wp(3),
  },
});

export default styles;
