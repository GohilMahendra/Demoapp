

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
import  splash  from "./build_data/splash.json";

import { imagedata } from "./build_data/imagedata";


const hide=(imagedata==null)?true:false;

const data=splash

const SecondScreenName=data.SecondScreenName
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

    
    const imagesource=imagedata.splash_screen
 //   const test=require()   
  setTimeout(()=>{navigation.replace(SecondScreenName),5000})
     return(

     
       <View style={{flex:1,justifyContent:'center',
       backgroundColor:data.Splash_backgroundcolor,  
       alignItems:'center'}}>
 {!hide && < Image source={imagesource}
      blurRadius={data.splash_background_image.Blur}
      style={{position:'absolute',height:'100%',}}
      />}
    
        <Text style={{alignSelf:'center',textAlign:'center',
      fontSize:data.Splash_titleFontSize,
     
      width:400,
        color:data.Splash_titleFontcolor,
        fontWeight:'bold'}}>{data.Splash_titleText}</Text>
        <Text style={{alignSelf:'center',textAlign:'center',
        height:100,width:250,margin:20,
        fontSize:25,color:'#fff',fontWeight:'bold'}}>{data.Splash_titleTagLine}</Text>
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
   
      <HomeStackTab.Screen name={SecondScreenName} 
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