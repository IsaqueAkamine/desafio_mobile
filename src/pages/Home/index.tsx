import React, { useState, useEffect, useRef, useContext } from 'react';
import { Container, IconContent } from './styles';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { storeLocation } from '../../services/authStorage';
import * as Analytics from 'expo-firebase-analytics';

const Home = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: -21.65,
        longitude: -50.17,
        latitudeDelta: 1.5,
        longitudeDelta: 1.4
    });

    useEffect(() => {
        const askPermission = async () => {
            await Location.requestForegroundPermissionsAsync().then(async (response) => {
                if (response.status === 'granted') {
                    let local = await Location.getCurrentPositionAsync({});
                    setTimeout(() => {
                        setLocation({
                            latitude: local.coords.latitude,
                            longitude: local.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.04
                        });
                        storeLocation({
                            latitude: local.coords.latitude,
                            longitude: local.coords.longitude,
                        })
                    }, 1000);
                } else {
                    throw new Error('Location permission not granted');
                }
            })

        };

        askPermission();
    }, []);

    useEffect(() => {
        const firebaseAnalytics = async () => {
            await Analytics.logEvent('Maps', {
                name: 'Maps',
                screen: 'Home',
                purpose: 'Log event show maps analytics',
            });
        }
        firebaseAnalytics();
    }, []);

    const _openDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <Container>
            <IconContent onPress={_openDrawer}>
                <Ionicons name="menu-sharp" size={32} color="black" />
            </IconContent>
            <MapView
                style={{ flex: 1 }}
                initialRegion={location}
                showsUserLocation={true}
                region={location}
            ></MapView>
        </Container>
    )
}

export default Home;