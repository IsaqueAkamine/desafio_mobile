import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../contexts/context';

const Navigation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
                setUser('Token-123456');
            },
            signUp: () => {
                setIsLoading(false);
                setUser('Token-123456');
            },
            signOut: () => {
                setIsLoading(false);
                setUser(null);
            },
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const LoadingScreen = () => (
        <View />
    )

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {user ? <AppNavigation /> : <AuthNavigation />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Navigation;