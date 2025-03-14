import React, { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./styles.css";
import MarkdownRenderer from "../markdown";

export const ContentView = ({
  heading,
  content,
  buttonText,
  buttonOnClick,
  isMarkdown,
}: {
  heading: string;
  content?: any;
  buttonText?: string;
  isMarkdown?: boolean;
  buttonOnClick?: () => void;
}) => {
  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__text">{heading || ""}</h1>
      </div>
      <div className="container__body">
        <div className="container__body__content">
          {isMarkdown ? (
            <MarkdownRenderer content={content} />
          ) : (
            content
          )}
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
