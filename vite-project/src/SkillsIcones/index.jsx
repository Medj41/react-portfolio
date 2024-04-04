import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function SkillesIcones() {
  return (
    <div className="row d-flex ">
      <div className="py-2 text-center d-flex justify-content-between ">
        {/* social Icons */}
        <div className="  ">
          <div className="d-flex justify-content-around">
            <FaHtml5 className="fs-1 m-2" />
            <FaCss3Alt className="fs-1 m-2"/>
            <FaBootstrap className="fs-1 m-2"/>
          </div>

          <div>
            <TbBrandJavascript className="fs-1 m-2" />
            <FaReact className="fs-1 m-2" />
            <SiVite className="fs-1 m-2" />
          </div>
          <div>
          <SiTailwindcss className="fs-1 m-2" />
          <FaGithub className="fs-1 m-2"/>
          <FaNodeJs className="fs-1 m-2" />
          </div> 

         
        </div>
      </div>
    </div>
  );
}
