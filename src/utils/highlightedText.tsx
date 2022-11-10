import { InputClickContext } from 'context/inputContext';
import { useContext } from 'react';
import styled from 'styled-components';

const HighlightedText = (text: string) => {
  const { inputValue } = useContext(InputClickContext);
  const result = Array(text).map((element) => element.indexOf(inputValue));
  const checkedIndex = result.toString();

  console.log(checkedIndex);

  return text;
};

export default HighlightedText;

// const highlightedText = (text, query) => {
//   if (query !== '' && text.includes(query)) {
//     const parts = text.split(new RegExp(`(${query})`, 'gi'));

//     return (
//       <>
//         {parts.map((part, index) =>
//           part.toLowerCase() === query.toLowerCase() ? (
//             <mark key={index}>{part}</mark>
//           ) : (
//             part
//           )
//         )}
//       </>
//     );
//   }

//   return text;
// };
