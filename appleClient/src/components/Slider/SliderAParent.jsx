import SliderASliderComponent from "./SliderASliderComponent";
import SliderAInputComponent from "./SliderAInputComponent";
import SliderANavBtnComponent from "./SliderANavBtnComponent";
import {
  sliderAInputData,
  sliderASliderData,
  sliderALabelData,
} from "../../assets/sectionData";
import "../../css/bootstrap.css";
import "../../css/general.css";
import "../../css/slide.css";

function SliderAParent() {
  return (
    <section className="main-sec-h">
      <div className="slider-container">
        {sliderAInputData.map((radio, i) => {
          const { imageInput, isChecked } = radio;
          return (
            <SliderAInputComponent
              key={i}
              imageInput={imageInput}
              isChecked={isChecked}
            />
          );
        })}

        <div className="slider">
          {sliderASliderData.map((data, i) => {
            const {
              slide,
              slideLink,
              imgPath,
              slideBtnClass,
              btnContent,
              genre_title,
              genre,
              genreContent,
              titleContent,
            } = data;
            return (
              <SliderASliderComponent
                key={i}
                slide={slide}
                slideLink={slideLink}
                imgPath={imgPath}
                slideBtnClass={slideBtnClass}
                btnContent={btnContent}
                genre_title={genre_title}
                genre={genre}
                genreContent={genreContent}
                titleContent={titleContent}
              />
            );
          })}
        </div>
      </div>
      <div className="radio-nav-btn">
        {sliderALabelData.map((label, i) => {
          const { forImageInput } = label;
          return (
            <SliderANavBtnComponent key={i} forImageInput={forImageInput} />
          );
        })}
      </div>
    </section>
  );
}

export default SliderAParent;
