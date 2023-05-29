import logo from '../assets/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Nav() {
  return (
    <>
      <nav className='flex justify-between w-screen fixed top-0 px-10 items-center py-5 z-40'>
       <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#f472b6"}} />
        <img src={logo} />
      </nav>
    </>
  );
}
