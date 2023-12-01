import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import SubHeader from '../componants/SubHeader';
import Catagoris from '../componants/Catagoris';
import Carousel from '../componants/Carousel';
import Services from '../componants/Services';
import { Items } from '../data/Item';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation =useNavigation();
  return (
    <View> 
       <ScrollView> 
        
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
              style={styles.textInput}
              />

          </View>
        </View>
      </LinearGradient>
      <SubHeader/>
      <Catagoris/>
      <Carousel/>
      <Services/>
   <View style={{backgroundColor:"white"}}>
          <Text style={{fontSize:30, marginLeft:9, fontWeight:"600"}}>
            product
          </Text>
   </View>  

      <ScrollView showsHorizontalScrollIndicator={false}  horizontal style={styles.conatiner}>
         { Items.map(item => (
       <TouchableOpacity 
         onPress={() => navigation.navigate("ProdactInfo",
       {id:item.id, productImageList:item.productImageList, description:item.description, 
         productName:item.productName, productPrice:item.productPrice, isAvailable:item.isAvailable })}
        style={styles.category}>
        <View style={{ 
          width:"80%",
          height:100,
          borderRadius: 10,
          backgroundColor:'#F0F0F3',
          position:"relative",
           justifyContent:"center",
           alignItems:"center"
        }}>
          <Image
           source={item.productImage}
           style={styles.imgStyle}
         />
        </View>
         <Text numberOfLines={2} style={styles.title}>{item.productName}</Text>  
       
       </TouchableOpacity>
         
     ))} 
     </ScrollView>
     
   </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '95%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginLeft:7,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 9,
  },
  conatiner: {
    backgroundColor: '#FFFFFFFF',
    padding: 10,
  },
  imgStyle: {
    height: "80%",
    width: "80%",
    resizeMode:"contain",
  },
  title: {
    fontSize: 12,
    color:"black",
     margin:-2,
     fontWeight:"700"
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

export default HomeScreen;