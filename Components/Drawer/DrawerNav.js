import React from 'react';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      {Array.from({ length: 10 }, (_, idx) => (
        <Drawer.Screen
          name={`Screen${idx + 1}`}
          key={idx}
          options={{ drawerLabel: `Screen ${idx + 1}` }}
          component={() => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Content for Screen {idx + 1}</Text>
            </View>
          )}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default DrawerNav;
