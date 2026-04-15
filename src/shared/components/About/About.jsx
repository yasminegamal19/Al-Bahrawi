import { memo, useEffect } from "react";
import AOS from "aos";
import { MdLock, MdVerified } from "react-icons/md";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import "./About.modules.css";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 about-content">
            <button className="about-btn">
              <BsFillPatchQuestionFill /> {t("about.whyChooseUs")}
            </button>

            <h2 className="main-title">{t("about.title")}</h2>

            <div className="feature">
              <div className="icon">
                <MdLock />
              </div>

              <div>
                <h5>{t("about.features.privacy.title")}</h5>
                <p>{t("about.features.privacy.desc")}</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon">
                <MdVerified />
              </div>

              <div>
                <h5>{t("about.features.accuracy.title")}</h5>
                <p>{t("about.features.accuracy.desc")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 about-images">
            <img src="/about.png" className="img1" alt="about" />
            <img src="/about.png" className="img2" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
