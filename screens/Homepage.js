import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const Homepage = props => {
    return(
        <View style={styles.screen}> 
            <Text>HomeScreen</Text>
            <Button title="Pogledaj sve knjige" onPress={() => {
                props.navigation.navigate({routeName:'Knjige'})
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
export default Homepage;