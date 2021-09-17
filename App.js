import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {  ScrollView, SafeAreaView, Image, StyleSheet, Button, Text, FlatList, View, TouchableOpacity, TouchableOpacityBase, TextInput } from 'react-native';
import NewHome from './src/Screens/NewHome';


const Stack = createStackNavigator();
const St = createStackNavigator();
var isLogin = false;


const Stc = createStackNavigator();

const App = () => {
return(
    // <NewHome/>
    <SafeAreaView style={{ backgroundColor:'white',flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
<View style={{ height:50, marginLeft:20,marginRight:20,backgroundColor:'pink',borderRadius:15,marginVertical:5}}></View>
<View style={{ height:50, marginLeft:20,marginRight:20,backgroundColor:'pink',borderRadius:15,marginVertical:5}}></View>
<View style={{ height:50, marginLeft:20,marginRight:20,backgroundColor:'pink',borderRadius:15,marginVertical:5}}></View>
    </SafeAreaView>

  );
}

export default App;
