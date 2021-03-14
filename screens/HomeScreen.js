import  React  from "react";
import { useEffect } from "react";
import { View ,Text,PermissionsAndroid,Permission} from "react-native";
import WebView from "react-native-webview";




const HomeScreen=()=>
{

React.useEffect(
        ()=>{internetPermission()},
    )
    const internetPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
    return(
    
        <View style={{flex:1}}>    
             <WebView
     source={{uri:"https://www.amazon.in/"}}
     >


     </WebView>
     
    </View>
    )
}

export default HomeScreen