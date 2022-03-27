import * as React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Input, Block ,Button} from 'galio-framework';

export default class Main extends React.Component{
    render(){
        return(
            <View style={styles.viewcon}>
            <Text style={styles.txtcon}>Write your complains here</Text>
            <TextInput
            keyboardType='default'
            placeholder='write here'
            style={styles.textcon}
            />
            
      <Button round uppercase color="#3B5998" disabled={false} 
      onPress={()=> this.props.navigation.navigate("MainPage")}>send</Button>
           </View>
        )
    }
} 
const styles=StyleSheet.create({
    viewcon:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    textcon:{
      borderWidth:2,
      padding:100,
      margin:5,
  
    },
    txtcon:{
      margin:20,
      fontSize:20,
      fontWeight:'bold',
    }
  })