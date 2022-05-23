import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { moderateScale } from '@utils/utils';
import { useTheme } from '@react-navigation/native';

const Card = props => {
    const { dark } = useTheme();

    const themeStyle = dark ? '#4f4a4a' : 'white';
    const textColor = dark ? '#ffffff' : 'black';

    return(
        <View style={[{backgroundColor:`${themeStyle}`, borderColor: `${themeStyle}`, color: `${textColor}`}, styles.card, styles.shadow]}>
            <View style={styles.imageContainer}>
                <Image source={require('../../res/images/nature.jpeg')} style={[styles.image]} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={{ color: 'black', fontSize: moderateScale(17),
        fontWeight: 'bold', color:`${textColor}`}}>Lokal Hamburk</Text>
                <Text style={styles.subTitle}>Pub in Prague</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        position:'absolute',
        width: '90%',
        height: moderateScale(100),
        borderRadius: moderateScale(10),
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        alignSelf: 'center',
        bottom: moderateScale(100),
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer:{
        width: moderateScale(100),
    },
    image: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius:moderateScale(10)
    },
    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: moderateScale(-4), height: moderateScale(10)},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 10
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: moderateScale(17),
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
        fontSize: moderateScale(13),
        fontWeight: 'bold',
    },
});
export default Card;