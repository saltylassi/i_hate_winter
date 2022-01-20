import * as React from 'react';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  width: 30%;
  height: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-color: gray;
  border-width: 1px;
`;

const Text = styled.Text``;

interface IProps {
  text: string;
  handleRegion: Function;
}

const FooterBtn: React.FC<IProps> = ({ text, handleRegion }) => {
  return (
    <Btn
      onPress={() => {
        handleRegion(text);
      }}
    >
      <Text>{text}</Text>
    </Btn>
  );
};

export default FooterBtn;
