/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Botton({ text, img }) {
  return (
    <button className=" bg-gradient-to-b from-[#F9A8D4] to-[#F472B6]  px-20 py-2 rounded-md my-4	flex items-center justify-between">
      {text} <FontAwesomeIcon icon={img} className="ml-5" />
    </button>
  );
}
