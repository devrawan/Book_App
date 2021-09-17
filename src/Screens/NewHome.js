import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, View, ImageBackground, Text, Dimensions, TouchableOpacity } from 'react-native';
import Login from '../Screens/Login';
import AllBook from '../Screens/AllBook';
const im = require('../assets/New.jpg')
var isUserLogin = false;




const NewHome = ({ navigation }) => {

    console.log(" HomeStackScreen called")
    setTimeout( ()=>{
   
             navigation.replace('Login')
 
          
    } , 3000)

    return (

        <View style={{ flex: 1 }}>

            <ImageBackground source={im} style={{
                flex: 1,
                justifyContent: "center"
            }}>
            </ImageBackground>


        </View>


    )
}





const Stack = createStackNavigator();

const FullScreenWidth = Dimensions.get('window').width;

function HomeStackScreen() {

  
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name='Splash' component={NewHome} options={{ headerShown: false }} />   
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={AllBook} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )


}




export default HomeStackScreen;