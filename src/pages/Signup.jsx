import signup from "../assets/signup.svg";
import Botton from "../components/Botton";
import { Link as Anchor } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faCameraRetro, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  return (
    <div className="flex w-[100vw] flex-row-reverse items-center ">
      <div className="w-1/2 object-cover">
        <img
          className=" object-cover content-center h-screen w-screen"
          src={signup}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3  w-1/2 h-screen">
        <h1 className=" text-3xl font-semibold">Welcome back!</h1>
        <p className=" text-center w-[60%] font-extralight">
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form className="flex flex-col w-1/2  justify-center gap-4 h-fit ">
          <label>
            <fieldset className="border flex text-uno rounded-[10px] px-3 pb-2  w-full">
              <legend className="mb-1">Email</legend>
              <input
                className=" text-black outline-0  w-full"
                type="text"
                placeholder="DragonballZ@Krowl.com"
              />
              <FontAwesomeIcon icon={faAt} />
            </fieldset>
          </label>
          <fieldset className="border flex text-uno  rounded-[10px] px-3 pb-2  w-full">
            <legend className=" mb-1">Photo</legend>
            <input
              className=" text-black outline-0 w-full"
              type="text"
              placeholder="Url"
            />
            <FontAwesomeIcon icon={faCameraRetro} />
          </fieldset>
          <fieldset className="border flex text-uno  rounded-[10px] px-3 pb-2  w-full">
            <legend className=" mb-1">Password</legend>
            <input
              type="password"
              className=" outline-0 text-black w-full"
              placeholder="************"
            />
            <FontAwesomeIcon icon={faLock} />
          </fieldset>
          <label>
            <input className="mr-2" type="checkbox" />
            Send notification to my email
          </label>
          <div className="self-center w-full mt-2 capitalize">
            <Botton text="sign up" />
          </div>
          <div className="self-center w-full capitalize">
            <Botton text="google" />
          </div>
        </form>
        <p>
          Already have an account?
          <Anchor to="/signin" className="ml-2 text-dos">
            Log in
          </Anchor>
        </p>
        <p>
          Go back to
          <Anchor to="/" className="ml-2  text-dos">
            home page
          </Anchor>
        </p>
      </div>
    </div>
  );
}
