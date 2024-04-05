import {
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import "../Footer/style.css"
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";



export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid bgNavFoot  " id="contact" >
          <div className="row text-center  d-flex justify-content-center pt-4">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#work" className=" text hover-shadow text-white">
                  Work
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#skills" className="text hover-shadow text-white">
                  Skills
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#about" className="text hover-shadow text-white">
                  About me
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#contact" className="text hover-shadow text-white">
                  Contact
                </a>
              </h6>
            </div>
          </div>
          <div className="row d-flex ">
          
          <div className="py-2 text-center d-flex justify-content-center  ">
                  {/* social Icons */}
                  <a
                    href="mailto:larbidjouama@hotmail.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <MdEmail className=" text  fs-2 icones-footer" />
                  </a>

                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaXTwitter className=" text icones-footer fs-2  hover:text-red-600" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mohamed-djouama-1b3520206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <IoLogoLinkedin  className=" text icones-footer fs-2 hover:text-blue-600" />
                  </a>

                  <a
                    href="https://github.com/Medj41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaGithub  className=" text icones-footer fs-2  hover:text-green-600" />
                  </a>
                </div>
              </div>

          </div>
      

      </footer>

      {/* <NavLink
        to="/"
        classNameNameName={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        portofolio
      </NavLink> */}
      
    </>
  );
}
