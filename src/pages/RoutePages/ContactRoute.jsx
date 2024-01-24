import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";

const ContactRoute = () => {
  return (
    <div className="my-24">
      <Helmet>
        <title>Contact Us - Asratul Hasan Nahid</title>
      </Helmet>
      <Contact />
    </div>
  );
};

export default ContactRoute;
