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
    marginHorizontal: wp(5.7),
  },
  title: {
    marginBottom: hp(1.7),
    fontWeight: '700',
    fontSize: fontsizes.px_32,
    fontFamily: fonts.Regular,
    color: colors.WHITE_BOLD_TEXT,
  },
  description: {
    marginBottom: hp(6.3),
    fontWeight: '400',
    fontSize: fontsizes.px_14,
    fontFamily: fonts.Regular,
    color: colors.WHITE_LIGHT_TEXT,
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.3),
  },
  label: {
    fontWeight: '400',
    fontSize: fontsizes.px_14,
    fontFamily: fonts.Regular,
    color: colors.WHITE_LIGHT_TEXT,
  },
  input: {
    height: hp(6),
    borderRadius: wp(2.9),
    width: '100%',
    paddingLeft: wp(4),
    backgroundColor: colors.CARD_BACKGROUND,
    color: colors.GREY_TEXT,
    borderWidth: 1,
  },
  error: {
    fontWeight: '400',
    fontSize: fontsizes.px_14,
    fontFamily: fonts.Regular,
    color: colors.RED_TEXT,
    textAlign: 'right',
  },
});

export default styles;
