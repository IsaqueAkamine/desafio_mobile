import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { AuthContext } from '../../contexts/context';
import * as firebase from 'firebase';
import { validaEmail } from '../../utils/constants';

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

const SignUp = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);

    const [disabledButton, setDisabledButton] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const _signIn = () => {
        navigation.push('SignIn');
    }

    const _handleEmail = (text: string) => { setEmail(text) }
    const _handlePassword = (text: string) => { setPassword(text) }
    const _handleConfirmPassword = (text: string) => { setConfirmPassword(text) }

    const validateFields = () => {
        setDisabledButton(true);
        if (email === '' || password === '') {
            Alert.alert('Erro ao criar conta', 'Informe e-mail e senha');
            setDisabledButton(false);
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro ao criar conta', 'Verifique confirmação de senha');
            setDisabledButton(false);
            return;
        }

        if (password.length < 6) {
            Alert.alert('Erro ao criar conta', 'Informe uma senha maior que 6 caracteres');
            setDisabledButton(false);
            return;
        }

        if (validaEmail(email)) {
            Alert.alert('Erro ao criar conta', 'Email inválido');
            setDisabledButton(false);
            return;
        }
        createAccount();
    }

    const createAccount = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                Alert.alert(
                    `Sucesso!`,
                    `Conta criada com sucesso`,
                    [
                        {
                            text: 'Ok', onPress: () => {
                                setDisabledButton(false);
                                navigation.goBack();
                            }
                        }
                    ]
                );
            })
            .catch((error) => {
                setDisabledButton(false);
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert(
                        `Erro`,
                        `Email já registrado!`
                    );
                }
            });
    }

    return (
        <Container>
            <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <BackgroundImage source={bgImage}>
                    <FormContainer>
                        <Title>Get Started</Title>
                        <InputsContainer>
                            <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={_handleEmail} autoCapitalize='none' />
                            <Input placeholder="Password" secureTextEntry value={password} onChangeText={_handlePassword} />
                            <Input placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={_handleConfirmPassword} />
                        </InputsContainer>

                        <ButtonsContainer>
                            <SignInTitle>Sign Up</SignInTitle>
                            <ButtonSubmit onPress={validateFields}>
                                <AntDesign name="arrowright" size={24} color="#FFF" />
                            </ButtonSubmit>
                        </ButtonsContainer>

                        <SignUpButton onPress={_signIn} disabled={disabledButton}>
                            <SignUpTitle>Sign In</SignUpTitle>
                        </SignUpButton>
                    </FormContainer>
                </BackgroundImage>
            </KeyboardAvoid>
        </Container>
    )
}

export default SignUp;
