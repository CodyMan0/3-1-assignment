import LatestSearch from 'components/latestSearch/LatestSearch';
import Recommendation from 'components/recommendation/Recommendation';
import Keyword from 'components/keyword/Keyword';
import AxiosService from 'services/AxiosService';
import { InputClickContext } from 'context/inputContext';
import { TfiSearch } from 'react-icons/tfi';
import { Data } from 'interfaces/interface';
import React, { useContext, useEffect, useState } from 'react';
import S from './searchModalStyle';

const SearchModal = () => {
  const { isClicked, isChanged, inputValue, setInputValue } =
    useContext(InputClickContext);

  const [searchedContent, setSearchedContent] = useState<Data[]>([]);
  console.log(searchedContent);

  useEffect(() => {
    const debounce = setTimeout(() => {
      // return AxiosService(inputValue).then(data => setSearchedContent(data));
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

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
            <Keyword contentList={searchedContent} />
          </S.SubContainer>
        </S.Container>
      )}
    </>
  );
};

export default SearchModal;
