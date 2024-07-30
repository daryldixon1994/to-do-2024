import React from "react";
import BlockWithBtn from "./BlockWithBtn";
import ImageComponent from "./ImageComponent";
import "./style.css"
function SectionOne() {
  return (
    <div id="section-one-container">
      <BlockWithBtn />
      <ImageComponent />
    </div>
  );
}

export default SectionOne;
