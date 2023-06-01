import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import McqRendering from "../components/McqRendering";
import liMarker from "../assets/images/arrow-next-2825.png"
import { chapter1 } from "../categories/dummyMcq";

// const importantMcq = [
//   "Islamic Studies MCQs",
//   "General Knowledge",
//   "Pak Study",
//   "Computer Science",
//   "Everyday Science",
//   "Pakistan Current Affairs",
//   "International Current Affairs",
//   "ANF Act 1997",
//   "Breaking News: Latest News",
// ];
const importantMcq = [
  {name:"Islamic Studies MCQs",link:"islamicStudies"},
  {name:"General Knowledge",link:"generalKnowledge"},
  {name:"Pak Study",link:"generalKnowledge"},
  {name:"Computer Science",link:"/computer/html"},
  {name:"Everyday Science",link:"generalKnowledge"},
  {name:"Pakistan Current Affairs",link:"generalKnowledge"},
  {name:"International Current Affairs",link:"generalKnowledge"},
  {name:"ANF Act 1997",link:"generalKnowledge"},
  {name:"Breaking News: Latest News",link:"generalKnowledge"},
  
];
const pastPapers = [
  "General Knowledge",
  "Pak Study",
  "Islamic Studies MCQs",
  "Pakistan Current Affairs",
  "Breaking News: Latest News",
  "International Current Affairs",
  "ANF Act 1997",
  "Computer",
  "Everyday Science",
];
export default function Home() {
  // const [data, setData] = useState("");
  // const getData = async () => {
  //   const response = await axios.get("http://localhost:4000/");
  //   setData(response.data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <div className="container home__page">
      <div className="home__top">
        <div>
          {/* <h2>{data?data:"nothing"}</h2> */}
          <h1>Important MCQ's</h1>
          <ul>
            {importantMcq.map((item, i) => (
              <li key={i} className="py-2 " style={{ listStyleImage: `url(${liMarker})`}}>
                <Link to={item.link} className="home__links">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <h1>Past Papers MCQ's</h1>
          <ul>
            {pastPapers.map((item, i) => (
              <li key={i} className="py-2" style={{ listStyleImage: `url(${liMarker})` }}>
                <Link to="/" className="home__links">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <McqRendering arrayOfMcq={chapter1}/>
    </>
  );
}
