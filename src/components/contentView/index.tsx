import React, { ReactElement } from "react";
import "./styles.css";

export const ContentView = ({
  heading,
  content,
  buttonText,
  buttonOnClick,
}: {
  heading: string;
  children?: ReactElement;
  content?: string | ReactElement;
  buttonText?: string;
  buttonOnClick?: () => void;
}) => {
  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__text">{heading || ""}</h1>
      </div>
      <div className="container__body">
        <div className="container__body__content">
          {content}
        </div>
        <div className="container__body__footer">
          <button
            className="container__body__footer__button"
            onClick={buttonOnClick}
          >
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
