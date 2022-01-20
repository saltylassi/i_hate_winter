import * as React from 'react';
import styled from 'styled-components/native';
import { width } from '../assets/constants';
import { item } from '../assets/types';

const Container = styled.View`
  flex: 5;
  width: ${width}px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  border-color: gray;
  border-top-width: 1px;
`;

const InnerContainer = styled.View`
  width: ${width}px;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  border-color: gray;
  border-top-width: 1px;
`;

const Text = styled.Text<{ isNegative?: boolean }>`
  padding: 0px 16px;
  font-size: 16px;
  color: ${(props) => (props.isNegative !== undefined ? (props.isNegative ? 'skyblue' : 'red') : 'black')};
`;

interface IProps {
  items: Array<item>;
}

const TempListPresenter: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <Text>//TODO 디자인, 시간, 색깔</Text>
      <InnerContainer>
        <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }}>
          {items.map((item: item, index) => (
            <Text key={index + item.fcstTime} isNegative={Number(item.fcstValue) <= 0}>
              {item.fcstValue}
            </Text>
          ))}
        </ScrollView>
      </InnerContainer>
    </Container>
  );
};

export default TempListPresenter;
