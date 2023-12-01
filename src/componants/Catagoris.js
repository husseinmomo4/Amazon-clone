import {
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';  
  import { DATA } from '../data/CatagorisData';
  import { useNavigation } from '@react-navigation/native';
  import { Items } from '../data/Item';
    const Catagoris = () => {
      
    const navigation =useNavigation()

  
    return (
      <ScrollView showsHorizontalScrollIndicator={false}  horizontal style={styles.conatiner}>
        { DATA.map(item => (
            <TouchableOpacity  
              style={styles.category}>
              <Image
                source={item.image}
                style={styles.imgStyle}
              />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      
    );
  };

  const styles = StyleSheet.create({
    conatiner: {
      backgroundColor: '#FFFFFFFF',
      padding: 10,
    },
    imgStyle: {
      height: 50,
      width: 50,
    },
    title: {
      fontSize: 10,
      color: '#2c4341',
    },
    category: {
      paddingHorizontal: 8,
      alignItems: 'center',
    },
  });
  
  export default Catagoris;