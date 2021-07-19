import React, { useState, useContext } from 'react';
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

const SignIn = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

    const [disabledButton, setDisabledButton] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _signUp = () => {
        navigation.push('SignUp');
    }

    const _handleEmail = (text: string) => { setEmail(text) }
    const _handlePassword = (text: string) => { setPassword(text) }

    const validateFields = () => {
        setDisabledButton(true);
        if (email === '' || password === '') {
            Alert.alert('Erro login', 'Informe e-mail e senha');
            setDisabledButton(false);
            return;
        }

        if (validaEmail(email)) {
            Alert.alert('Erro login', 'Email inválido');
            setDisabledButton(false);
            return;
        }

        login();
    }

    const login = async () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                setDisabledButton(false);
                var user = {
                    token: await userCredential.user.getIdToken(),
                    user: userCredential.user
                };
                signIn(user);
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert(
                        `Erro`,
                        `Conta não encontrada.\nDeseja criar uma conta agora?`,
                        [
                            { text: 'Não', style: 'cancel', onPress: () => { setDisabledButton(false) } },
                            {
                                text: 'Sim', onPress: () => {
                                    navigation.push('SignUp');
                                    setDisabledButton(false);
                                }
                            },
                        ]
                    );
                    return;
                }
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Erro', 'Verifique seus dados e tente novamente')
                    setDisabledButton(false);
                    return;
                }
            });
    }

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
                            <ButtonSubmit onPress={validateFields} disabled={disabledButton}>
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