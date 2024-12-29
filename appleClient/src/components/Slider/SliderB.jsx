import { Link } from "react-router-dom";

function SliderB({
  sliderBWrapperClassName,
  sliderBLinkClassName,
  sliderBOverlayClassName,
  sliderBOverlayContent,
  overlayLogoPath,
  overLayContent,
  overlayBtnContent,
}) {
  return (
    <>
      <div className={sliderBWrapperClassName}>
        <Link to="#" className={sliderBLinkClassName}>
          <div className={sliderBOverlayClassName}>
            <span>{sliderBOverlayContent}</span>
          </div>
          <div className="overlay-logo">
            <img src={overlayLogoPath} alt="" />
            <span>{overLayContent}</span>
          </div>
          <button href="#" type="button" className="overlay-btn">
            {overlayBtnContent}
          </button>
        </Link>
      </div>
    </>
  );
}

export default SliderB;
