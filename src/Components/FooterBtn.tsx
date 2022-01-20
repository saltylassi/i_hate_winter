import * as React from 'react';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity<{ selected: boolean }>`
  width: 30%;
  height: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-color: gray;
  border-width: 1px;
  background-color: ${(props) => (props.selected ? 'skyblue' : 'white')};
`;

const Text = styled.Text``;

interface IProps {
  text: string;
  handleRegion: Function;
  currentRegion: string;
}

const FooterBtn: React.FC<IProps> = ({ text, handleRegion, currentRegion }) => {
  return (
    <Btn
      onPress={() => {
        handleRegion(text);
      }}
      selected={currentRegion === text}
    >
      <Text>{{ bucheon: '부천', seoul: '서울', eumseong: '음성' }[text]}</Text>
    </Btn>
  );
};

export default FooterBtn;
