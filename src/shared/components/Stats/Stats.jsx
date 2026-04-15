import "./Stats.modules.css";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { number: "+2K", text: t("stats.clients") },
    { number: "+5K", text: t("stats.consultations") },
    { number: "+15", text: t("stats.experience") },
  ];

  return (
    <div className="stats">
      <div className="overlay"></div>

      <div className="container content">
        <div className="row g-4 justify-content-center">
          {stats.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="stat-card">
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
