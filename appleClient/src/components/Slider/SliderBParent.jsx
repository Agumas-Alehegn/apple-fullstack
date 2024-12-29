import SliderB from "./SliderB";
import { sliderBData } from "../../assets/sectionData";
import "../../css/bootstrap.css";
import "../../css/slide.css";
import "../../css/general.css";

function SliderBParent() {
  return (
    <section className="main-sec-i">
      <div className="slider-container-b">
        <div className="slider-wrapper">
          <div className="slides-b">
            {sliderBData.map((slider, i) => {
              const {
                sliderBWrapperClassName,
                sliderBLinkClassName,
                sliderBOverlayClassName,
                sliderBOverlayContent,
                overlayLogoPath,
                overLayContent,
                overlayBtnContent,
              } = slider;
              return (
                <SliderB
                  key={i}
                  sliderBWrapperClassName={sliderBWrapperClassName}
                  sliderBLinkClassName={sliderBLinkClassName}
                  sliderBOverlayClassName={sliderBOverlayClassName}
                  sliderBOverlayContent={sliderBOverlayContent}
                  overlayLogoPath={overlayLogoPath}
                  overLayContent={overLayContent}
                  overlayBtnContent={overlayBtnContent}
                />
              );
            })}
            {sliderBData.map((slider, i) => {
              const {
                sliderBWrapperClassName,
                sliderBLinkClassName,
                sliderBOverlayClassName,
                sliderBOverlayContent,
                overlayLogoPath,
                overLayContent,
                overlayBtnContent,
              } = slider;
              return (
                <SliderB
                  key={i}
                  sliderBWrapperClassName={sliderBWrapperClassName}
                  sliderBLinkClassName={sliderBLinkClassName}
                  sliderBOverlayClassName={sliderBOverlayClassName}
                  sliderBOverlayContent={sliderBOverlayContent}
                  overlayLogoPath={overlayLogoPath}
                  overLayContent={overLayContent}
                  overlayBtnContent={overlayBtnContent}
                />
              );
            })}
          </div>
          ;
        </div>
      </div>
    </section>
  );
}

export default SliderBParent;
