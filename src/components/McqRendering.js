import React, { useState } from "react";
export default function McqRendering(props) {
  const arrayLength =props.arrayOfMcq.length
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(arrayLength / 20);

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 80,
      behavior: "smooth"
    });
    setCurrentPage(page);
  };
  return (
    <div className="container my-2 py-2" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <ul className="px-lg-5 px-md-3 px-0" >
        {props.arrayOfMcq.slice((currentPage - 1) * 20, currentPage * 20).map((item, i) => (
          <>
          <div key={i} style={{margin:"2px 0", padding:"10px"}}>
            <p className="pt-4" key={i}>{i+1}) {item.question.charAt(0).toUpperCase()+item.question.slice(1)}
            </p>
            <div className="ps-4">
      
            <li
              style={{
                fontWeight: `${item.options[0].isTrue ? "bold":"normal"}`,
                listStyle: "none",
              }}
            >
              A.{" "}
              <span style={{ color: `${item.options[0].isTrue ? "blue":"black"}` }}>
                {item.options[0].a.charAt(0).toUpperCase()+item.options[0].a.slice(1)}
              </span>
            </li>
            <li
              style={{
                fontWeight: `${item.options[1].isTrue ? "bold":"normal"}`,
                listStyle: "none",
              }}
            >
              B.{" "}
              <span style={{ color: `${item.options[1].isTrue ? "blue":"black"}` }}>
                {item.options[1].b.charAt(0).toUpperCase()+item.options[1].b.slice(1)}
              </span>
            </li>
            <li
              style={{
                fontWeight: `${item.options[2].isTrue ? "bold":"normal"}`,
                listStyle: "none",
              }}
            >
              C.{" "}
              <span style={{ color: `${item.options[2].isTrue ? "blue":"black"}` }}>
                {item.options[2].c.charAt(0).toUpperCase()+item.options[2].c.slice(1)}
              </span>
            </li>
            <li
              style={{
                fontWeight: `${item.options[3].isTrue ? "bold":"normal"}`,
                listStyle: "none",
              }}
            >
              D.{" "}
              <span style={{ color: `${item.options[3].isTrue ? "blue":"black"}` }}>
                {item.options[3].d.charAt(0).toUpperCase()+item.options[3].d.slice(1)}
              </span>
            </li>
            </div>
          </div>
          <div>
          <hr/>
          </div>
          </>
        ))}
         <div className="mt-3">
         <span className="btn btn-success">Page {currentPage} of {pages}</span>
        {Array.from({ length: pages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)} className="btn btn-primary m-2 px-3">
            {i + 1}
          </button>
        ))} 
      </div>
      </ul>
    </div>
  );
}
