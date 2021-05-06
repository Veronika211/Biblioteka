import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {ZANROVI, KNJIGE} from '../data/dummy-data'
import KnjigaZanr from '../components/KnjigaZanr'

const BookList = props => {
    //omogucava nam da prikazemo podatke o svakoj knjizi u listi
    const zanrId = props.navigation.getParam('zanrId');
    const selectedZanr = ZANROVI.find(zanr => zanr.id === zanrId);
    const prikazaneKnjige = KNJIGE.filter(knjiga => knjiga.zanroviId.indexOf(zanrId) >= 0 )

    const renderListItem = itemData =>{
        return <KnjigaZanr
         naslov={itemData.item.naslov}
         autor = {itemData.item.autor}
         slika= {itemData.item.slika} 
         onSelect ={() => {
             props.navigation.navigate({routeName:'Informacije', params:{
                 knjigaId: itemData.item.id
             }})
         }}/>
    }

    return(
        <View style={styles.screen}> 
           <FlatList data={prikazaneKnjige}
            keyExtractor={(item,index) => item.id}
            renderItem={renderListItem}
            style={{width:'100%'}}
           />
        </View>
    )
};

BookList.navigationOptions = (navigationData) => {
    const zanrId = navigationData.navigation.getParam('zanrId');
    const selectedZanr = ZANROVI.find(zanr => zanr.id === zanrId);
    return {
        headerTitle: selectedZanr.naziv,
        
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default BookList;