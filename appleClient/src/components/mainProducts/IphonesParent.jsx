import IphonesChild from "./IphonesChild.jsx";
import "../../css/bootstrap.css";
import "../../css/general.css";
import "../../css/pro-section.css";
import "../../css/iphone15-Pro.css";
import "../../css/iphone15.css";
import { mainProductsData } from "../../assets/sectionData.js";

function IphonesParent() {
  return (
    <main className="home-page-main">
      {mainProductsData.map((data, i) => {
        const {
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
        } = data;
        return (
          <IphonesChild
            key={i}
            sectionClassName={sectionClassName}
            productLink={productLink}
            productLinkClassName={productLinkClassName}
            WrapClassName={WrapClassName}
            unitWrapClassName={unitWrapClassName}
            titleClassName={titleClassName}
            titleContent={titleContent}
            subHeadClassName={subHeadClassName}
            description={description}
            btnWrapClassName={btnWrapClassName}
            btnLearnClassName={btnLearnClassName}
            btnLearnContent={btnLearnContent}
            btnBuyClassName={btnBuyClassName}
            btnBuyContent={btnBuyContent}
            bgdVideo={bgdVideo}
            isImage={isImage}
          />
        );
      })}
      ;
    </main>
  );
}

export default IphonesParent;
