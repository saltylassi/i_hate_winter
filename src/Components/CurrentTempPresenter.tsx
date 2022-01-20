import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';

const Container = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: ${width}px;
`;

const Text = styled.Text``;

interface IProps {
  temperature: {
    baseDate: string;
    baseTime: string;
    category: string;
    fcstDate: string;
    fcstTime: string;
    fcstValue: string;
    nx: number;
    ny: number;
  };
}

const CurrentTempPresenter: React.FC<IProps> = ({ temperature }) => {
  return (
    <Container>
      <Text>//TODO 최고기온, 최저기온, 디자인, 지역명</Text>
      <Text>{temperature.fcstValue}</Text>
    </Container>
  );
};

export default CurrentTempPresenter;
