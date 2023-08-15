import React from "react";

const Header = () => {
  return (
    <nav className="navbar header shadow-small opacity-chg-low">
      <div className="container-fluid justify-content-center">
        <div className="row">
          <div className="col-auto navbar-text align-middle">
            <h1 className="main-title m-0">
              Animalia <i className="bi bi-clipboard-heart"></i>
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
