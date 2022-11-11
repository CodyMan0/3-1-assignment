export interface Data {
  sickCd: string;
  sickNm: string;
}

export type InputClick = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};
//컴포넌트 props는 상위에 
// 공통되는 애들은 파일에 모아두자
