import React, { useContext } from "react";

import Image from "./Image";
import { Context } from "./ItemsContext";

// helper function
function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  }
}

// photos component
function Photos() {
  const { photos } = useContext(Context);

  const imageElements = photos.map((img, i) => (
    <Image key={img.id} src={img} className={getClass(i)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
