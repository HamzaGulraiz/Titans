import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontsizes from '../../assets/fontsizes/fontsizes';
import { useTypedSelector } from '../../redux/Store';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/fonts/fonts';


type CustomButtonProps = {
  onPress: () => void;
  title: string;
  height: number;
  marginTop: number;
  marginBottom: number;
}

const CustomButton :React.FC<CustomButtonProps> = ({
  title, 
  onPress, 
  height,
  marginTop,
  marginBottom,
}) => {
  const THEME = useTypedSelector((state) => state.app.theme);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: THEME === "Dark" ? "#375FFF" :"#002DE3" ,
        // width: width ? width : "100%",
        height: height ? height : 0,
        marginTop:marginTop?marginTop:0,
        marginBottom:marginBottom?marginBottom:0,
      }}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: wp(6.4),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color:"#F7F7FC",
    fontSize: fontsizes.px_16,
    fontWeight: '600',
    textAlign:"center",
    fontFamily:fonts.Bold
  },
});
