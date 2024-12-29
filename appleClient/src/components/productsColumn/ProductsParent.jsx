import "../../css/bootstrap.css";
import "../../css/general.css";
import "../../css/devConf-mBook.css";
import "../../css/watch-iPad.css";
import "../../css/airPods-visionPro.css";
import "../../css/card-tradIn.css";
import ProductsChild from "./ProductsChild.jsx";
import { productsData } from "../../assets/sectionData.js";

function ProductsParent() {
  return (
    <section className="main-sec-d container-fluid">
      <div className="row pb-md-3">
        {productsData.map((data, i) => {
          const {
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
            isImage,
            classNameBuyBtn,
            buyBtnContent,
          } = data;
          return (
            <ProductsChild
              key={i}
              classNameWrap={classNameWrap}
              classNameLink={classNameLink}
              classNameImageWrap={classNameImageWrap}
              classNameOverlay={classNameOverlay}
              classNamePromoWrap={classNamePromoWrap}
              classNamePromoHead={classNamePromoHead}
              promoContentHead={promoContentHead}
              classNamePromoSubhead={classNamePromoSubhead}
              promoContentOne={promoContentOne}
              promoContentTwo={promoContentTwo}
              classNameBtnWrap={classNameBtnWrap}
              classNameBtnLearn={classNameBtnLearn}
              btnLearnContent={btnLearnContent}
              classNameBuyBtn={classNameBuyBtn}
              buyBtnContent={buyBtnContent}
              isImage={isImage}
            />
          );
        })}
      </div>
    </section>
  );
}
export default ProductsParent;
