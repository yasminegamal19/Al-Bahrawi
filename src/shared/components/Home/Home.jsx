import { memo } from "react";
import { useTranslation } from "react-i18next";
import "./Home.modules.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home py-5" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 className="mb-4 mt-5">{t("home.title")}</h1>

            <h5 className="pb-2">{t("home.desc1")}</h5>
            <h5 className="pb-2">{t("home.desc2")}</h5>

            <div className="links d-flex gap-2 mt-4">
              <button className="btn">{t("home.aboutBtn")}</button>
              <button className="btn">{t("home.consultBtn")}</button>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img src="/home.png" alt="home" className="home-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
