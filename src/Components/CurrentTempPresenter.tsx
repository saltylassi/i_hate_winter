import * as React from 'react';
import styled from 'styled-components/native';
import { item } from '../constants/types';
import { utils } from '../utils/utils';

const Container = styled.View`
  flex: 6;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-color: gray;
  border-top-width: 1px;
`;

const BackgroundImage = styled.Image`
  width: 60%;
  height: 60%;
  padding: 10px 0;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.Text<{ isNegative?: boolean }>`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => (props.isNegative !== undefined ? (props.isNegative ? 'skyblue' : 'red') : 'black')};
`;

const Description = styled.Text`
  font-size: 12px;
  opacity: 0.4;
`;

interface IProps {
  temperature: item;
}

const CurrentTempPresenter: React.FC<IProps> = ({ temperature }) => {
  const random = Math.floor(((Math.random() * 100) % 2) + 1);
  const pos = random > 1 ? require('../../images/pos1.png') : require('../../images/pos2.png');
  const neg = random > 1 ? require('../../images/neg1.png') : require('../../images/neg2.png');

  return (
    <Container>
      <Title>현재 기온</Title>
      <Text isNegative={Number(temperature.fcstValue) <= 0}>{temperature.fcstValue}°C</Text>
      <Description>{utils.dateFunctions.convertTimeStampToString(temperature.fcstTime.slice(0, 2))} 기준</Description>
      <BackgroundImage source={Number(temperature.fcstValue) > 0 ? pos : neg} resizeMode="contain" />
    </Container>
  );
};

export default CurrentTempPresenter;
