import React from 'react';
import { Container, Title, ButtonSubmit } from './styles';
import { AuthContext } from '../../contexts/context';

const Home = () => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <Container>
            <Title>Home screen</Title>
            <ButtonSubmit title="Logout" onPress={() => { signOut() }} />
        </Container>
    )
}

export default Home;