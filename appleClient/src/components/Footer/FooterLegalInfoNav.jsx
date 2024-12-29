import FooterLegalItemsLinks from "./FooterLegalItemsLinks";
import { footerLegalNavData } from "../../assets/sectionData";

function FooterLegalInfoNav() {
  return (
    <>
      <span className="col-md-4 col-12 order-2 order-md-first text-nowarap p-0">
        Copyright © 2024 Apple Inc All rights reserved.
      </span>
      <ul className="col-md-7 col-12 list-unstyled d-flex flex-nowrap order-3 order-md-2 p-0">
        {footerLegalNavData.map((item, index) => {
          const { linkUrl, linkContent, hasSpan, spanClass } = item;
          return (
            <FooterLegalItemsLinks
              key={index}
              ws
              linkUrl={linkUrl}
              linkContent={linkContent}
              hasSpan={hasSpan}
              spanClass={spanClass}
            />
          );
        })}
      </ul>
      <span className="col-md-1 col-12 country order-1 order-md-last text-nowarap p-0">
        United States
      </span>
    </>
  );
}

export default FooterLegalInfoNav;
