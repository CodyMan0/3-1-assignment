import Search from 'components/search/Search';
import SearchModal from 'components/searchModal/SearchModal';
import React from 'react';
import AxiosService from 'services/AxiosService';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1040px;
  padding: 80px 0 160px;
  margin: 56px auto;
  background-color: #c9e9ff;
`;

const Header = styled.div`
  width: 40%;
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Header>국내 모든 임상시험 검색하고 온라인으로 참여하기</Header>
      <Search />
      <SearchModal />
    </Container>
  );
};

export default Home;
