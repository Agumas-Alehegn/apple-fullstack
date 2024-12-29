import FooterLinks from "./FooterLinks";
function FooterSection({ data }) {
  return (
    <>
      <div className="row">
        <p className="footer-nav-heading col-10 fw-bolder">{data.heading}</p>
        <i
          className={`bi bi-chevron-down col-2 text-end fs-5 d-md-none ${data.chevronClass}`}
        ></i>
      </div>
      <FooterLinks links={data.links} ulClass={data.ulClass} />
    </>
  );
}

export default FooterSection;
