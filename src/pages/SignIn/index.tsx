import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/context';

// assets import
import { AntDesign } from '@expo/vector-icons';
import bgImage from '../../assets/bgImage.png';

import {
    Container,
    KeyboardAvoid,
    BackgroundImage,
    FormContainer,
    Title,
    InputsContainer,
    Input,
    SignInTitle,
    SignUpButton,
    SignUpTitle,
    ButtonsContainer,
    ButtonSubmit,
} from './styles';
import { Platform } from 'react-native';

const SignIn = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _signUp = () => {
        navigation.push('SignUp');
    }

    const _handleEmail = (text: string) => { setEmail(text) }
    const _handlePassword = (text: string) => { setPassword(text) }

    return (
        <Container>
            <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <BackgroundImage source={bgImage}>
                    <FormContainer>
                        <Title>Welcome back</Title>
                        <InputsContainer>
                            <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={_handleEmail} autoCapitalize='none' />
                            <Input placeholder="Password" secureTextEntry value={password} onChangeText={_handlePassword} />
                        </InputsContainer>

                        <ButtonsContainer>
                            <SignInTitle>Sign In</SignInTitle>
                            <ButtonSubmit onPress={() => { signIn() }}>
                                <AntDesign name="arrowright" size={24} color="#FFF" />
                            </ButtonSubmit>
                        </ButtonsContainer>

                        <SignUpButton onPress={_signUp}>
                            <SignUpTitle>Sign Up</SignUpTitle>
                        </SignUpButton>
                    </FormContainer>
                </BackgroundImage>
            </KeyboardAvoid>
        </Container >
    )
}

export default SignIn;