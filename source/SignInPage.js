import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet, ImageBackground } from 'react-native';

export default SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const image = {uri:'https://images.unsplash.com/photo-1655777124630-e8a385656ea3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'};
  return (
    <View style={styles.Container}>
      <ImageBackground style={styles.imageStyle} source={image}>
       <View style={styles.cardcontainer}>
        <Text style={styles.Text1}>Sign In To Your Account</Text>
        <Text style={styles.Text2}>Welcome Back You've Been Missed!</Text>
        
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
  cardcontainer:{
   backgroundColor:"white",
   
   borderTopLeftRadius:10,
   borderTopRightRadius:10,
   alignItems:"center"
  },
  Text1:{
    color:"black",
    fontSize:30,
    fontWeight:"600",
    
  },
  Text2:{
    color:"black",
    fontSize:20,
    fontWeight:"400",
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
    