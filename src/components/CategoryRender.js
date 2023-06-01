
import React from "react";
import { Link } from "react-router-dom";
import "../css/LinkHover.css"
import liMarker from "../assets/images/arrow-next-2825.png"
export default function CategoryRender(props) {
  return (
    <>
      <div className="container my-3" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>

        <h3 className="py-3">Categories/Topic</h3>
        <hr />
        <div className="container mx-3">

          <ul>
            {props.arrayOfCategory.map((item, i) =>
              <li key={i} className="py-2" style={{ listStyleImage: `url(${liMarker})` }}>
                <Link to={item.link} className="li__links">{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}