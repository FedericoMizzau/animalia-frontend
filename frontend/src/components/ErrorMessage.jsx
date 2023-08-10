import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="container-fluid">
      <div className="row msg-error bg-danger mx-auto mt-1">
        <div className="col-8">
          <span className="">{message}</span>
        </div>
        <div className="col-4 align-self-center">
          <i className="bi bi-exclamation-octagon"></i>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
