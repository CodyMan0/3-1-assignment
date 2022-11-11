import { Data } from 'interfaces/interface';
import { TfiSearch } from 'react-icons/tfi';
import React, { useRef, useState } from 'react';
import HighlightedText from 'utils/highlightedText';
import S from './KeywordStyle';

interface Props {
  contentList: Data[];
}

const Keyword = ({ contentList }: Props) => {
  return (
    <S.Container>
      {contentList.length === 0 ? (
        <S.KeywordItem>검색어를 찾지 못했습니다</S.KeywordItem>
      ) : (
        contentList.map((content) => {
          return (
            <S.KeywordItem key={content.sickCd}>
              <TfiSearch />
              {HighlightedText(content?.sickNm)}
            </S.KeywordItem>
          );
        })
      )}
    </S.Container>
  );
};

export default Keyword;
