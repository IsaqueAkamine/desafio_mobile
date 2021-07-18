import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages import
import SignInScreen from '../pages/SignIn';
import SignUpScreen from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;