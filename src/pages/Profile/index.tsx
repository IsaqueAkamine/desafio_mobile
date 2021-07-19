import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getUser, getLocation } from '../../services/authStorage';
import { Ionicons } from '@expo/vector-icons';
import {
    Container,
    IconContent,
    ProfileContainer,
    ProfileImage,
    ProfileEmail,
    LocationContainer,
    LocationTitle,
    LocationDescription,
} from './styles';

const Profile = ({ navigation }) => {
    const [user, setUser] = useState(null)
    const [userLocation, setUserLocation] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            let response = await getUser();
            setUser(response.user);

            let location = await getLocation();
            setUserLocation(location);
        }
        loadUser();
    }, []);

    if (!user) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const _openDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <Container>
            <IconContent onPress={_openDrawer}>
                <Ionicons name="menu-sharp" size={32} color="black" />
            </IconContent>
            <ProfileContainer>
                <ProfileImage source={require('../../assets/bycoderslogo.png')} />
                <ProfileEmail>{user.email}</ProfileEmail>
            </ProfileContainer>
            <LocationContainer>
                <LocationTitle>Ultimo Local</LocationTitle>
                <LocationDescription>Latitude: {`${userLocation?.latitude}`}</LocationDescription>
                <LocationDescription>Longitude: {`${userLocation?.longitude}`}</LocationDescription>
            </LocationContainer>
        </Container>
    )
}

export default Profile;