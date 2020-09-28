import AOS from "aos";
import "aos/dist/aos.css";

const ani = (time) => {
  return AOS.init({ duration: time });
};
export default ani;
