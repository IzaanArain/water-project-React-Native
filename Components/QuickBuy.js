import React, { useState, useEffect ,useContext} from 'react'
import{View,Text,StyleSheet,Image,SafeAreaView, ScrollView} from 'react-native'
import { Input, Block ,Button} from 'galio-framework';
import auth from '@react-native-firebase/auth';

const Otp=({navigation})=>{
    const [phoneNumber,setPhoneNumber]=useState();
    
        return(
            <View style={styles.viewcon}>
                <Image source={{uri:'https://www.creativefabrica.com/wp-content/uploads/2018/11/Water-Logo-by-Acongraphic-47-580x386.jpg'}}
                style={styles.img}></Image>

                 <Input
                 placeholder="phone number"
                 rounded 
                 color='#1232FF'
                 style={{ borderColor: "#1232FF" }}
                 placeholderTextColor="#9FA5AA"
                 onChangeText={(userPhoneNumber)=>setPhoneNumber(userPhoneNumber)}
                 bgColor='#b0e0e6'
                 borderless
                 />

                 <Button round 
                 uppercase 
                 color="#3B5998" 
                 disabled={false} 
                 onPress={()=> navigation.navigate("Bottles")}
                 >next
                 </Button>
                 
            </View>
        )
    }
export default Otp;
const styles=StyleSheet.create({
    viewcon:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
    },
    img:{
        height:300,
        width:400,
    },
    txtcon:{
        fontWeight:'bold',
        fontSize:20,

    }
  })