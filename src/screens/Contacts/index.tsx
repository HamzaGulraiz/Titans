import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ImageSourcePropType, Text, View} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import CustomSearchBar from '../../components/SearchBar/SearchBar';
import CustomchatFlatList from '../../components/FlatList/ChatFlatList/ChatFlatList';
import images from '../../assets/images/images';


const Contacts = () => {
  const [searchValue, setSearchValue] = useState('');

  let contactData: { id: number, name: string,status:string,picture:ImageSourcePropType,story:string,date:string,notification:string }[] = [
    { 
    "id": 0,
    "name": "Athalia Putri",
    "status": "Last seen yesterday", 
    "picture": images.test1,
    "story" : "",
    "date": "",
    "notification":"",
  },
    { 
    "id": 1, "name": 
    "Erlan Sadewa","status": 
    "online", "picture": images.test2,
    "story" : "yes",
    "date": "",
    "notification":"",

  },
  //   {
  //   "id": 2, "name": 
  //   "Midala Huera" ,
  //   "status": "Last seen 3 hours ago", 
  //   "picture": images.test3,
  //   "story" : "",
  // },
  //   { 
  //   "id": 3, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "online", 
  //   "picture": images.test4,
  //   "story" : "",
  // },
  // { 
  //   "id": 4, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "Last seen 1 hours ago", 
  //   "picture": null,
  //   "story" : "",
  // },
  // { 
  //   "id": 5, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "online", 
  //   "picture": null,
  //   "story" : "",
  // },
  // { 
  //   "id": 6, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "Last seen 7 hours ago", 
  //   "picture":images.test3,
  //   "story" : "",
  // },
  // { 
  //   "id": 7, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "Last seen 1 hours ago", 
  //   "picture": images.test2,
  //   "story" : "",
  // },
  // { 
  //   "id": 8, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "online", 
  //   "picture": null,
  //   "story" : "",
  // },
  // { 
  //   "id": 9, 
  //   "name": "Nafisa Gitari" ,
  //   "status": "Last seen 7 hours ago", 
  //   "picture": images.test1,
  //   "story" : "",
  // },
];

  
  return (
    <CustomBackground>
      <>
    <View style={styles.container}>
      <CustomHeader 
      title={"Contacts"}
      leftIcon={0} 
      onPressLeftIcon={()=>{}}
      rightIcon={icons.add} 
      onPressRightIcon={()=>{console.log("RIcon");
    }}
    secondRightIcon={0}
    onPressSecondRightIcon={()=>{}}
    marginTop={hp(1)}
    marginBottom={hp(4)}
    />
    <CustomSearchBar
        placeHolder='Search'
        height={hp(4.4)}
        width={0}
        marginTop={0}
        marginBottom={hp(1)}
        value={searchValue}
        setValue={setSearchValue}
        />
    <CustomchatFlatList data={contactData} divider={true} />
    </View>
    
        </>
    </CustomBackground>
  );
};

export default Contacts;
