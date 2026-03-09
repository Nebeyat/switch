import { View,Text,TouchableOpacity,StyleSheet } from "react-native";
import {Safeareaview } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import FocusTime from "./component/FocusTime";
import { useState } from "react";
export default function App(){
  const [addTask,setaddTask]=useState(false);
  if(addTask){
    return(
      <FocusTime/>
    )
  }
  function handlepress(){
    console.log('add button pressed');}
    return(
      <Safeareaview style={Styles.container}>
        <view style={styles.inputcontainer}>
          <TextInput
          placeholder='what woulde you like to focus...'
          style={styles.inputText}
          mode={'outlined'}
          label = "Focus"
          Style = {styles.InputText}
          />
          <TouchableOpacity style={styles.fabButton} onPress={()=>{}}>

            <Text style={styles.fabText}>+</Text>

          </TouchableOpacity>
          <View style={styles.focusedTasks}>
            <Text style={styles.focusTitle}>things we have focused on:</Text>
            <View style={{padding:20}}>

              <Text style={{fontSize:18,color:'white',fontWeight:'semi-bold'}}>1,learn js basics</Text>
              <Text style={{fontSize:18,color:'white',fontWeight:'semi-bold'}}>1,learn react native</Text>
            </View>
          </View>
        </view>
      </Safeareaview>);}
      const style=StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:'#2f0b6849'
        },
        inputcontainer:{
          flexDirection:'row',
          paddding:20,
        },
        InputText:{
          flex:1,
        },
        fabButton:{
          height:60,
          width:60,
          borderRadius:30,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'transparent',
          borderWidth:2,
          borderColor:'white',
        },
        fabText:{
          fontSize:20,
          color:'white',
          marginLeft:10,
        },
        focusedTasks:{
          marginTop:20,

        },

        focusTitle:{
          fontWeight:'bold',
          fontSize:26,
          marginLeft:10,
          color:white,
        }
      })