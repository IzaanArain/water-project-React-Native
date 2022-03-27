import React, { useState, useEffect ,useContext} from 'react'
import{View,Text,StyleSheet,Image,SafeAreaView, ScrollView,TouchableOpacity} from 'react-native'
import { Input, Block ,Button} from 'galio-framework';
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
const SignUpScreen =({navigation})=>{
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");

    const SignUp = () =>{
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          
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
            navigation.navigate("Login")
        }
    })

    return unsubcribe
},[])*/
    
        return(
            <ScrollView>
            <View style={styles.viewcon}>
                <Image source={{uri:'https://www.creativefabrica.com/wp-content/uploads/2018/11/Water-Logo-by-Acongraphic-47-580x386.jpg'}}
                style={styles.img}></Image>

                 <Input
                 placeholder="Email e.g abc@gmail.com"
                 rounded 
                 color='#1232FF'
                 style={{ borderColor: "#1232FF" }}
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
                style={{ borderColor: "#1232FF" }}
                 placeholderTextColor="#9FA5AA"
                 onChangeText={(userPassword)=>setPassword(userPassword)}
                 bgColor='#b0e0e6'
                 borderless
                 />
                 <Message/>
                 <Button round uppercase color="#3B5998" disabled={false} 
                 onPress={SignUp}>Sign Up</Button>

                 <Button round uppercase color="#3B5998" disabled={false} 
                 onPress={()=>navigation.navigate('Login')}>Done</Button>

                 <Button round uppercase color="#3B5998" disabled={false} >Facebook</Button>
                 <Button round uppercase color="#3B5998" disabled={false} >Google</Button>
            </View>
            </ScrollView>
        )
    }
export default SignUpScreen;
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
    },
    Button:{
        padding: 10,
        backgroundColor: "#DDDDDD",
        borderWidth:1,
        margin:10,
    }
  })