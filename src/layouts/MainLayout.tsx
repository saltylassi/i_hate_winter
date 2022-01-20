import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  overflow: scroll;
`;

interface IProps {
  children: React.ReactChild[] | React.ReactChild;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
