import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/Home';

const DrawerStack = createDrawerNavigator();

export default function DrawerApp() {
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name="Home" component={HomeScreen} />
        </DrawerStack.Navigator>
    )
}