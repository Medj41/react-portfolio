import "../Home/style.css";
import SkillesIcones from "../../SkillsIcones";

export default function Home() {
  // openPdf = () => {
  //   window.open('https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/CV.pdf?alt=media&token=4ebbc861-dc0c-4a1a-97e4-a4c7223d0912', '_blank');
  // };
  return (
    <>
      <div className="container mt-3">
        <div className="p-5 mb-4 bg-light rounded-3" id="about">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Hey, I'm Mohamed!</h1>
            <div className="row mb-2">
              <div className="col-md-8 col-sm-12 fs-4">
              <p >
                Originally from Algeria, I've resided in Newcastle for years.
                Currently employed at HMRC, I'm eager to transition into a
                front-end developer role. Recently completing a thorough Front
                End Web Development & UI/UX boot camp with EdX and the
                University of Birmingham, my tenure at HMRC honed my
                problem-solving, detail-oriented, and global communication
                skills, enriching my ability to tackle challenges and analyze
                situations critically. These diverse experiences contribute to
                my versatility as a developer.
              </p>
              <a
              className="btn btn-primary btn-lg"
              type="button"
              href="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/CV.pdf?alt=media&token=4ebbc861-dc0c-4a1a-97e4-a4c7223d0912"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check My CV
            </a>

              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  className="hero-img w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/IMG_2562.jpeg?alt=media&token=482944bb-8f8c-4282-931b-c8b8c4f8256e"
                  alt="Portfolio owners image"
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="p-5 mb-4 bg-light rounded-3 py-0" id="skills">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-center mb-5">My skills </h1>

            <div className="row mb-2">
              <div className="col-md-4 col-sm-12">
                <SkillesIcones />
              </div>
              <p className="col-md-8 col-sm-12 fs-4">
                Through the Bootcamp, I've acquired robust skills in HTML, CSS,
                Bootstrap, JavaScript, jQuery, React, Node.js, ES6, and API
                usage. The challenges and projects have deepened my
                understanding of these technologies, allowing me to build
                responsive and visually appealing interfaces with HTML, CSS, and
                Bootstrap. I've honed my abilities in JavaScript and jQuery for
                dynamic web functionalities, while React has empowered me to
                create interactive UI components. Additionally, I've gained
                proficiency in server-side development with Node.js and
                integrating APIs to enhance application functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="mb-2" id="work">
          <h2 className="display-6 fw-bold text-center">My work</h2>
          <p className="text-center">
            This is a selection of the development work that I have been
            carrying out.{" "}
          </p>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2018.34.jpeg?alt=media&token=26f914a5-0d7a-4ef0-84a5-c8cb6f744a13"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/Accessibilty_Challenge/">
                    Accessibility
                  </a>
                  <p className="card-text">
                    This is a project that has helped me understand
                    accessibility standards while using GIT, HTML & CSS.
                  </p>
                  <a href="https://github.com/Medj41/Accessibilty_Challenge">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/unnamed.jpg?alt=media&token=0c9b0e43-6ea9-4709-9514-7238f0ecd451"
                  className="card-img-top pichieght"
                  alt="An image of Algiers"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/Home-Algeria/">
                    My home town
                  </a>
                  <p className="card-text">
                    One of my very first projects using HTML & CSS to advertise
                    the hidden beauties of my country Algeria.
                  </p>
                  <a href="https://medj41.github.io/Home-Algeria/">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2021.58.jpeg?alt=media&token=880fdddc-b8e7-4ea6-997a-4b36579519b7"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/Accessibilty_Challenge/">
                    Weather Dashboard
                  </a>
                  <p className="card-text">
                  A weather dashboard shows current and forecasted conditions: temperature, precipitation, wind speed, and other meteorological data for easy access.                  </p>
                  <a href="https://github.com/Medj41/weather-dashboard">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2021.34.jpeg?alt=media&token=b85e935c-a9b7-436f-becc-a38635a473ba"
                  className="card-img-top pichieght "
                  alt="UX Design"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/Quiz-challenge-APIs/">Quiz</a>
                  <p className="card-text h-100">
                  This application is designed to test your coding knowledge through a timed quiz with multiple-choice questions
                  </p>
                  <a href="https://github.com/Medj41/Quiz-challenge-APIs">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2022.14.jpeg?alt=media&token=bd7818a3-8dbe-47ee-bae6-697f290dc4c4"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://rootgeorge17.github.io/Movie-Quest/">
                    Movie-Quest
                  </a>
                  <p className="card-text">
                  
Introducing Movie-Quest: Easily search for movies and explore details like cast, release dates, ratings, and watch trailers—all in one place.
                    
                  </p>
                  <a href="https://github.com/RootGeorge17/Movie-Quest">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2022.15.jpeg?alt=media&token=6f9920b9-6298-46e1-8cd7-4f671723b445"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://smart-gadget123.netlify.app">
                    Smart Gadget
                  </a>
                  <p className="card-text">
                  Smart Gadget App: Your ultimate ecommerce destination for the latest tech, from smartphones to gaming consoles, offering a seamless shopping experience.
                  </p>
                  <a href="hhttps://github.com/SKhail/smart-gadget">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/309414384-5b394fc8-de39-4e6e-badc-1778304d0fd2.jpg?alt=media&token=80ac527c-a4b0-4448-87b7-36e5921ca879"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/team-profile-generator/">
                    Team-Profile-Generator
                  </a>
                  <p className="card-text">
                  This App aim to create a webpage showcasing my team's essential information, enabling users to easily access their emails and GitHub profiles.
                  </p>
                  <a href="https://github.com/Medj41/team-profile-generator">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/Image%2004-04-2024%20at%2022.26.jpeg?alt=media&token=d3d5d235-1ed7-4250-9595-c5350589971e"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <a href="https://medj41.github.io/password-generator-/">
                    Password Generator
                  </a>
                  <p className="card-text">
                  The application generates random passwords based on selected criteria, running in the browser with dynamically updated HTML, CSS, and JavaScript code.
                  </p>
                  <a href="https://github.com/Medj41/password-generator-">
                    Git-Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
