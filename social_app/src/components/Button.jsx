import React from "react";

const Button = ({ button, buttonName, submit }) => {
  return (
    <button onClick={submit} className={button}>
      {buttonName}
    </button>
  );
};

export default Button;
