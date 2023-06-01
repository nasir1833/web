import axios from "axios";
import React, { useEffect, useState } from "react";
import McqRendering from "../../components/McqRendering";
import Loader from "../../components/Loader"
export default function Planets() {
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:4000/generalKnowledge/planets"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <>{data ? <McqRendering arrayOfMcq={data} /> : <Loader />}</>;
}
