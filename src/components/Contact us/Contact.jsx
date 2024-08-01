import { useContext } from "react";
import UserContext from "../../context/context.js";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Contact = () => {
  const { light, toast } = useContext(UserContext);
  return (
    <div
      className={
        light ? "contact-cont light-contact" : "contact-cont dark-contact"
      }
    >
      <div className="contact-details">
        <h1>Contact Me</h1>
        <h3 style={{ margin: "1rem" }}>Develped by : Yatik Budhrani</h3>
        <h3 style={{ margin: "1rem" }}>
          <span>Email : </span>
          <a href="mailto:budhraniyatik7@gmail.com">
            <MdEmail />
          </a>
        </h3>
        <h3 style={{ margin: "1rem" }}>
          <span>Github : </span>
          <a href="www.github.com/yatikbudhrani" target="_blank">
            <FaGithub />
          </a>
        </h3>
        <h3 style={{ margin: "1rem" }}>
          <span>Facebook : </span>
          <a
            onClick={() => {
              toast.success("Coming Soon!");
            }}
          >
            <FaFacebookSquare />
          </a>
        </h3>
        <h3 style={{ margin: "1rem" }}>
          <span>Instagram : </span>
          <a
            onClick={() => {
              toast.success("Coming Soon!");
            }}
          >
            <ImInstagram />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
