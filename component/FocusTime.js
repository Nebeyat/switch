import{View,Text, TouchableOpacity}from 'react-native'
import { SafeAreaView } from 'react-native-safeArea-context'
import{usestate,useEffect} from 'react'

export default function FocusTime({}){
    const times=[600,900,1200];
    const[isRunning,setIsRunning]=usestate(false);
    useEffect(()=>{},)
    return(
        <SafeAreaView>
       
        <Text></Text>
         <Text></Text>
          <Text></Text>
          <View/>
          <View>
            <Text>Task</Text>
          </View>
           <TouchableOpacity>
            <Text>Start</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text>Back</Text>
          </TouchableOpacity>
    </SafeAreaView>

    )
}
const style=StyleSheet.create({


})