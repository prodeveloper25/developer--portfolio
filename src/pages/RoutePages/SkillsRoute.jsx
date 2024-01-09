import { Helmet } from "react-helmet-async";
import Expertise from "../Home/Expertise/Expertise";

const SkillsRoute = () => {
  return (
    <>
      <Helmet>
        <title>Skills - Asratul Hasan Nahid</title>
      </Helmet>
      <Expertise />
    </>
  );
};

export default SkillsRoute;
