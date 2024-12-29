import FooterGeneralInfo from "./FooterGeneralInfo";
import SectionDivider from "./SectionDivider";
import {
  footerInfoContent,
  footerData,
  footerData1,
  footerData2,
  footerData3,
  footerData4,
} from "../../assets/sectionData";
import FooterSection from "./FooterSection ";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection ";
import FooterSection3 from "./FooterSection1";
import FooterSection4 from "./FooterSection ";
import FooterLegalInfoNav from "./FooterLegalInfoNav";
import "../../css/bootstrap.css";
import "../../css/general.css";
import "../../css/footer.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";

function FooterParent() {
  useEffect(() => {
    function footerToggle(chevronBtn, toggleContent) {
      let chevronButton = $(chevronBtn);
      let toggleContentelement = $(toggleContent);
      toggleContentelement.hide();

      chevronButton.on("click", () => {
        toggleContentelement.toggle(500);
        if (chevronButton.hasClass("bi-chevron-down")) {
          chevronButton.removeClass("bi-chevron-down");
          chevronButton.addClass("bi-chevron-up");
        } else {
          chevronButton.removeClass("bi-chevron-up");
          chevronButton.addClass("bi-chevron-down");
        }
      });
    }
    footerToggle(".js-chevronBtn", ".js-shopLearn");
    footerToggle(".js-chevronBtn1", ".js-appleWallet");
    footerToggle(".js-chevronBtn2", ".js-account");
    footerToggle(".js-chevronBtn3", ".js-entertainment");
    footerToggle(".js-chevronBtn4", ".js-appleStore");
    footerToggle(".js-chevronBtn5", ".js-forbBusiness");
    footerToggle(".js-chevronBtn6", ".js-forEducation");
    footerToggle(".js-chevronBtn7", ".js-forHealth");
    footerToggle(".js-chevronBtn8", ".js-forGovernment");
    footerToggle(".js-chevronBtn9", ".js-appleValues");
    footerToggle(".js-chevronBtn10", ".js-aboutApple");
  });

  return (
    <div className="footer-wrap">
      <section className="footer-sec-a">
        {footerInfoContent.map((content, index) => {
          const { hasLink, linkUrl, linkText, beforeLinkText, afterLinkText } =
            content;
          return (
            <FooterGeneralInfo
              key={index}
              hasLink={hasLink}
              linkUrl={linkUrl}
              linkText={linkText}
              beforeLinkText={beforeLinkText}
              afterLinkText={afterLinkText}
            />
          );
        })}
      </section>
      <SectionDivider />
      <section className="footer-sec-b   ">
        <div className="footer-nav-wrap row  ">
          <div className="footer-nav-sec p-0 col-md  ">
            {footerData.map((section, index) => (
              <FooterSection key={index} data={section} />
            ))}
          </div>
          <div className="footer-nav-sec p-0 col-md  ">
            {footerData1.map((section, index) => (
              <FooterSection1 key={index} data={section} />
            ))}
          </div>
          <div className="footer-nav-sec p-0 col-md  ">
            {footerData2.map((section, index) => (
              <FooterSection2 key={index} data={section} />
            ))}
          </div>
          <div className="footer-nav-sec p-0 col-md  ">
            {footerData3.map((section, index) => (
              <FooterSection3 key={index} data={section} />
            ))}
          </div>
          <div className="footer-nav-sec p-0 col-md   ">
            {footerData4.map((section, index) => (
              <FooterSection4 key={index} data={section} />
            ))}
          </div>
        </div>
      </section>
      <section className="footer-sec-c">
        <div className="footer-apple-store">
          <p>
            More ways to shop:{" "}
            <Link to="/Apple Store">Find an Apple Store </Link>
            or
            <Link to="/Retailer">other retailer </Link> near you. Or call
            1-800-MY-APPLE.
          </p>
          <SectionDivider />
        </div>
        <div className="container-fluid p-0">
          <div className="footer-legal-wrap row w-100">
            <FooterLegalInfoNav />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterParent;
