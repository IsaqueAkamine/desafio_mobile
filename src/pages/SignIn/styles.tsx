import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const Container = styled.View`
    flex: 1;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
`;

export const FormContainer = styled.View`
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 60px 30px 80px 30px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    color: ${colors.primary};
`;

export const InputsContainer = styled.View`
    margin: 50px 0;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1px;
    margin: 15px 0;
    padding: 5px 0;
    font-size: 16px;
    line-height: 18px;
`;

export const SignInTitle = styled.Text`
    font-size: 26px;
    font-weight: 700;
    color: ${colors.primary};
`;

export const SignUpButton = styled.TouchableOpacity``;

export const SignUpTitle = styled.Text`
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    color: ${colors.primary};
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: ${colors.primary};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;