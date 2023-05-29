/* eslint-disable react/no-unescaped-entities */
import register from "../assets/register.svg";
import Botton from "../components/Botton";
import { Link as Anchor } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  return (
    <div className="flex w-[100vw]  items-center ">
      <div className="w-1/2 object-cover">
        <img className=" object-cover  h-screen w-screen" src={register} />
      </div>
      <div className="flex flex-col items-center justify-center gap-3  w-1/2 h-screen">
        <h1 className=" text-3xl font-semibold">Welcome back!</h1>
        <p className=" text-center w-[60%] font-extralight">
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form className="flex flex-col w-1/2  justify-center gap-4 ">
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
            <legend className=" mb-1">Password</legend>
            <input
              type="password"
              className=" outline-0 text-black w-full"
              placeholder="************"
            />
            <FontAwesomeIcon icon={faLock} />
          </fieldset>

          <div className="self-center w-full mt-2 capitalize">
            <Botton text="sign in" />
          </div>
          <div className="self-center w-full mt-2 capitalize">
            <Botton text="google" />
          </div>
        </form>
        <p>
          you don't have an account yet?{" "}
          <Anchor to='/signup' className="ml-2 text-dos">Sign up </Anchor>
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
