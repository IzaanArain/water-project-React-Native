import * as React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Button ,Input} from 'galio-framework';


export default class MyApp extends React.Component{
    state={
        count:0,
        offsetinc:1,
        offsetdec:1,
      }
      _myinc(){
        let oldval=this.state.count
        this.setState({
          count:oldval+this.state.offsetinc
        })
      }
      _mydec(){
        let oldval=this.state.count
        this.setState({
          count:oldval-this.state.offsetdec
        })
      }
      render(){
        return(
          <View style={styles.viewcon}>
            <Image 
            source={require('../asset/waterlogo.jpg')} 
            style={styles.img}/>

           <Text style={styles.txtcon}>{this.state.count}</Text>
           <Text style={{fontSize:50,fontWeight:'bold',color:"#00bfff",}}>Bottles</Text>
          <View style={styles.view2}>
          <Button   color="#00bfff" onPress={()=>this._myinc()}><Text style={{fontSize:30,color:'white'}}>INC</Text></Button>
          <Button   color="#00bfff" onPress={()=>this._mydec()}><Text style={{fontSize:30,color:'white'}}>DEC</Text></Button>
          </View>
          <Button size="small" uppercase color="#3B5998" shadowColor disabled={false} 
          onPress={()=> this.props.navigation.navigate("Schedule")}>Schedule</Button>
         </View>
        )
      }
}

const styles=StyleSheet.create({
viewcon:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#FFFFFF',
},
view2:{
flexDirection:'row',
justifyContent:'space-around'
},
txtcon:{
fontSize:100,
fontWeight:'bold',
color:"#00bfff",
},
img:{
  width:200,
  height:200
}
})