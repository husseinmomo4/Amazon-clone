import { View, Text, Image, TouchableOpacity, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'; 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProdactInfo = ({route}) => {
  const {id, productImageList,  productName, description, productPrice, product,  isAvailable} = route.params;
  const navigation = useNavigation()

const addToCart = async id =>{
  let itemArray = await AsyncStorage.getItem("cartItems");
  itemArray = JSON.parse(itemArray)
  if (itemArray) {
    let array = itemArray
    array.push(id)

    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      ToastAndroid.show(
        'Item Added Successfully to cart',
        ToastAndroid.SHORT,
      );
      navigation.navigate("BottomTabs")
    } catch (error) {
      return error;
    }
  }  else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems" , JSON.stringify(array))
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate("BottomTabs")
      } catch(error) {
        return error
      }
    }
};

  return (
    <View>
      <View style={{backgroundColor:'#dce0dd',}}>
       <View style={{padding:9}}>
        <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
       <Ionicons name="arrow-back" size={29} color="black" />
       </TouchableOpacity>
       </View> 
        <SliderBox images={productImageList}
      sliderBoxHeight={355} 
      dotColor="#42756e"
      circleLoop="black"      
       /> 
     
    </View>
       <View style={{padding:6}}>

        <Text style={{
          fontSize:24,
          fontWeight:"600",
          letterSpacing:0.5,
        }}>{productName}</Text>
        <Text numberOfLines={3} style={{
          fontSize:14, color:"gray",
        }}>
          {description}
        </Text>
        <Text style={{fontSize:29}}> EGP {productPrice}</Text>
       </View>

       <View 
       style={{
        position:"absolute",
        bottom:-100, 
        height:"8%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
       }}>
        <TouchableOpacity
        onPress={() => (isAvailable ? addToCart(id): null)}
        
        style={{width:"86%", height:"98%", backgroundColor:"#0043F9", borderRadius:20, justifyContent:"center", alignItems:"center", }}>
          <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                letterSpacing: 1,
                color: "white",
                textTransform: 'uppercase',
              }}
          >{isAvailable ? 'Add to card': 'Not Avialable'}</Text>
        </TouchableOpacity>

       </View>

</View>
  )
}

export default ProdactInfo