import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../constants/constants';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: ${width * 0.9}px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
`;

interface IProps {
  children: React.ReactChild[] | React.ReactChild;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
