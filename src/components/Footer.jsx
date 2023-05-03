import footer from "../assets/Footer.svg";
import logo from "../assets/Logo.svg";
import Botton from "./Botton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faVimeo,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="px-20 flex flex-col items-center">
        <img src={footer} className="  w-[100%] " />
        <div className="flex w-full justify-between px-10 items-center border-b-2 my-10">
          <div>
            <a className="mr-20">Home</a>
            <a>Mangas</a>
          </div>
          <img src={logo} className="ml-10" />
          <div className="w-fit">
            <div className="flex justify-between ">
              <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
              <FontAwesomeIcon icon={faTwitterSquare} size="2xl" />
              <FontAwesomeIcon icon={faVimeo} size="2xl" />
              <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" />
            </div>
            <Botton text="Donate" img={faHeart} />
          </div>
        </div>
      </div>
    </>
  );
}
