import React from 'react';
import { Container, Title, ButtonSubmit } from './styles';
import { AuthContext } from '../../contexts/context';

const SignUp = () => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <Container>
            <Title>SignUp screen</Title>
            <ButtonSubmit title="Sign Up" onPress={() => { signUp() }} />
        </Container>
    )
}

export default SignUp;