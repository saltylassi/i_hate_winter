import * as React from 'react';
import styled from 'styled-components/native';
import FooterBtn from './FooterBtn';

const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: gray;
  border-top-width: 1px;
  padding: 10px 20px;
`;

interface IProps {
  handleRegion: Function;
  currentRegion: string;
}

const Footer: React.FC<IProps> = ({ handleRegion, currentRegion }) => {
  return (
    <Container>
      <FooterBtn text="bucheon" handleRegion={handleRegion} currentRegion={currentRegion} />
      <FooterBtn text="seoul" handleRegion={handleRegion} currentRegion={currentRegion} />
      <FooterBtn text="eumseong" handleRegion={handleRegion} currentRegion={currentRegion} />
    </Container>
  );
};

export default Footer;
