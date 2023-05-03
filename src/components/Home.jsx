import home from "../assets/Home.svg";
import Botton from "./Botton";
export default function Home() {
  return (
    <div className=" min-h-screen">
      <img src={home} className="w-[90%] absolute inset-x-[5%]  rounded-xl " />
      <div className="w-fit text-white relative inset-x-[18%] -bottom-40">
        <h1 className="text-7xl my-2">Live the emotion of the manga</h1>
        <p className="text-2xl font-thin my-2">Find the perfect manga for you</p>
        <p>#MingaForever 🔥</p>
        <Botton text="Sign In!" />
      </div>
    </div>
  );
}
