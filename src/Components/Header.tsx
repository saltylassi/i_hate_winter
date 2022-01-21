import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
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
      <Text>
        {{ bucheon: '부천시 소사구 대산동', seoul: '서울시 강남구 삼성1동', eumseong: '음성군 금왕읍' }[region]}
      </Text>
    </Container>
  );
};

export default Header;
