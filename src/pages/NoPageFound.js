import React from "react";
import { Link } from "react-router-dom";

export default function NoPageFound() {
  const style = {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // color:"blue"
  };
  return (
    <div className="container text-center" style={style}>
      <h1 className="py-2">Error 404</h1>
      <h5>No Page on this Link</h5>
      <Link to="/" className="btn btn-primary mt-4">Go to Home</Link>
    </div>
  );
}
