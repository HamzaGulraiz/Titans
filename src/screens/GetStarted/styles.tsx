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
});

export default styles;
