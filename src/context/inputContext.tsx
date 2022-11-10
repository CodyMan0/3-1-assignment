import { InputClick } from 'interfaces/interface';
import { createContext, useMemo, useState, useContext } from 'react';

const initialState: InputClick = {
  isClicked: false,
  setIsClicked: () => {},
  isChanged: false,
  setIsChanged: () => {},
  inputValue: '',
  setInputValue: () => {},
};

export const InputClickContext = createContext<InputClick>(initialState);

const InputClickProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [inputValue, setInputValue] = useState('ㄱ');

  const value = useMemo(() => {
    return {
      isClicked,
      setIsClicked,
      isChanged,
      setIsChanged,
      inputValue,
      setInputValue,
    };
  }, [isClicked, isChanged, inputValue]);

  return (
    <InputClickContext.Provider value={value}>
      {children}
    </InputClickContext.Provider>
  );
};

export default InputClickProvider;
