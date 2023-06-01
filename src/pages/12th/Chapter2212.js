import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader';
import McqRendering from '../../components/McqRendering';

export default function Chapter2212() {
    const [data, setData] = useState("");
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:4000/12th/variationAndGenetics"
      );
      setData(response.data);
    };
    useEffect(() => {
      getData();
    }, []);
    return <>{data ? <McqRendering arrayOfMcq={data} /> : <Loader />}</>;
  }
