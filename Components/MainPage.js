import * as React from 'react';

import{View,StyleSheet,Image,Text} from 'react-native';
import { Button } from 'galio-framework';


export default class Main extends React.Component{
    render(){
        return(
            <View style={styles.view1}>
             
                <Image source={{uri:'https://www.creativefabrica.com/wp-content/uploads/2018/11/Water-Logo-by-Acongraphic-47-580x386.jpg'}} style={styles.img}/>
                <View style={styles.space}></View>
                <Button round uppercase color="#3B5998" disabled={false} onPress={()=> this.props.navigation.navigate("Bill")}>Bill</Button>
                <View style={styles.space}></View>
                <Button round uppercase color="#3B5998" disabled={false} onPress={()=> this.props.navigation.navigate("Bottles")}>Place Order</Button>
                <View style={styles.space}></View>
                <Button round uppercase color="#3B5998" disabled={false}  onPress={()=> this.props.navigation.navigate("Complaints")}>COMPLAINT</Button>
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
        margin:10,
        width:300,
        height:300
    }
})