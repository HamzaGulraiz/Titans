import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { StyleSheet, Text, View,FlatList, Image,ScrollView,ImageSourcePropType } from 'react-native'
  import React from 'react'
  import colors from '../../../assets/colors/colors';
  import fontsizes from '../../../assets/fontsizes/fontsizes';
  import fonts from '../../../assets/fonts/fonts';
  import Divider from '../../Divider/Divider';
import icons from '../../../assets/icons/icons';
import { useTypedSelector } from '../../../redux/Store';
  
  type ContactDataItem = {
    id: number;
    name: string;
    picture: ImageSourcePropType;
    story :string;
  };
  
  type CustomStoryFlatListProps = {
    data: ContactDataItem[];
   
  };
  
  
  const CustomStoryFlatList : React.FC<CustomStoryFlatListProps> = ({ data }) => {
    const THEME = useTypedSelector((state) => state.app.theme);
    return (
        <View style={styles.container}>
        <ScrollView horizontal >
        <View  style={styles.card}>
           <View style={{...styles.profilePicture,
          borderWidth:2,
          borderColor:'#ADB5BD',
          borderRadius:wp(4.8),
          }}>
       <Image source={icons.addStory} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={{...styles.profileName,
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
          }}>Your Story</Text> 
        </View>
        </View>


         {data.map((item) => (
           <View key={item.id} >
            <View  style={styles.card}>
           <View style={{...styles.profilePicture,
          borderWidth: item.story !='' ? 2 : 2,
          borderColor:item.story !='' ? "blue" : 'transparent',
          borderRadius:item.story !='' ? wp(4.8) : wp(4.8),
          }}>
    
            {
              item.picture ===null? (
                <View style={styles.defaultImage}>
                </View>
              ) : (
                <Image source={item.picture} resizeMode="cover" style={styles.image} />
              )
            }
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={{...styles.profileName,
          color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
          }}>{item.name}</Text> 
        </View>
        </View>
        </View>
        ))}
        </ScrollView>
        </View>
    )
}

  export default CustomStoryFlatList
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(6.4),
      // marginTop: hp(1),
        },
    card: {
      marginLeft: wp(1),
      alignItems:"center",
    },
    profilePicture: {
    //   height:hp(7.4),
      width:wp(14.9),
      padding:wp(0.5),
      marginBottom: hp(0.5),
    },
    defaultImage: {
      height:hp(6.3),
      width:wp(12.8),
      borderRadius:wp(4.2),
      backgroundColor:"#166FF6"
    },
    image: {
      height:hp(6.3),
      width:wp(12.8),
      borderRadius:wp(4.2)
    },
    info: {
        width:wp(12.8),
        marginBottom: hp(0.6),
    },
    profileName: {
      // color:colors.black,
      textAlign:"center",
      fontWeight:"600",
      fontSize:fontsizes.px_10,
      fontFamily:fonts.Light,
    },
   
  })