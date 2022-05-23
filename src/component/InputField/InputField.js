/* eslint-disable prettier/prettier */
import React from 'react';
import { moderateScale } from '../../utils/utils';
/* import { Colors, Fonts } from '../../res'; */
import {View, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

const InputField = props => {
    const { dark } = useTheme();
    const themeStyle = dark ? '#4f4a4a' : 'white';
    const textColor = dark ? '#DCD2D2' : 'black';
    return (
        <TextInput
          placeholderTextColor={textColor}
          {...props}
          style={[{backgroundColor:`${themeStyle}`, borderColor: `${themeStyle}`, color: `${textColor}`} , styles.textFieldStyle, styles.shadow]}
        />
    );

};

const styles = StyleSheet.create({ 
 
  textFieldStyle: {
      position: 'absolute',
      width: "100%",
      borderRadius: moderateScale(10),
      shadowRadius: moderateScale(10),
      fontSize: moderateScale(13),
      alignSelf: 'center',
      paddingLeft: moderateScale(50),
  },

  shadow:{
    //shadowColor: "#7FD5F0",
    shadowColor: '#171717',
    shadowOffset: {width: moderateScale(-4), height: moderateScale(10)},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10

  },
});

export default InputField;
