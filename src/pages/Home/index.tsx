import React, { useState, useEffect, useRef, useContext } from 'react';
import { Container, IconContent, Footer, Title, ButtonSubmit } from './styles';
import { AuthContext } from '../../contexts/context';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const { signOut } = useContext(AuthContext);
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
                    }, 1000);
                } else {
                    throw new Error('Location permission not granted');
                }
            })

        };

        askPermission();
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
                style={{ height: '80%' }}
                initialRegion={location}
                showsUserLocation={true}
                region={location}
            ></MapView>

            <Footer>
                <Title>Home screen</Title>
                <ButtonSubmit title="Logout" onPress={() => { signOut() }} />
            </Footer>
        </Container>
    )
}

export default Home;