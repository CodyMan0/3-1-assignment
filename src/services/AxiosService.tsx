import { Data } from 'interfaces/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosService = (letter: string) => {
  useEffect(() => {
    axios
      .get(`http://localhost:4000/sick?q=${letter}`)
      .then((res) => console.log(res.data));
  }, []);
};

export default AxiosService;
