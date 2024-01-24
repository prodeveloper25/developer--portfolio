import { Helmet } from "react-helmet-async";
import Services from "../Services/Services";

const ServicesRoute = () => {
  return (
    <div className="my-24">
      <Helmet>
        <title>Services - Asratul Hasan Nahid</title>
      </Helmet>
      <Services></Services>
    </div>
  );
};

export default ServicesRoute;
