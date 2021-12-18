 
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View,Image} from 'react-native';
import { useState } from 'react/cjs/react.development';
import yelp from '../api/yelp';

export default function ResultShowScreen({navigation,route}) {

    const [result,setResult]=useState(null);
  const id=route.params?.id;
const getResults=async(id)=>{
  const response=  await yelp.get(`/${id}`);
  setResult(response.data)


}
useEffect(()=>{
getResults(id)

},[]);

  return (
      
    <View >
        {result &&  
        
        <Text>{result.name}</Text>}
        <FlatList
        data={result?.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}} />

        }}
        
        />
      

  
     
     
    </View>
  );
}

const styles = StyleSheet.create({ 
    image:{
        width:300,
        height:200
    }
  
});

