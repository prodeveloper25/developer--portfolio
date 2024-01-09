import { Helmet } from "react-helmet-async";
import Services from "../Services/Services";

const ServicesRoute = () => {
  return (
    <>
      <Helmet>
        <title>Services - Asratul Hasan Nahid</title>
      </Helmet>
      <Services></Services>
    </>
  );
};

export default ServicesRoute;
