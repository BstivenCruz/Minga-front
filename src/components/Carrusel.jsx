import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Carrusel() {
  return (
    <>
      <div className="  mx-20 rounded-2xl  bg-uno flex justify-around items-center px-10 h-[35vh] my-10">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          size="xl"
          style={{ color: "#ffffff" }}
        />
        <img
          src={img2}
          className="w-fit h-[120%] relative -top-[10%]  max-w-screen-sm"
        />
        <img src={img1} className="relative -top-10" />
        <div className=" max-w-[30%] my-10 ">
          <h2 className="text-3xl mb-5">Shonen</h2>
          <p>
            Is the manga that is aimed at adolescent boys. They are series with
            large amounts of action, in which humorous situations often occur.
            The camaraderie between members of a collective or a combat team
            stands out.
          </p>
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </div>
    </>
  );
}
