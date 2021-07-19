import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { AuthContext } from '../../contexts/context';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import appLogo from '../../assets/bycoderslogo.png';

import {
    Header,
    ImageContainer,
    DescriptionContainer,
    Title,
    Description,
    Content,
    Footer,
} from './styles';

export default function AppDrawerContent({ props, navigation }) {
    const { signOut } = useContext(AuthContext);

    const _navigation = (screen) => { navigation.navigate(screen); }

    return (
        <DrawerContentScrollView {...props}>
            <Header>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <ImageContainer>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 4,
                            }}
                            resizeMode="stretch"
                            source={appLogo}
                        />
                    </ImageContainer>
                    <DescriptionContainer>
                        <Title numberOfLines={0}>
                            bycoders_
                        </Title>
                        <Description numberOfLines={0}>
                            Desafio mobile
                        </Description>
                    </DescriptionContainer>
                </View>
            </Header>

            <Content>
                <DrawerItem
                    icon={({ color, size }) => <Ionicons name="home" size={size} color={color} />}
                    label="Home"
                    labelStyle={{ fontSize: 14 }}
                    onPress={() => { _navigation('Home') }}
                />

                <DrawerItem
                    icon={({ color, size }) => <AntDesign name="profile" size={size} color={color} />}
                    label="Profile"
                    labelStyle={{ fontSize: 14 }}
                    onPress={() => { _navigation('Profile') }}
                />
            </Content>

            <Footer>
                <DrawerItem
                    icon={({ color, size }) => <FontAwesome name="sign-out" size={size} color={color} />}
                    label="Desconectar"
                    onPress={() => {
                        signOut();
                    }}
                />
            </Footer>
        </DrawerContentScrollView >
    );
}
