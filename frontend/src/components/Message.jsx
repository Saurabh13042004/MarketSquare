/* eslint-disable react/prop-types */
import React from "react";

function Message({ variant, children }) {
  return (
    <>
      <div role="alert" className="alert alert-${variant}">
        <span>{children}</span>
      </div>
    </>
  );
}

Message.defaultProps = {
  variant: "info",
};

export default Message;
