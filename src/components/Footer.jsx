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
      <div className="w-full   flex flex-col items-center mt-5">
        <div className="  w-full h-[15vh]">
          <img
            src={footer}
            className=" w-full object-cover content-center h-full rounded-[40%/0%_0%_95%_95%]"
          />
        </div>
        <div className="flex w-full justify-between px-10 items-center border-b-2 pb-5 my-10">
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
            <div className="mt-2">
              <Botton text="Donate" img={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
