/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';


const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});

