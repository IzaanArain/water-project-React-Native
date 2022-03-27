import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import { Button ,Input} from 'galio-framework';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Message() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text style={{fontWeight:'bold',fontSize:20}}>Login</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={{fontWeight:'bold',fontSize:20}}>Welcome {user.email}</Text>
    </View>
  ); 
}

const LoginInScreen =({navigation})=>{
  const [email,setEmail]=useState(" ");
  const [password,setPassword]=useState(" ");

  const LoginIn=()=>{
    auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account created & signed in!');
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }
  /*const navigation=useNavigation()

  useEffect(()=>{
    const unsubcribe = auth().onAuthStateChanged(user=>{
        if (user){
            navigation.navigate("MainPage")
        }
    })

    return unsubcribe
},[])*/
    return(
      <ScrollView>
      <View style={{flex:1}}>

      <View style={styles.view1}></View>

      <View style={styles.view2}>
    <Image source={{uri:'https://www.creativefabrica.com/wp-content/uploads/2018/11/Water-Logo-by-Acongraphic-47-580x386.jpg'}} 
      style={styles.img}/>
      <Text style={styles.txt}>Welcome Back!</Text>

      <Input
       placeholder="Email e.g abc@gmail.com"
       rounded 
       color='#1232FF'
       style={{ borderColor: "#1232FF"}}
       placeholderTextColor="#9FA5AA"
       onChangeText={(userEmail)=>setEmail(userEmail)}
       bgColor='#b0e0e6'
       borderless
      />
      <Input 
       placeholder="password" 
       password viewPass
       rounded 
       color='#1232FF'
       style={{ borderColor: "#1232FF"}}
       placeholderTextColor="#9FA5AA"
       onChangeText={(userPassword)=>setPassword(userPassword)}
       bgColor='#b0e0e6'
       borderless
      />
      <Message/>
      <Button round uppercase color="#3B5998" disabled={false} 
      onPress={LoginIn}>Sign In</Button>
      
      <Button round uppercase color="#3B5998" disabled={false} 
      onPress={()=>navigation.navigate('MainPage')}>Login</Button>
      
      </View>

      <View style={styles.view3}></View>

      </View>
      </ScrollView>
    )
  }
export default LoginInScreen;

const styles=StyleSheet.create({
  view1:{
    
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:1,
    borderBottomWidth:1
     },
  view2:{
    flex:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
     },
     view3:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection:"row"
     },
     txt:{
       color:'black',
       margin:2,
       fontWeight:'bold',
       fontSize:20
     },
     img:{
       height:200,
       width:300,
     },
      space:{
       margin:10,
     }
})