/* eslint-disable react/prop-types */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Main({ children }) {
  return (
    <>
      <Nav />
      <div className="border-black min-h-fit flex justify-center">
        {children}
      </div>
      <Footer />
    </>
  );
}
