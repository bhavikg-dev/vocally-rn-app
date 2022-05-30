/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from '@utils/utils';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen';
import { useTheme } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const Tabs = () =>{
  const { dark } = useTheme();
  const themeStyle = dark ? '#000000' : 'white';
  const textColor = dark ? '#ffffff' : 'black';
  const iconColor = dark ? '#DCD2D2' : 'black';

  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: moderateScale(-20),
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress} >
        <View style={{
            width: moderateScale(70),
            height: moderateScale(70),
            borderRadius: moderateScale(35),
            backgroundColor: "#e32f45"
        }}>
        {children}
        </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator initialRouteName="Map"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {  
          position: 'absolute',
          elevation: 0,
          backgroundColor: themeStyle,
          height: 80,
         }
      }} >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name="compass-outline" size={30} color={focused ? 'red' : iconColor} />
            ),
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name="map" size={30} color={focused ? 'red' : iconColor } />
            ),
          }}
          />
        <Tab.Screen 
          name="Map" 
          component={MapScreen}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({focused}) => (
              <View style={styles.mainButton}>
                <MaterialCommunityIcons name="plus" size={30} color={'white'} />
              </View>
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            ),
          }}
        />
        <Tab.Screen 
          name="Chat" 
          component={NotificationScreen} 
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name="bell-outline" size={30} color={focused ? 'red' : iconColor} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="account-outline" size={30} color={focused ? 'red' : iconColor} />
            ),
          }}
          />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  
  shadow:{
    shadowColor: "#7FD5F0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation: 5

  },
  mainButton: {
    textAlign: 'center',
    justifyContent:'center'
  },
});
export default Tabs;