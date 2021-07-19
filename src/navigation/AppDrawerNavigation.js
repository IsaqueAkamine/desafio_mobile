import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawerContent from './AppDrawerContent';
import HomeScreen from '../pages/Home';
import ProfileScreen from '../pages/Profile';

const DrawerStack = createDrawerNavigator();

export default function DrawerApp() {
    return (
        <DrawerStack.Navigator initialRouteName="Home" drawerContent={(props) => <AppDrawerContent {...props} />}>
            <DrawerStack.Screen name="Home" component={HomeScreen} />
            <DrawerStack.Screen name="Profile" component={ProfileScreen} />
        </DrawerStack.Navigator>
    )
}