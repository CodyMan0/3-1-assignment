import { InputClickContext } from 'context/inputContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import S from './SearchStyle';

const Search = () => {
  const { setIsClicked, setIsChanged, setInputValue } =
    useContext(InputClickContext);

  const onClickHandler = () => {
    setIsClicked(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.selectionEnd);
    if (e.target.selectionEnd !== 0) {
      setIsClicked(false);
      setIsChanged(true);
      setInputValue(e.target.value);
    }
    if (e.target.selectionEnd === 0) {
      setIsClicked(true);
      setIsChanged(false);
    }
  };

  return (
    <S.Container onClick={onClickHandler}>
      <S.InputContainer>
        <S.FirstIcon>
          <TfiSearch />
        </S.FirstIcon>
        <S.Input
          type="search"
          placeholder="질환명을 입력해주세요"
          onChange={(e) => onChangeHandler(e)}
        />
        <S.SecondIcon>
          <TfiSearch />
        </S.SecondIcon>
      </S.InputContainer>
    </S.Container>
  );
};

export default Search;
