import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ReadingList = props => {
    return(
        <View style={styles.screen}> 
            <Text>HomeScreen</Text>
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
export default ReadingList;