import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="copyright mb-0 text-white text-center">
              Made <span className="heart">&hearts;</span> by
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https:www.facebook.com/SaroarShahan"}
              >
                Saroar Shahan
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
