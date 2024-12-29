import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "../../css/bootstrap.css";
import "../../css/iphonePage.css";
import iphone16Pro from "../../assets/iPhone_video/iPhone_2.mp4";
// import { data } from "../../assets/sectionData";
// data;

function Iphone() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch(() => console.log("Error in fetching products from database"));
  }, []);
  // console.log(products);
  return (
    <div className="pageWrapper">
      {/* welcome page*/}
      <div className="welcomePageWrapper 1container">
        {/* welcome page header */}
        <div className="headerWrapper d-md-flex justify-content-between">
          <h1>iPhone</h1>
          <h3 className="align-self-end">Designed to be loved.</h3>
        </div>
        {/* video player */}
        <div className="videoWrapper ratio ratio-16x9">
          <video
            src={iphone16Pro}
            type="video/mp4"
            className="object-fit-scale border rounded-4"
            muted
            loop
            autoPlay
            plays-inline="true"
          ></video>
        </div>
      </div>
      {/* iphone products collection */}
      <div className="productsPageWrapper mx-auto">
        {/* products page header */}
        <div className="headerWrapper d-md-flex container justify-content-between">
          <h2 className="text-nowrap">Explore the lineup.</h2>
          <a className="links align-self-end">
            Compare all models <span className="bi bi-chevron-right"></span>
          </a>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {products.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className="productWrapper list-unstyled text-center "
              >
                <div className={item.image_size}>
                  <Link to="" className="links">
                    <img
                      src={item.product_url}
                      alt={item.product_info}
                      className="productImg align-self-end"
                    />
                  </Link>
                </div>
                {item.product_status ? (
                  <p className="productStatus">{item.product_status}</p>
                ) : (
                  <p className="productStatus invisible">New</p>
                )}
                <h3 className="productTitle">{item.product_name}</h3>
                <p className="productDescription">{item.product_description}</p>
                <p className="priceRange">{item.price_range}</p>
                <Link
                  to={`/iphone/${item.singleIphone_link}`}
                  className="links moreBtn btn btn-primary rounded-5 px-2 py-1"
                >
                  {item.product_link}
                </Link>
                <Link to="" className="links priceBtn mx-3">
                  {item.price_link}
                  <i className="bi bi-chevron-right"></i>
                </Link>
                <hr />
                <div className="SpecsWrap">
                  <div className="spec">
                    {item.intelligence_icon ? (
                      <img src={item.intelligence_icon} alt="icon" />
                    ) : (
                      <p>—</p>
                    )}
                    <p>{item.intelligence_description}</p>
                  </div>
                  <div className="spec">
                    <img src={item.chip_type} />
                    <p>{item.chip_description}</p>
                  </div>
                  <div className="spec">
                    {item.camera_feature ? (
                      <img src={item.camera_feature} />
                    ) : (
                      <p>—</p>
                    )}
                    <p>{item.feature_function}</p>
                  </div>
                  <div className="specDetail">
                    <img src={item.camera_icon} />
                    <p>{item.camera_description1}</p>
                    <p>{item.camera_description2} </p>
                    <p> {item.camera_description3}</p>
                    <p>{item.camera_description4}</p>
                  </div>
                  <div className="spec">
                    <img src={item.battery_icon} />
                    <p>{item.battery_info}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Iphone;
