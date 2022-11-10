import { Data } from 'interfaces/interface';
import { TfiSearch } from 'react-icons/tfi';
import React from 'react';
import highlightedText from 'utils/highlightedText';
import S from './KeywordStyle';

interface Props {
  contentList: Data[];
}

const Keyword = ({ contentList }: Props) => {
  console.log('keyword', contentList);
  return (
    <S.Container>
      {contentList.map((content, idx) => {
        return (
          <S.KeywordItem key={idx}>
            {highlightedText(content?.sickNm)}
          </S.KeywordItem>
        );
      })}
    </S.Container>
  );
};

export default Keyword;
