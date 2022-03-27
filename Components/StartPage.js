import * as React from 'react';
import{View,StyleSheet,Image,Text} from 'react-native';
import { Button } from 'galio-framework';

export default class start extends React.Component{
    render(){
        return(
            <View style={styles.view1}>
                 
                <Image source={{uri:'https://www.creativefabrica.com/wp-content/uploads/2018/11/Water-Logo-by-Acongraphic-47-580x386.jpg'}} style={styles.img}/>
                <Text style={styles.txtcon}>Welcome</Text>
                <Button round uppercase color="#3B5998" disabled={false} onPress={()=> this.props.navigation.navigate("Login")}>LOGIN</Button>
                <View style={styles.space}></View>
                <Button round uppercase color="#3B5998" disabled={false} onPress={()=> this.props.navigation.navigate("QuickBuy")}>QUICK BUY</Button>
                <View style={styles.space}></View>
                <Button round uppercase color="#3B5998" disabled={false}  onPress={()=> this.props.navigation.navigate("SignUp")}>SIGN UP</Button>
                <View style={styles.space}></View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    view1:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'white'
    },
    space:{
        margin:10,
    },
    img:{
        width:300,
        height:300
    },
    txtcon:{
        fontWeight:'bold',
        fontSize:30,
        margin:10,

    }
})