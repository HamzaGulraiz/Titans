import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontsizes from '../../assets/fontsizes/fontsizes';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/fonts/fonts';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  height: number;
  // width: number;
  backgroundColor: string;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  textColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  height,
  marginTop,
  marginBottom,
  marginHorizontal,
  textColor,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: backgroundColor ? backgroundColor : colors.TRANSPARENT,
        // width: width ? width : 0,
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        height: height ? height : 0,
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
        borderRadius: borderRadius ? borderRadius : wp(3.8),
        borderWidth: borderWidth ? borderWidth : 0,
        borderColor: borderColor ? borderColor : colors.TRANSPARENT,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: textColor ? textColor : colors.BLACK_TEXT,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    // marginHorizontal: wp(6.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontsizes.px_18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: fonts.Bold,
  },
});
