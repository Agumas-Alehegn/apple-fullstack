import FooterLinks2 from "./FooterLinks2";

function FooterSection2({ data }) {
  return (
    <>
      <div className="row">
        <p className="footer-nav-heading col-10 fw-bolder">{data.heading}</p>
        <i
          className={`bi bi-chevron-down col-2 text-end fs-5 d-md-none ${data.chevronClass}`}
        ></i>
      </div>
      <FooterLinks2 links={data.links} ulClass={data.ulClass} />
    </>
  );
}

export default FooterSection2;
