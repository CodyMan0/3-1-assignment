import LatestSearch from 'components/latestSearch/LatestSearch';
import Recommendation from 'components/recommendation/Recommendation';
import { InputClickContext } from 'context/inputContext';
import { TfiSearch } from 'react-icons/tfi';
import React, { useContext } from 'react';
import S from './searchModalStyle';

const SearchModal = () => {
  const { isClicked, isChanged, inputValue } = useContext(InputClickContext);
  console.log(isClicked);
  console.log(isChanged);

  return (
    <>
      {isClicked && (
        <S.Container>
          <S.SubContainer>
            <LatestSearch />
            <Recommendation />
          </S.SubContainer>
        </S.Container>
      )}
      {isChanged && (
        <S.Container>
          <S.SubContainer>
            <S.Data>
              <TfiSearch />
              {inputValue}
            </S.Data>
          </S.SubContainer>
        </S.Container>
      )}
    </>
  );
};

export default SearchModal;
