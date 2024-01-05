import Lottie from "lottie-react";
import contactUsImg from "../../assets/animation/contactUsImg.json";
import { TextInput, Textarea } from "keep-react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const validForm = e.target;
    const name = validForm.from_name.value;
    const email = validForm.from_email.value;
    const messageInput = validForm.message.value;
    if (name === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        background: "red",
        color: "white",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Name is Required",
      });
      return;
    } else if (email === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        background: "red",
        color: "white",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Email is Required",
      });
      return;
    } else if (messageInput === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        background: "red",
        color: "white",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Message is Required",
      });
      return;
    }
    emailjs
      .sendForm(
        `${import.meta.env.VITE_CNT_SERVICES_ID}`,
        `${import.meta.env.VITE_CNT_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_CNT_PUBLIC_KEY}`
      )
      .then(
        () => {
          e.target.reset();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            background: "green",
            color: "white",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Message Has Been Sended",
          });
        },
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            background: "red",
            color: "white",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Please Try Again",
          });
        }
      );
  };
  return (
    <div className="lg:mt-16 md:mt-12 mt-12 lg:mx-0 md:mx-2 mx-4">
      <div className="flex items-center gap-2 lg:mb-6 md:mb-5 mb-3">
        <h2>------</h2>
        <div className="bg-[#bdf8b5] text-[#14a800] px-3 rounded py-1">
          Contact Me
        </div>
      </div>
      <div className="lg:flex md:flex items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-5">
          <div className="lg:w-[560px] w-full">
            <Lottie animationData={contactUsImg}></Lottie>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="lg:text-3xl md:text-2xl text-2xl md:mb-4 lg:mb-6 mb-4 font-semibold">
              Feel Free to Drop{" "}
              <span className="text-[#fc3a40]">Me a Line</span>
            </h2>
            {/* Name Start */}
            <div className="lg:w-3/4 w-full md:mb-3 mb-4 lg:mb-5">
              <p className="mb-1 ml-1">
                Name<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput name="from_name" placeholder="Name" color="gray" />
            </div>
            {/* Name End */}
            {/* Email Start */}
            <div className="lg:w-3/4 w-full md:mb-3 mb-4 lg:mb-5">
              <p className="mb-1 ml-1">
                Email<span className="text-[#fc3a40]">*</span>
              </p>
              <TextInput name="from_email" placeholder="Email" color="gray" />
            </div>
            {/* Email End */}
            {/* Message Start */}
            <div className="lg:w-3/4 w-full md:mb-6 mb-8 lg:mb-10">
              <p className="mb-1 ml-1">
                Message<span className="text-[#fc3a40]">*</span>
              </p>
              <Textarea
                id="comment"
                name="message"
                placeholder="Leave a message..."
                withBg={true}
                color="white"
                border={true}
                rows={4}
              />
            </div>
            {/* Message End */}
            {/* Button Start */}
            <div className="lg:w-3/4 w-full">
              <button className="bg-[#14a800] flex justify-center gap-2 items-center text-white w-full lg:py-3  md:py-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-[#fc3a40] ">
                <FaTelegramPlane className="lg:text-xl text-lg"></FaTelegramPlane>{" "}
                <span>Submit</span>
              </button>
            </div>
            {/* Button End */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
