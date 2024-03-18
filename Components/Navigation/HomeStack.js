import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PizzaView from '../PizzaView/PizzaView'; 
import DrawerNav from '../Drawer/DrawerNav';
import SwiperModalScreen from '../SwiperModalScreen/SwiperModalScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator screenOptions={{ headerShown: true }}>
    <Drawer.Screen name="Home" component={Home} />
    {/* <Drawer.Screen name="Settings" component={Settings} /> */}
  </Drawer.Navigator>
);

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={DrawerHome} options={{ headerShown: false }}/>
      <Stack.Screen name="PizzaView" component={PizzaView} options={{ headerShown: true }} />
      <Stack.Screen 
          name="SwiperModal" 
          component={SwiperModalScreen} 
          options={{ presentation: 'modal', headerShown: false }} 
        />
    </Stack.Navigator>
  );
}
