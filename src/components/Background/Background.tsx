import {StyleSheet, Text, View, StatusBar, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images/images';

type CustomBackgroundProps = {
  children: JSX.Element;
};

const STYLES = ['default', 'light-content', 'dark-content'] as const;

const CustomBackground: React.FC<CustomBackgroundProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.BACKGROUND} barStyle={STYLES[0]} />
      <ImageBackground
        source={images.SCREEN_BACKGROUND}
        style={styles.background}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
