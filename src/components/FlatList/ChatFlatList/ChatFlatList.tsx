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
import { useTypedSelector } from '../../../redux/Store';

type ContactDataItem = {
  id: number;
  name: string;
  status: string;
  picture: ImageSourcePropType;
  story :string;
  date: string;
  notification:string;
};

type CustomchatFlatListProps = {
  data: ContactDataItem[];
  divider:boolean;
};


const CustomchatFlatList : React.FC<CustomchatFlatListProps> = ({ data,divider }) => {
  const THEME = useTypedSelector((state) => state.app.theme);
  return (
    <ScrollView style={styles.container}>
       {data.map((item) => (
         <View key={item.id}>
    <View  style={styles.card}>
         <View style={{...styles.profilePicture,
        borderWidth: item.story !='' ? 2 : 2,
        borderColor:item.story !='' ? "blue" : 'transparent',
        borderRadius:item.story !='' ? wp(4.8) : wp(4.8),
        }}>
          {
            item.status === "online" ? (
              <View style={styles.onlineStatus}>
              </View>    
            ): null
          }
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
        <Text style={{...styles.profileName,
        color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
        }}>{item.name}</Text> 
        <Text style={{...styles.status,
        color: THEME === "Dark" ? colors.lightThemeTextH2 : colors.darkThemeTextH2,
        }}>{item.status}</Text>
      </View>

      <View style={styles.notificationView}>
        {item.date ? ( 
          <View style={styles.date}>
              <Text style={{...styles.dateText,
               color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
              }}>{item.date}</Text>
          </View>
        ) : null}

        {item.notification ? (
          <View style={styles.notification}>
              <Text style={styles.notificationText}>{item.notification}</Text>
          </View>
        ) : null}

        </View>
      </View>
      {divider ? (
      <Divider 
       marginTop={0}
       marginBottom={0} 
       marginLeft={0}
       marginRight={0}
       height={hp(0.2)}
       width={wp(85)}
       alignSelf='center'
       dividerColor={THEME === "Dark" ? colors.lightGrey : colors.grey}
      />
      ) : (
        <Divider 
        marginTop={0}
        marginBottom={0} 
        marginLeft={0}
        marginRight={0}
        height={hp(0.2)}
        width={wp(85)}
        alignSelf='center'
        dividerColor='transparent'
       />
      )}
      </View>
      ))}
      </ScrollView>
  )
}

export default CustomchatFlatList

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(6.4),
  },
  card: {
    flexDirection:"row",
    marginTop: hp(2),
    marginBottom: hp(2),

  },
  profilePicture: {
    height:hp(7.4),
    width:wp(14.9),
    padding:wp(0.5)
  },
  onlineStatus: {
    position:"absolute",
    zIndex:1,
    right:1,
    bottom:hp(5),
    height:hp(2),
    width:wp(3.4),
    borderRadius:wp(2.5),
    backgroundColor:"#2CC069",

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
    marginLeft:wp(4),
    marginTop:hp(0.5),
    // justifyContent:"center",
  },
  profileName: {
    marginBottom: hp(0.6),
    // color:colors.black,
    // marginRight: wp(2),
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Black,
  },
  status: {
    // color:colors.black,
    // marginRight: wp(2),
    fontWeight:"400",
    fontSize:fontsizes.px_12,
    fontFamily:fonts.Light,
  },
  notificationView:{
    position:"absolute",
    right:0,

  },
  date: {
    marginBottom:hp(1)
},
dateText: {
  //  color:colors.black,
    // marginRight: wp(2),
    fontWeight:"400",
    fontSize:fontsizes.px_10,
    fontFamily:fonts.Light,
},
notification: {
    backgroundColor:"#D2D5F9",
    height:hp(3),
    width:wp(6),
    borderRadius:wp(5),
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    right:0,
    marginTop:hp(3),

  },
  notificationText:{
    //  color:colors.black,
    // marginRight: wp(2),
    fontWeight:"600",
    fontSize:fontsizes.px_10,
    fontFamily:fonts.Bold,
  },
})