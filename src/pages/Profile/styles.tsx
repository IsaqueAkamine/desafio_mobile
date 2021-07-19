import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    align-items: center;
`;

export const IconContent = styled.TouchableOpacity`
    position: absolute;
    z-index: 5;
    top: ${height * 0.05}px;
    left: ${width * 0.02}px;
`;

export const ProfileContainer = styled.View`
    flex: 1;
    margin-top: ${height * 0.12}px;
    align-items: center;
`;

export const ProfileImage = styled.Image`
    width: ${width * 0.3}px;
    height: ${width * 0.3}px;
    border-radius: ${width * 0.07}px;
`;

export const ProfileEmail = styled.Text`
    margin-top: ${height * 0.02}px;
    font-size: 24px;
    font-weight: 600;
`;

export const LocationContainer = styled.View`
    background-color: ${colors.secondary};
    height: ${height * 0.35}px;
    width: ${width}px;
    border-radius: ${width * 0.1}px;
    padding: ${width * 0.1}px;
`;

export const LocationTitle = styled.Text`
    color: ${colors.primary};
    font-size: 28px;
    font-weight: 700;
`;

export const LocationDescription = styled.Text`
    margin-top: ${height * 0.02}px;
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 600;
`;