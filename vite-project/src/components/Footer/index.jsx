import {
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import "../Footer/style.css"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid bgNavFoot  " >
          <div className="row text-center text-white d-flex justify-content-center pt-4">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#work" className=" text hover-shadow">
                  Work
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#skills" className="text hover-shadow">
                  Skills
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#about" className="text hover-shadow">
                  About
                </a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#contact" className="text hover-shadow">
                  Contact
                </a>
              </h6>
            </div>
          </div>
          <div className="row d-flex ">
          
          <div className="py-2 text-center d-flex justify-content-center  ">
                  {/* social Icons */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaFacebook className=" text" />
                  </a>

                  <a
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaInstagram className=" text  hover:text-red-600" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaXTwitter className=" text  hover:text-blue-600" />
                  </a>

                  <a
                    href="https://whatsApp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-2"
                  >
                    <FaWhatsapp className=" text  hover:text-green-600" />
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
