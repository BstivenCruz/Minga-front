import logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faVimeo,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
export default function NewRole() {
  return (
    <div className="flex w-[100vw] min-h-screen">
      <div className=" w-[50%]  flex flex-col items-center justify-center text-dos">
        <p className="my-7 font-ligth">Change role to</p>
        <img src={logo} />
        <div className="flex  items-center my-5 w-[80%] p-3 border border-[#E5E5E5] rounded-xl">
          <div>
            <FontAwesomeIcon icon={faTwitterSquare} size="2xl" />
            <FontAwesomeIcon icon={faVimeo} size="2xl" />
            <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" />
          </div>
          <div className="text-left ml-20">
            <h2 className="text-2xl">Join as an Author!</h2>
            <p className=" font-light"> I’m a reader writting a manga</p>
          </div>
        </div>
        <div className="flex  items-center my-5 w-[80%] p-3 border border-[#E5E5E5] rounded-xl">
          <div>
            <FontAwesomeIcon icon={faTwitterSquare} size="2xl" />
            <FontAwesomeIcon icon={faVimeo} size="2xl" />
            <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" />
          </div>
          <div className="text-left ml-20">
            <h2 className="text-2xl">Join as a Company!</h2>
            <p className="font-light">
              {" "}
              I’m a company and I want to publish my comics
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[50%]  bg-role bg-contain bg-center flex flex-col items-center">
        <p className="text-white w-[70%] mt-40 text-3xl">
          Minga.com is the best place to find manga reviews. We’ve been super
          impress by the quality of applicants.
        </p>
        <p className="mt-5 flex self-start ml-40 text-gray-100">
          - Ignacio Borraz
        </p>
      </div>
    </div>
  );
}
