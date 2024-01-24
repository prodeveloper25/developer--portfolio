import { Helmet } from "react-helmet-async";
import Expertise from "../Home/Expertise/Expertise";

const SkillsRoute = () => {
  return (
    <div className="my-24">
      <Helmet>
        <title>Skills - Asratul Hasan Nahid</title>
      </Helmet>
      <Expertise />
    </div>
  );
};

export default SkillsRoute;
