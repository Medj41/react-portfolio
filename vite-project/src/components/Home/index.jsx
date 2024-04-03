import "../Home/style.css";

export default function Home() {
  return (
    <>
      <div className="container mt-3">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Hey, I'm Larbi!</h1>
            <div className="row mb-2">
              <p className="col-md-8 col-sm-12 fs-4">
                I'm originally from Algeria, a beautiful town in the east of
                Algeria. Ive been living in Newcastle, for the past few years
                and have been getting used to the cold cold weather up there.
                Currently i work for HMRC and i have keen interest to be come a
                front end developer
              </p>
              <div className="col-md-4 col-sm-12">
                <img
                  className="hero-img w-100"
                  src="images/hero-img.png"
                  alt="Portfolio owners image"
                />
              </div>
            </div>

            <a className="btn btn-primary btn-lg" type="button" href="#work">
              Check out my work
            </a>
          </div>
        </div>
      </div>
     
      <div className="container mt-3">
        <div className="mb-2" id="work">
          <h2 className="display-6 fw-bold">My work</h2>
          <p>
            This is a selection of the development work that I have been
            carrying out.{" "}
          </p>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/gamingPC.jpg?alt=media&token=15364b6d-3a9c-448a-ac6d-bcb3a6647284"
                  className="card-img-top pichieght"
                />
                <div className="card-body h-100">
                  <h5 className="card-title">Accessibility</h5>
                  <p className="card-text">
                    This is a project that has helped me understand
                    accessibility standards while using GIT, HTML & CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/gamingPC.jpg?alt=media&token=15364b6d-3a9c-448a-ac6d-bcb3a6647284"
                  className="card-img-top pichieght"
                  alt="An image of Algiers"
                />
                <div className="card-body h-100">
                  <h5 className="card-title">My home town</h5>
                  <p className="card-text">
                    One of my very first projects using HTML & CSS to advertise
                    the hidden beauties of my country Algeria.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/gamingDesktop.jpg?alt=media&token=ac7cf186-662c-4595-9ad0-5b138527daa0"
                  className="card-img-top pichieght"
                  alt="A photo of me, Larbi, the portfolio owner"
                />
                <div className="card-body h-100">
                  <h5 className="card-title">Portfolio Website V1</h5>
                  <p className="card-text">
                    This is my first attempt of building my portfolio website
                    using the grid system
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/smartgadget-369ae.appspot.com/o/newgadgets.jpg?alt=media&token=a2cfc5e3-c27e-41d5-baf8-7015da241c32"
                  className="card-img-top pichieght "
                  alt="UX Design"
                />
                <div className="card-body ">
                  <h5 className="card-title">Coming soon - UX Project</h5>
                  <p className="card-text">
                    An upcoming project that I'm looking very forward to in
                    order to develop my UX skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
