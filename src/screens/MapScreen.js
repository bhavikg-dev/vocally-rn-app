import React, {useState} from 'react';
import { 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    FlatList ,
    useColorScheme
} from 'react-native';
import { moderateScale } from '../utils/utils';
import Card from '../component/Card/Card';
import InputField from '../component/InputField/InputField';
import Map from '../component/Map/Map';
import SearchResult from '../component/SearchResult/SearchResult';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { locationData } from '../data/dummyData';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../App'

import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const MapScreen = props => {
    const { dark } = useTheme();

    const themeStyle = dark ? '#4f4a4a' : 'white';
    const textColor = dark ? '#ffffff' : 'black';
    const iconColor = dark ? '#DCD2D2' : 'black';

    const [searchKeyWord, setSearchKeyWord] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const { setTheme, theme } = React.useContext(ThemeContext);

    /**
     * searchHandler
     * @description search handler
     * @param {*} text 
     */
    const searchHandler = (text) => {
        setSearchKeyWord(text);
        if(searchKeyWord.length > 0){
            setIsSearch(true);
        }
    }

    /**
     * renderLocation
     * @description Search result rendered
     * @param {*} item 
     * @param {*} index 
     * @returns 
     */
    const renderLocation = (item, index) => {
        return(
            <SearchResult 
                location={item.location}
                key={index}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Map />
            <View style={styles.searchContainer}>
                <View style={styles.searchBoxContainer}>
                    <InputField
                        value={searchKeyWord}
                        onChangeText={text => searchHandler(text)}
                        placeholder={'Search Here...'}
                    />
                    <Icon name="search" style={{marginTop:moderateScale(4), paddingHorizontal: moderateScale(15)}} type="feather" size={30} color="gray" />
                </View>
                {isSearch && searchKeyWord.length > 0 &&  <View style={[{backgroundColor:`${themeStyle}`, color: `${textColor}`}, styles.searchResult]}>
                    <FlatList
                        nestedScrollEnabled={true}
                        style={{flex: 1}}
                        data={locationData}
                        renderItem={({item, index}) => renderLocation(item, index)}
                        keyExtractor={item => item.id}
                    />
                </View>}
            </View>
            

            <View style={styles.toggleContainer}>
                <TouchableOpacity style={[{backgroundColor:`${themeStyle}`, borderColor: `${themeStyle}`, color: `${textColor}`}, styles.colorToggle, styles.shadow]} onPress={() => setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme)} >
                    <MaterialCommunityIcons name="palette" size={25} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor:`${themeStyle}`, borderColor: `${themeStyle}`, color: `${textColor}`}, styles.directionToggle, styles.shadow]}>
                    <MaterialCommunityIcons name="directions-fork" size={25} color={iconColor} />
                </TouchableOpacity>
            </View>
            <Card />
        </SafeAreaView>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginTop: moderateScale(60),
      },
    map: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    toggleContainer: {
        position: 'absolute',
        top: moderateScale(130),
        right: moderateScale(30)
    },
    colorToggle:{
        height:moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent:'center',
    },
    directionToggle:{
        alignItems: 'center',
        justifyContent:'center',
        marginTop: moderateScale(10),
        height:moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20),
    },
    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: moderateScale(-4), height: moderateScale(10)},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 10,
    },
    searchContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    searchResult: {
        width: '100%',
        position:'absolute',
        marginTop: moderateScale(100),
        marginHorizontal: moderateScale(20),
        zIndex: 1
    }
});

