import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';

const Container = styled.View`
  flex: 1;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

interface IProps {
  region: string;
}

const Header: React.FC<IProps> = ({ region }) => {
  return (
    <Container>
      <Text>{{ bucheon: '부천', seoul: '서울', eumseong: '음성' }[region]}</Text>
    </Container>
  );
};

export default Header;
