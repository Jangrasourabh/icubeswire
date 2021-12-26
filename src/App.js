import { FaPlay } from "react-icons/fa";


function App() {
  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <div className="video-container">
            <FaPlay className="play-icon"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 position-relative p-0">
          <div className="d-flex justify-content-end">
            <div className="first-text-box">
              <p className="first-heading-box m-0">
                <span className="text-white">Vd</span>x
              </p>
              <p className="first-text-inner-box m-0">
                Vdx is iCubesWire's in house production studio, in the other
                words, it's a mill of ideas to churn out moving visuals
              </p>
            </div>
          </div>
          <div className="joining-dash"></div>
          <div className="d-flex flex-column align-items-end">
            <p className="second-text-box width-first m-0 text-danger">Where</p>
            <p className="second-text-box width-second m-0 text-primary">
              do <span className="second-text-bold text-black">we</span>
            </p>
            <p className="second-text-box width-third m-0 text-info">start ?</p>
            <p className="second-text-inner-box align-self-center m-0">
              We shape your ideas into stories
            </p>
            <p className="second-text-inner-box align-self-center m-0">
              with a mix of Creativity, Inspiration and Design
            </p>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <div className="d-flex align-items-center">
            <div className="planing-image-container bg-danger">
              <img src="/girl 1.png" className="planing-image"></img>
            </div>
            <div className="ps-5">
              <h2 className="planing-heading text-danger">Planning</h2>
              <p className="planing-text m-0 text-muted">
                There is something sketch-y going on here. Our team of creative
                individuals illustrate to give form to our ideas and
                simultaneoulsy work on characters concept design and storyboard
                to get the assests of the video ready.
              </p>
              <ul className="planing-list p-0 m-0">
                <li>Concept Design</li>
                <li>Character Designing</li>
                <li>Story Boarding</li>
                <li>Environment & Background reation</li>
                <li>Direction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <div className="creating-container">
            <div className="creating-image-container">
              <img src="/girl 2.png" className="creating-image"></img>
            </div>
            <h2 className="creating-heading">Creating</h2>
            <p className="creating-text">
              After all the required assests are ready, our team of experts
              begins adding life to them. The illustrations now take the shape
              of scenes and characters after modelling texturing,rigging,
              animation and rendering.
            </p>
            <ul className="creating-list">
              <li>2D Animation</li>
              <li>3D Animation</li>
              <li>3D assests</li>
              <li>Digital Retouching</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <div className="d-flex align-items-center">
            <div className="editing-image-container">
              <img src="/girl 3.png" className="editing-image"></img>
            </div>
            <div className="ps-5">
              <h2 className="editing-heading">Editing</h2>
              <p className="editing-text m-0 text-muted">
                Finally, we place all the images and assests in the correct
                sequence to develop the final scenes. Our team utilises
                cutting-edge software and technology to add the final touches
                and refine the visuals further. Last but not least, we add
                visual effects, sounds and are ready to tell your story to the
                world
              </p>
              <ul className="planing-list p-0 m-0">
                <li>Special Effects</li>
                <li>Lighting</li>
                <li>Compositing</li>
                <li>Colour correction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <div className="hear-container">
            <div className="hear-dash"></div>
            <h2 className="hear-heading mt-5 text-white text-center">
              We'd love to
            </h2>
            <h2 className="hear-heading align-self-end position-relative">
              hear from y<span className="text-white">o</span>u
              <span className="hear-o"></span>
            </h2>
            <p className="hear-text">
              Do you have a crazy idea waiting to take shape? We'd love to
              translate your ideas into a jaw dropping story.Reach out to us on{" "}
              <span className="text-dark">contact@icubeswire.com</span>,and we
              will get in touch with you.
            </p>
            <p className="hear-text">
              Ps: We will keep it <span className="text-dark">brief</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
