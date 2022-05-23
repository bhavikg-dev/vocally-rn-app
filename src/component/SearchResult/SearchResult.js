import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { moderateScale } from '@utils/utils';
import { useTheme } from '@react-navigation/native';

const SearchResult = props => {
    const { dark } = useTheme();

    const textColor = dark ? '#ffffff' : 'black';
    const iconColor = dark ? '#DCD2D2' : 'black';

    return (
        <ScrollView style={styles.resultList} >
            <TouchableOpacity><Text style={{color: `${textColor}`}}>{props.location}</Text></TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    resultList: {
        paddingHorizontal: moderateScale(20),
        height: moderateScale(25),
        padding: moderateScale(10),
    }
});
export default SearchResult;