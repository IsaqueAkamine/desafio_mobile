import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: center;
`;

export const IconContent = styled.TouchableOpacity`
    position: absolute;
    z-index: 5;
    top: ${height * 0.05}px;
    left: ${width * 0.02}px;
`;
