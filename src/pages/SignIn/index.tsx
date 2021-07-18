import React from 'react';
import SignUp from '../SignUp';
import { Container, Title, ButtonSubmit } from './styles';
import { AuthContext } from '../../contexts/context';

const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);

    const _signUp = () => {
        navigation.push('SignUp');
    }

    return (
        <Container>
            <Title>SignIn screen</Title>
            <ButtonSubmit title="Sign In" onPress={() => { signIn() }} />
            <ButtonSubmit title="Sign Up" onPress={_signUp} />
        </Container>
    )
}

export default SignIn;