import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
            alignItems: "center",
            backgroundColor: "black",
            margin: 0,
            color: "white",
          }} className="py-3">
      <div>
        <p
          className="my-0 mx-4"
        >
          Brain Teach &copy; {year}
        </p>
      </div>
      <div><Link to="/" style={{textDecoration:"none",color:"white",cursor:"pointer"}}><small>Term & conditions</small></Link></div>
      <div className="mx-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h5 className="me-3 mb-0">Contact us</h5>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook mx-2 px-1" style={{color:"#3b5998",fontSize:"2rem",cursor:"pointer"}}></i></a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube mx-2 px-1" style={{color:"#FF0000",fontSize:"2rem",cursor:"pointer"}}></i></a>
      </div>
      </div>
    </>
  );
}
