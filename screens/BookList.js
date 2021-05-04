import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const BookList = props => {
    return(
        <View style={styles.screen}> 
            <Text>HomeScreen</Text>
            <Button title="Detaljnije" onPress = {() => {props.navigation.navigate({routeName:'Informacije'})
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default BookList;