import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';
import FooterBtn from './FooterBtn';

const Container = styled.View`
  flex: 1;
  width: ${width}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: gray;
  border-top-width: 1px;
  padding: 10px 20px;
`;

interface IProps {
  handleRegion: Function;
}

const Footer: React.FC<IProps> = ({ handleRegion }) => {
  return (
    <Container>
      <FooterBtn text="부천" handleRegion={handleRegion} />
      <FooterBtn text="서울" handleRegion={handleRegion} />
      <FooterBtn text="충주" handleRegion={handleRegion} />
    </Container>
  );
};

export default Footer;
