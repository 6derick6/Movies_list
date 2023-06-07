import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [movies,setMovies] = useState(null);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(function(json){

      setMovies(json);



    })
  },[])

  if(movies != null){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {
        movies.results.map(function(val){
          return(
            <Text>{val.original_title}</Text>
          )
        })
      }
    </View>
  );

  }else{
    return(
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
