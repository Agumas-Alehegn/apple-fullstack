import React from "react";
import "../../css/bootstrap.css";
function PageNotFound() {
  return (
    <div className="container text-center py-5 mt-5 ">
      <h1 className="text-secondary my-5">404 </h1>
      <h2>The page you're looking for could'nt be found.</h2>
      <p>
        Go Back to the{" "}
        <a className="text-decoration-none link-success" href="/">
          Home page
        </a>
      </p>
    </div>
  );
}

export default PageNotFound;
