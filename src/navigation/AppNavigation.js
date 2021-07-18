import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages imports
import HomeScreen from '../pages/Home';

const AppdStack = createStackNavigator();

const AppdNavigation = () => {
    return (
        <AppdStack.Navigator initialRouteName="Home">
            <AppdStack.Screen name="Home" component={HomeScreen} />
        </AppdStack.Navigator>
    )
}

export default AppdNavigation;