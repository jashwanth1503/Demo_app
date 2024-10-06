import React from 'react';
import { StyleSheet, Text, View ,ImageBackground, Image, TouchableOpacity, Button} from 'react-native';

export default function LandingPage({navigation}) {
  const image = {uri:'https://images.unsplash.com/photo-1655777124630-e8a385656ea3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'};
  return (
    <View style={styles.Container}>
      <ImageBackground style={styles.imageStyle} source={image}>
        <View style={{top:200,margin:10,padding:10}}>
        <Text style={styles.Text1}>{`Glass   \nfor eye`}</Text>
        <Text style={styles.Text2}>You're at the right place!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInPage')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  Container:{
    flex:1
  },
  imageStyle:{
    flex:1,
    justifyContent:"center"
  },
  Text1:{
    color:"white",
    fontSize:60,
    fontWeight:"600",
  },
  Text2:{
    color:"white",
    fontSize:30,
    fontWeight:"300",
  },
  buttonContainer:{
    backgroundColor:"black",
    borderRadius:40,
    height:70,
    width:300,
    justifyContent:"center",
    bottom:-60
  },
  buttonText:{
    fontSize:30,
    color:"white",
    textAlign:"center"
  }
});