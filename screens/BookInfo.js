import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {KNJIGE} from '../data/dummy-data'
import { Ionicons,Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'


const BookInfo = props => {
    const knjigaId = props.navigation.getParam('knjigaId');
    const selectedKnjiga = KNJIGE.find(knjiga => knjiga.id === knjigaId);

// <Button title="Dodaj u listu citanja" icon= {<Ionicons name="book-outline" size={24} color="black" />}onPress = {()=>{    
//}}/>
    return(
        <View style={styles.screen}> 
            <Text style={styles.naslov}>{selectedKnjiga.naslov}</Text>
           <TouchableOpacity onPress = {()=>{}}>
           <Ionicons name="add-circle-outline" size={30} color="black" style={styles.ikonica}/>
           <Text>Dodajte u listu čitanja</Text>
           </TouchableOpacity>
        </View>
    )
};

BookInfo.navigationOptions = (navigationData) =>{
    const knjigaId = navigationData.navigation.getParam('knjigaId');
    const selectedKnjiga = KNJIGE.find(knjiga => knjiga.id === knjigaId);
    return {
        headerTitle: selectedKnjiga.naslov
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    naslov:{
        margin:20,
        fontSize:20,
        fontFamily:'lora-bold'
    },
    ikonica:{
        marginHorizontal: 50,
        marginVertical: 5
    }
});
export default BookInfo;