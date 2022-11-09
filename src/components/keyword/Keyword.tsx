import { Data } from 'interfaces/interface';
import { TfiSearch } from 'react-icons/tfi';
import React from 'react';
import S from './KeywordStyle';

interface Props {
  contentList: Data[];
}

const Keyword = ({ contentList }: Props) => {
  return (
    <S.Container>
      {contentList.map((content, idx) => (
        <S.KeywordItem key={idx}>{content?.sickNm}</S.KeywordItem>
      ))}
    </S.Container>
  );
};

export default Keyword;
