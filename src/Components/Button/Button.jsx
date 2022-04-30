import React from "react";
import "../Button/button.style.css";

const Button = ({
  buttonTitle,
  action,
  actionDetail,
  plusIcon,
  width,
  height,
  ...props
}) => {
  

  return (
    <div>
      <button
        data-testid="testButton"
        {...props}
        onClick={actionDetail}
        type={action}
        style={{
          width: width ?? "100%",
          height: height ?? "100%",
        }}
      >
        <span>{buttonTitle}</span>
      </button>
    </div>
  );
};

export default Button;
