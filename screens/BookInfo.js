import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { KNJIGE } from '../data/dummy-data'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'


const BookInfo = props => {
    const knjigaId = props.navigation.getParam('knjigaId');
    const selectedKnjiga = KNJIGE.find(knjiga => knjiga.id === knjigaId);

    // <Button title="Dodaj u listu citanja" icon= {<Ionicons name="book-outline" size={24} color="black" />}onPress = {()=>{    
    //}}/>
    return (
        <ScrollView>
            <Image source={{ uri: selectedKnjiga.slika }} style={styles.img} />
            <View style={styles.screen}>
                <Text style={styles.naslov}>{selectedKnjiga.naslov}</Text>
                <Text style={styles.autor}>{selectedKnjiga.autor}</Text>
                <Text style={styles.cena}>{selectedKnjiga.cena} din.</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="add-circle-outline" size={30} color="black" style={styles.ikonica} />
                    <Text>Dodajte u listu čitanja</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Opis:{selectedKnjiga.opis}</Text>
            </View>
        </ScrollView>
    )
};

BookInfo.navigationOptions = (navigationData) => {
    const knjigaId = navigationData.navigation.getParam('knjigaId');
    const selectedKnjiga = KNJIGE.find(knjiga => knjiga.id === knjigaId);
    return {
        headerTitle: selectedKnjiga.naslov
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    naslov: {
        margin: 20,
        fontSize: 20,
        fontFamily: 'lora-bold'
    },
    ikonica: {
        marginHorizontal: 50,
        marginVertical: 5
    },
    img: {
        width: '100%',
        height : 350
    }
});
export default BookInfo;