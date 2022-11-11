import { InputClickContext } from 'context/inputContext';
import { useContext } from 'react';
import styled from 'styled-components';

const HighlightedText = (text: string) => {
  const { inputValue } = useContext(InputClickContext);
  const regex = new RegExp(`[${inputValue}]`, 'g');

  const returnTag = (inputWord: string) => {
    return `<strong>${inputWord}</strong>`;
  };

  const replace = (content: string) => {
    const convertContent = content.replace(regex, returnTag);
    return { __html: convertContent };
  };
  return <div dangerouslySetInnerHTML={replace(text)} />;
	//string -> tag 이렇게 하면 안된다. 
};

export default HighlightedText;
