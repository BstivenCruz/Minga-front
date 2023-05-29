/* eslint-disable react/prop-types */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Nav />
      <div className="min-h-fit flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
