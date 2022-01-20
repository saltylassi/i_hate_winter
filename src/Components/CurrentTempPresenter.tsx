import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';
import { item } from '../assets/types';

const Container = styled.View`
  flex: 4;
  justify-content: space-between;
  align-items: center;
  width: ${width}px;
  border-color: gray;
  border-top-width: 1px;
`;

const Text = styled.Text``;

interface IProps {
  temperature: item;
}

const CurrentTempPresenter: React.FC<IProps> = ({ temperature }) => {
  return (
    <Container>
      <Text>//TODO 디자인</Text>
      <Text>{temperature.fcstValue}</Text>
    </Container>
  );
};

export default CurrentTempPresenter;
