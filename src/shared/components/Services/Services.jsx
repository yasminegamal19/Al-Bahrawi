import { memo } from "react";
import "./Services.modules.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: "bi-receipt",
      title: t("services.items.tax.title"),
      desc: t("services.items.tax.desc"),
    },
    {
      icon: "bi-calculator",
      title: t("services.items.accounting.title"),
      desc: t("services.items.accounting.desc"),
    },
    {
      icon: "bi-building",
      title: t("services.items.companies.title"),
      desc: t("services.items.companies.desc"),
    },
    {
      icon: "bi-clipboard-check",
      title: t("services.items.audit.title"),
      desc: t("services.items.audit.desc"),
    },
  ];

  return (
    <div className="services" id="services">
      {/* overlay */}
      <div className="overlay"></div>

      <div className="container content">
        <div className="text-center mb-5">
          <h2 className="title">{t("services.title")}</h2>
          <p className="subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="service-card">
                <div className="icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Services);
