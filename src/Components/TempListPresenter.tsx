import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';
import { item } from '../assets/types';

const Container = styled.View`
  flex: 5;
  width: ${width}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  border-color: gray;
  border-top-width: 1px;
`;

const Text = styled.Text`
  padding: 0px 16px;
`;

interface IProps {
  items: Array<item>;
}

const TempListPresenter: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <Text>//TODO 시간, 색깔, 스크롤</Text>
      {items.map((item: item) => (
        <Text key={item.fcstTime}>{item.fcstValue}</Text>
      ))}
    </Container>
  );
};

export default TempListPresenter;
