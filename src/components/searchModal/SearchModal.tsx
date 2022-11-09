import LatestSearch from 'components/latestSearch/LatestSearch';
import Recommendation from 'components/recommendation/Recommendation';

import React from 'react';
import S from './searchModalStyle';

const SearchModal = () => {
  return (
    <S.Container>
      <S.SubContainer>
        <LatestSearch />
        <Recommendation />
      </S.SubContainer>
    </S.Container>
  );
};

export default SearchModal;
