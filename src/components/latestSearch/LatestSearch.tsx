import React from 'react';
import { TfiSearch } from 'react-icons/tfi';
import S from './LatestSearchStyle';

const LatestSearch = () => {
  return (
    <S.Container>
      <S.Header>최근 검색어</S.Header>
      <S.Content>
        <TfiSearch />
        <div>담낭</div>
      </S.Content>
      <S.Content>
        <TfiSearch />
        <div>염좌</div>
      </S.Content>
      <S.Content>
        <TfiSearch />
        <div>염증</div>
      </S.Content>
    </S.Container>
  );
};

export default LatestSearch;
