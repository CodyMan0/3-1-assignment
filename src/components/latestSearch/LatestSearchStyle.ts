import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.h1`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: lightgray;
`;

const Content = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-left: 10px;
  }
`;

const S = {
  Container,
  Header,
  Content,
};

export default S;
