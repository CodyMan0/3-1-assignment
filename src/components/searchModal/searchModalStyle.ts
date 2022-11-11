import styled from 'styled-components';

const Container = styled.div`
  width: 53%;
  min-height: 100px;
  margin: 0 auto;
  background-color: white;
  margin-top: 8px;
  border-radius: 40px;
`;
const SubContainer = styled.div`
  padding: 20px;
`;

const Data = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
`;

const S = {
  Container,
  SubContainer,
  Data,
};

export default S;
