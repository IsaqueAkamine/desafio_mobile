import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages import
import Login from '../pages/Login';
import Home from '../pages/Home';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Home" component={Home} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;