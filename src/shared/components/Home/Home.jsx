import { memo } from "react";
import { useTranslation } from "react-i18next";
import "./Home.modules.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home" id="home">
      <div className="overlay"></div>

      <div className="container content">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-12 text">
            <h1 className="mb-4">{t("home.title")}</h1>

            <h5 className="pb-2">{t("home.desc1")}</h5>
            <h5 className="pb-2">{t("home.desc2")}</h5>

            <div className="links d-flex gap-2 mt-4">
              <button className="btn">{t("home.aboutBtn")}</button>
              <button className="btn secondary">{t("home.consultBtn")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
