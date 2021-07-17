import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages imports
import HomeScreen from '../pages/Home';

const LoggedStack = createStackNavigator();

const LoggedNavigation = () => {
    return (
        <LoggedStack.Navigator initialRouteName="Home">
            <LoggedStack.Screen name="Home" component={HomeScreen} />
        </LoggedStack.Navigator>
    )
}

export default LoggedNavigation;