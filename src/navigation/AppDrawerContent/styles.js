import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const Header = styled.View`
    padding-left: 20px;
`;

export const ImageContainer = styled.View`
    width: 55px;
    height: 55px;
    border-width: 1px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const DescriptionContainer = styled.View`
    margin-left: 15px;
`;

export const Title = styled.Text`
    font-size: 16px;
    margin-top: 3px;
    font-weight: bold;
    line-height: 18px;
    color: ${colors.primary};
`;

export const Description = styled.Text`
    font-size: 12px;
    line-height: 16px;
    margin-top: 5px;
    color: ${colors.primary};
`;

export const Content = styled.View``;

export const Footer = styled.View``;