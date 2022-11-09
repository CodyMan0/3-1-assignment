import React from 'react';
import { TfiSearch } from 'react-icons/tfi';
import S from './LatestSearchStyle';

const LatestSearch = () => {
  return (
    <S.Container>
      <S.Header>최근 검색어</S.Header>
      <S.Content>
        <TfiSearch />
        /123
      </S.Content>
      <S.Content>123</S.Content>
      <S.Content>123</S.Content>
    </S.Container>
  );
};

export default LatestSearch;
