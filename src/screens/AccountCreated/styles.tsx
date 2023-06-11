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
  imageView: {
    marginTop: hp(5),
    marginBottom: hp(4),
    marginHorizontal: wp(10),
    width: wp(79.5),
    height: hp(50),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    marginHorizontal: wp(8.4),
    marginBottom: hp(2.6),
    fontWeight: '700',
    fontFamily: fonts.Regular,
    fontSize: fontsizes.px_32,
    color: colors.WHITE_BOLD_TEXT,
    textAlign: 'center',
  },
});

export default styles;
