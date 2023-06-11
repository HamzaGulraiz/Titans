import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/fonts/fonts';
import fontsizes from '../../assets/fontsizes/fontsizes';

type CustomHeaderProps = {
  title?: string;
  leftIcon?: ImageSourcePropType;
  onPressLeftIcon?(): void;
  rightIcon?: ImageSourcePropType;
  onPressRightIcon?(): void;
  secondRightIcon?: ImageSourcePropType;
  onPressSecondRightIcon?(): void;
  marginTop?: number;
  marginBottom?: number;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  secondRightIcon,
  onPressSecondRightIcon,
  marginTop,
  marginBottom,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      {leftIcon ? (
        <View style={styles.icon}>
          <Image source={leftIcon} resizeMode="contain" style={styles.image} />
        </View>
      ) : null}
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(5.7),
    alignItems: 'center',
    // height: hp(5),
    // backgroundColor: 'red',
  },
  title: {
    // marginRight: wp(2),
    marginLeft: wp(6),
    fontWeight: '700',
    fontSize: fontsizes.px_18,
    fontFamily: fonts.Bold,
    color: colors.WHITE_LIGHT_TEXT,
  },
  icon: {
    height: hp(2.7),
    width: wp(5.8),
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
