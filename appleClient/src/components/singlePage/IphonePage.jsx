import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import "../../css/bootstrap.css";
import "../../css/iphonePage.css";
function IphonePage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data;
        const SingleProduct = productList.filter(
          (product) => product.singleIphone_link === id
        );
        setProduct(SingleProduct);
      })
      .catch(() => console.error("error fetching from server"));
  }, []);
  if (product.length > 0) {
    return (
      <div className="pageWrapper">
        <div className="productsPageWrapper mx-auto">
          <div className="headerWrapper mb-5 container">
            <p className="h1 fw-bolder fs-larger   text-nowrap  ">
              Take a closer look.
            </p>
          </div>
          <div className="productsWrapper">
            {product.map((item, i) => {
              return (
                <div
                  key={i}
                  className="productWrapper text-center d-md-flex justify-content-evenly"
                >
                  <div className="product">
                    <div className="titleWrap">
                      <div className={item.image_size}>
                        <Link className="links" to="">
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
                    </div>
                    <p className="productDescription">
                      {item.product_description}
                    </p>
                    <p className="priceRange">{item.price_range}</p>
                    <div className="btn-Wrapper">
                      <Link
                        to=""
                        className="links moreBtn btn btn-primary rounded-5 px-2 py-1"
                      >
                        {item.product_link}
                      </Link>
                      <Link to="" className="links priceBtn mx-3">
                        {item.price_link}{" "}
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="specWrapper">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <PageNotFound />;
  }
}

export default IphonePage;
