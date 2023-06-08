import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors/colors';
import {getData} from '../../asyncStorage/AsyncStorage';
// import {useSelector} from 'react-redux';
import {useTypedSelector} from '../../redux/Store';

type CustomBackgroundProps = {
  children: JSX.Element;
};

const STYLES = ['default', 'light-content', 'dark-content'] as const;

const CustomBackground: React.FC<CustomBackgroundProps> = ({children}) => {
  // const THEME = useTypedSelector((state) => state.app.theme);
  const [data, setData] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const value = await getData({storageKey: 'theme'});

      if (typeof value === 'string') {
        setData(value);
        // console.log(value);
      } else {
        // Handle the case when value is void or undefined
        console.log('Error occurred or value is undefined');
      }
    };
    fetchData();
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        // backgroundColor:THEME ==='Dark' ? colors.darkTheme : colors.lightTheme,
      }}>
      <StatusBar
      // backgroundColor={THEME ==='Dark' ? colors.darkTheme : colors.lightTheme}
      // barStyle={THEME ==='Dark'? STYLES[1] : STYLES[2]}
      />
      {children}
    </View>
  );
};

export default CustomBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
