import React from "react";

export const Home = () => {
  return (
    <div className="home">
      <h2 style={{ fontSize: "3rem" }}>This is a sample HomePage!</h2>
      <p>
        This is an examle of a homepage with a sidebar. This has been created as
        a part of assignment for the Webenza.
      </p>
      <p>
        We are brand managers and marketers by blood who don't believe in
        selling a product... We believe in selling a benefit to consumers by
        telling them a story!
      </p>
      <div className="buttons">
        <a href="https://www.webenza.com/" target="_blank" rel="noreferrer">
          <button className="portforlioButton">Visit Webenza >></button>
        </a>
        <a
          href="https://shikhar-srivastava.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="portforlioButton">
            View Digital Portfolio >>
          </button>
        </a>
      </div>
    </div>
  );
};
