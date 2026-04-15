import { memo, useEffect } from "react";
import AOS from "aos";
import { MdLock, MdVerified, MdSecurity, MdTrendingUp } from "react-icons/md";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import "./About.modules.css";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <MdLock />,
      title: t("about.features.privacy.title"),
      desc: t("about.features.privacy.desc"),
    },
    {
      icon: <MdVerified />,
      title: t("about.features.accuracy.title"),
      desc: t("about.features.accuracy.desc"),
    },
    {
      icon: <MdSecurity />,
      title: t("about.features.security.title"),
      desc: t("about.features.security.desc"),
    },
    {
      icon: <MdTrendingUp />,
      title: t("about.features.growth.title"),
      desc: t("about.features.growth.desc"),
    },
  ];

  return (
    <div className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* TEXT */}
          <div className="col-lg-6 col-12 about-content">
            <button className="about-btn">
              <BsFillPatchQuestionFill /> {t("about.whyChooseUs")}
            </button>

            <h2 className="main-title">{t("about.title")}</h2>

            <div className="features-grid">
              {features.map((item, i) => (
                <div className="feature" key={i}>
                  <div className="icon">{item.icon}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-12 about-images px-2">
            <img src="/home.png" className="img1" alt="about" />
            <img src="/about2.png" className="img2" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
