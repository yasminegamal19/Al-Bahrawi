import { memo } from "react";
import Home from "../Home/Home";
import About from '../About/About';
import Services from "../Services/Services";
import Stats from "../Stats/Stats";
const Layouts = () => {
  return (
    <div className="layouts">
      <Home />
      <About />
      <Services />
      <Stats />
    </div>
  );
};

export default memo(Layouts);
