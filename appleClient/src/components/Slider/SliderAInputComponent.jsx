import React, { useState } from "react";
function SliderAInputComponent({ imageInput, isChecked }) {
  const [ischecked, setIschecked] = useState(isChecked);

  const handleCheckBox = (event) => {
    setIschecked(event.target.checked);
  };
  return (
    <>
      <input
        className="slider-input"
        type="radio"
        name="slide"
        id={imageInput}
        checked={ischecked}
        onChange={handleCheckBox}
      />
    </>
  );
}

export default SliderAInputComponent;
