/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as Anchor } from "react-router-dom";

export default function Botton({ text, img, to }) {
  return (
    <Anchor
      to={to}
      className=" bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] text-white px-20 flex items-center justify-center py-2 rounded-md"
    >
      {text} <FontAwesomeIcon icon={img} className="ml-2" />
    </Anchor>
  );
}
