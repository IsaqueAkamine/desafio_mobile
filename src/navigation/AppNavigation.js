import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppDrawerNavigation from './AppDrawerNavigation';

const AppdStack = createStackNavigator();

const AppdNavigation = () => {
    return (
        <AppdStack.Navigator initialRouteName="Home">
            <AppdStack.Screen name="Home" component={AppDrawerNavigation} options={{ headerShown: false }} />
        </AppdStack.Navigator>
    )
}

export default AppdNavigation;