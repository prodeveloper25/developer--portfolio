import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";

const ContactRoute = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Asratul Hasan Nahid</title>
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactRoute;
