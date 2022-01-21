import * as React from 'react';
import styled from 'styled-components/native';
import { item } from '../constants/types';
import { utils } from '../utils/utils';

const Container = styled.View`
  flex: 3;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: gray;
  border-top-width: 1px;
`;

const InnerContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

const Column = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  opacity: 0.4;
`;

const Text = styled.Text<{ isNegative?: boolean }>`
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.isNegative !== undefined ? (props.isNegative ? 'skyblue' : 'red') : 'black')};
`;

interface IProps {
  items: Array<item>;
}

const TempListPresenter: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <Title>금일 기온 정보 (12시간)</Title>
      <InnerContainer>
        <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }} persistentScrollbar={true}>
          {items.map((item: item, index) => (
            <Column key={index + item.fcstTime}>
              <Text>{utils.dateFunctions.convertTimeStampToString(item.fcstTime.slice(0, 2))}</Text>
              <Text isNegative={Number(item.fcstValue) <= 0}>{item.fcstValue}°C</Text>
            </Column>
          ))}
        </ScrollView>
      </InnerContainer>
    </Container>
  );
};

export default TempListPresenter;
