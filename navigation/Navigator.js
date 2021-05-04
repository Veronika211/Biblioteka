import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from '../screens/Homepage'
import BookList from '../screens/BookList'
import BookInfo from '../screens/BookInfo'

const Navigator = createStackNavigator({
    //Početna,Knjige i Informacije su route names preko kojih pristupamo tim stranicama
    Početna: Homepage,
    Knjige: BookList,
    Informacije: BookInfo
});

export default createAppContainer(Navigator);