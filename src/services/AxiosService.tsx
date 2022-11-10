import { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from 'interfaces/interface';

const AxiosService = (
  letter: string,
  setData: React.Dispatch<React.SetStateAction<Data[]>>
) => {
  // const filteredFunction = (data: any) => {
  //   const value = Object.values(data);
  //   console.log(value);

  axios
    .get(`http://localhost:4000/sick?q=${letter}`)
    .then((res) => setData(res.data));
};

export default AxiosService;
