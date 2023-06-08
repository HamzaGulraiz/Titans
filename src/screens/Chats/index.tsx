import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ImageSourcePropType, Text, View} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import CustomSearchBar from '../../components/SearchBar/SearchBar';
import CustomchatFlatList from '../../components/FlatList/ChatFlatList/ChatFlatList';
import icons from '../../assets/icons/icons';
import fonts from '../../assets/fonts/fonts';
import images from '../../assets/images/images';
import CustomStoryFlatList from '../../components/FlatList/StoryFlatList/StoryFlatList';


const Chats = () => {
  const [searchValue, setSearchValue] = useState('');

  let contactData: { id: number, name: string,status:string,picture:ImageSourcePropType,story:string,date:string,notification:string }[] = [
    { 
    "id": 0,
    "name": "Athalia Putri",
    "status": "Last seen yesterday", 
    "picture": images.test1,
    "story" : "",
    "date": "today",
    "notification":"3",
  },
    { 
    "id": 1, "name": 
    "Erlan Sadewa","status": 
    "online", "picture": images.test2,
    "story" : "yes",
    "date": "yesterday",
    "notification":"1",
  },
    {
    "id": 2, "name": 
    "Midala Huera" ,
    "status": "Last seen 3 hours ago", 
    "picture": images.test3,
    "story" : "",
    "date": "30/05",
    "notification":"",
  },
    { 
    "id": 3, 
    "name": "Nafisa Gitari" ,
    "status": "online", 
    "picture": images.test4,
    "story" : "",
    "date": "17/5",
    "notification":"5",
  },

];

let storyData: { id: number, name: string,picture:ImageSourcePropType,story:string }[] = [
  { 
  "id": 0,
  "name": "Athalia Putri",
  "picture": images.test1,
  "story" : "",
},
  { 
  "id": 1, 
  "name": "Erlan Sadewa",
  "picture": images.test2,
  "story" : "yes",
},
  {
  "id": 2, 
  "name": "Midala Huera" ,
  "picture": images.test3,
  "story" : "",
},
  { 
  "id": 3, 
  "name": "Nafisa Gitari" ,

  "picture": images.test4,
  "story" : "",
},

];

  
  return (
    <CustomBackground>
      <>
    <View style={styles.container}>
      <CustomHeader 
      title={"Chats"}
      leftIcon={0} 
      onPressLeftIcon={()=>{}}

      rightIcon={icons.archive} 
      onPressRightIcon={()=>{console.log("RIcon");
      }}
      secondRightIcon={icons.newChat}
      onPressSecondRightIcon={()=>{}}
      marginTop={hp(1)}
      marginBottom={hp(4)}
      />
      <CustomStoryFlatList data={storyData} /> 

       <CustomSearchBar
        placeHolder='Search'
        height={hp(4.4)}
        width={0}
        marginTop={hp(4)}
        marginBottom={hp(1)}
        value={searchValue}
        setValue={setSearchValue}
           />
           <CustomchatFlatList data={contactData} divider={false} />
    </View>
 
        </>
    </CustomBackground>
  );
};

export default Chats;
