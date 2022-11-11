import { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from 'interfaces/interface';

const AxiosService = (
	//axiosService 변수명의 의미를 다시 생각해보자!
  letter: string
) => {
  // if ('caches' in window) {
  //   caches.open('cash').then((cache) => {
  //     console.log(cache);
  //   });
  // }
  axios
    .get(`http://localhost:4000/sick?q=${letter}`)
    .then((res) => res.data);
};

export default AxiosService;
