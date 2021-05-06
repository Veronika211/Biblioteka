import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './navigation/Navigator'
import {useScreens} from 'react-native-screens'
import AppLoading from 'expo-app-loading';

//useScreens();


const fetchFonts = () =>{
  //omogucava nam da ucitamo fontove i prosledjujemo odakle da ih ucita
 return Font.loadAsync({
    'arimo': require('./assets/fonts/Arimo-Regular.ttf'),
    'arimo-bold': require('./assets/fonts/Arimo-Bold.ttf'),
    'lora': require('./assets/fonts/Lora-Regular.ttf'),
    'lora-bold': require('./assets/fonts/Lora-Bold.ttf')
  });
};

export default function App() {
    
  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
    return(
       <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn}/>
       );
  }
  return (
    <Navigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
