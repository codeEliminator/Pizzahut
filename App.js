import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Components/Navigation/HomeStack';
import Settings from './Components/Settings/Settings';
import DrawerNav from './Components/Drawer/DrawerNav';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,              
            height: 100,
            width: "100%",              
            ...styles.tabBarStyle
            },
            tabBarShowLabel: false
        }}
      > 
          
        <Tab.Screen options={{
          tabBarIcon:({focused}) => (
            <View style = {{alignItems: 'center'}}>
                <Icon 
                    name={focused ? 'home' : 'home-outline'} 
                    size={20} 
                    color={focused ? 'black' : '#DCDCDC'} 
                />
                <Text style={{color: focused ? 'black' : '#DCDCDC'}}>Home</Text>
            </View>
          )
        }} name="Home" component={HomeStack} />
        <Tab.Screen options={{
            tabBarIcon:({focused}) => (
              <View style = {{alignItems: 'center'}}>
                  <Icon 
                      name={focused ? 'settings' : 'settings-outline'} 
                      size={20} 
                      color={focused ? 'black' : '#DCDCDC'} 
                  />
                  <Text style={{color: focused ? 'black' : '#DCDCDC'}}>Settings</Text>
              </View>
            )
        }} name="Settings" component={Settings} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
})