import { Link } from "react-router-dom";

function IphonesChild({
  sectionClassName,
  productLink,
  productLinkClassName,
  WrapClassName,
  unitWrapClassName,
  titleClassName,
  titleContent,
  subHeadClassName,
  description,
  btnWrapClassName,
  btnLearnClassName,
  btnLearnContent,
  btnBuyClassName,
  btnBuyContent,
  bgdVideo,
  isImage,
}) {
  return (
    <section className={sectionClassName}>
      <Link to={productLink} className={productLinkClassName}>
        <div className={WrapClassName}>
          <div className={unitWrapClassName}>
            {isImage ? (
              <img className="visionPro-logo" src={titleContent} />
            ) : (
              <h2 className={titleClassName}>{titleContent}</h2>
            )}

            <div className={subHeadClassName}></div>
            <p>{description}</p>
            <div className={btnWrapClassName}>
              <button href="#" type="button" className={btnLearnClassName}>
                {btnLearnContent}
              </button>
              <button href="#" type="button" className={btnBuyClassName}>
                {btnBuyContent}
              </button>
            </div>
          </div>
          <div className="visionPro-back-video-link" href="#">
            <video
              autoPlay
              muted
              loop
              plays-inline="true"
              className="visionPro-animation-video"
            >
              <source src={bgdVideo} />
            </video>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default IphonesChild;
