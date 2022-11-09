import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 40px;
`;

const FirstIcon = styled.div`
  color: #a6afb7;
  font-size: 20px;
  font-weight: 700;
`;
const SecondIcon = styled.div`
  position: absolute;
  right: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-weight: 500;
  border-radius: 100%;
  color: white;
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  font-size: 20px;
  padding: 0px 2px 0px 15px;
  &:focus {
    outline: None;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 10px 30px 24px;
  margin: 0 auto;
  border-radius: 100px;
  border: none;
  font-weight: 400;
  width: 50%;
  background-color: white;
`;

const S = {
  Container,
  FirstIcon,
  SecondIcon,
  Input,
  InputContainer,
};

export default S;
