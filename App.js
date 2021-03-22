import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
 Image,
 ImageBackground,
} from 'react-native';
//simport {  } from "";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import {HomeScreen }  from "./screens";
//import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
//import  navigation from "react-native-navigation";
const HomeStackTab=createStackNavigator()
//nst q=require('../')
const App=()=>
{
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  function splash({navigation}) {
    //

   
 //   const test=require()   
  setTimeout(()=>{navigation.replace("Home"),5000})
     return(

     
       <View style={{flex:1,justifyContent:'center',
       alignItems:'center'}}>

    
        <Text style={{alignSelf:'center',textAlign:'center',
     
      width:400,
        fontWeight:'bold'}}>no</Text>
       </View>
     )
     
   }
  return(
  
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <NavigationContainer>
  
    
    <HomeStackTab.Navigator initialRouteName='splash'
    screenOptions={horizontalAnimation}
    >
  
  
      <HomeStackTab.Screen name="splash" component={splash}
      options={{
        gestureDirection:'horizontal',
        headerShown:false
      }}
      />
   
      <HomeStackTab.Screen name="Home" 
      component={HomeScreen}
     
      options={{
        gestureDirection:'horizontal',
        headerShown:false
      }}
      />
  
        
    </HomeStackTab.Navigator>
  
  </NavigationContainer>
  </SafeAreaView>
  )
}
export default App;