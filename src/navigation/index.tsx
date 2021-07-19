import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../contexts/context';
import { storeUser, getUser, removeUser } from '../services/authStorage';
import * as firebase from 'firebase';
import * as Analytics from 'expo-firebase-analytics';

const Navigation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<Object>(null);

    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    const authContext = React.useMemo(() => {
        return {
            signIn: (objUser: Object) => {
                setIsLoading(false);
                setUser(objUser);
                storeUser(objUser)
            },
            signUp: (objUser: Object) => {
                setIsLoading(false);
                setUser(objUser);
                storeUser(objUser)
            },
            signOut: async () => {
                setIsLoading(false);
                setUser(null);
                removeUser();
                await firebase.auth().signOut();
            }
        }
    }, []);

    useEffect(() => {
        const retornaUsuario = async () => {
            setIsLoading(false);
            getUser().then((res) => {
                setUser(res);
            })
        }
        retornaUsuario();
    }, []);

    const LoadingScreen = () => (
        <View />
    )

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => (routeNameRef.current = navigationRef?.current.getCurrentRoute().name)}
                onStateChange={async () => {
                    const currentRouteName = navigationRef.current.getCurrentRoute().name;
                    if (currentRouteName === 'Home') {
                        await Analytics.setCurrentScreen(currentRouteName, currentRouteName);
                        await Analytics.logEvent('login', {
                            user: user?.user?.email,
                        });
                    }
                }}
            >
                {user ? <AppNavigation /> : <AuthNavigation />}
            </NavigationContainer>
        </AuthContext.Provider >
    )
}

export default Navigation;