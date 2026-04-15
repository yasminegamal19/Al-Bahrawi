import React from "react";
import "./Footer.modules.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer py-5" id="footer">
      <div className="container">
        <div className="content px-2">
          <div className="row">
            <div className="col-xl-4 col-12 text-white-50">
              <div className="img">
                <img src="/لوجو البحراوى.png" alt="logo" />
              </div>

              <p>{t("footer.desc")}
              </p>

              <div className="links d-flex pb-3 gap-3">
                <a>
                  <i className="bi bi-facebook"></i>
                </a>
                <a>
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a>
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-12 text-white-50 footer-links">
              <h5 className="text-uppercase pb-3">{t("footer.quickLinks")}</h5>

              <a href="#about" onClick={(e) => handleFooterClick(e, "about")}>
                {t("footer.about")}
              </a>

              <a
                href="#services"
                onClick={(e) => handleFooterClick(e, "services")}
              >
                {t("footer.services")}
              </a>

              <Link to="/terms">{t("footer.terms")}</Link>
              <Link to="/privacy">{t("footer.privacy")}</Link>
            </div>

            <div className="col-xl-4 col-12 text-white">
              <h5 className="text-uppercase">{t("footer.contact")}</h5>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-telephone-fill"></i>
                <span>+20 107 007 6655</span>
              </div>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-envelope-fill"></i>
                <span>info@albahrawi.com</span>
              </div>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
