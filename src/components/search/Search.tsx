import React from 'react';
import { TfiSearch } from 'react-icons/tfi';
import S from './SearchStyle';

const Search = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.FirstIcon>
          <TfiSearch />
        </S.FirstIcon>
        <S.Input type="search" placeholder="질환명을 입력해주세요" />
        <S.SecondIcon>
          <TfiSearch />
        </S.SecondIcon>
      </S.InputContainer>
    </S.Container>
  );
};

export default Search;
