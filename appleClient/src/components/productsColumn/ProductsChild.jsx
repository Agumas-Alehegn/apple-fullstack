import { Link } from "react-router-dom";
function ProductsChild({
  classNameWrap,
  classNameLink,
  classNameImageWrap,
  classNameOverlay,
  classNamePromoWrap,
  classNamePromoHead,
  promoContentHead,
  classNamePromoSubhead,
  promoContentOne,
  promoContentTwo,
  classNameBtnWrap,
  classNameBtnLearn,
  btnLearnContent,
  classNameBuyBtn,
  buyBtnContent,
  isImage,
}) {
  return (
    <div className={classNameWrap}>
      <Link to="" className={classNameLink}>
        <div className={classNameImageWrap}>
          <div className={classNameOverlay}>
            <div className={classNamePromoWrap}>
              <div className={classNamePromoHead}>
                <h2>
                  {isImage ? <img src={promoContentHead} /> : promoContentHead}
                </h2>
              </div>
              <div className={classNamePromoSubhead}>
                <p>
                  {promoContentOne} <br />
                  {promoContentTwo}
                </p>
              </div>
            </div>
            <div className={classNameBtnWrap}>
              <button type="button" className={classNameBtnLearn}>
                {btnLearnContent}
              </button>
              <button className={classNameBuyBtn}>{buyBtnContent}</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductsChild;
