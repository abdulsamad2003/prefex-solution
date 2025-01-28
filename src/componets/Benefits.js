import React from "react";
import "./Benefits.scss";
import { MdAttachMoney } from "react-icons/md";
import prefexTrader from "../assets/prefexTrader.webp";
function Benefits() {
  return (
    <section id="why-us" className="why-us">
      <div className="left-img">
        <img src={prefexTrader} width="100%" height="100%" alt="prefex solution prefex advisor" />
      </div>

      <div className="why-us-content">
        <div className="heading">
          <span className="small-heading para-font">
            <MdAttachMoney color="blue" size={"30px"} />
            <h1 className="main-font">Benefits For You:</h1>
          </span>
          <p className="para-font">
            Enjoy different experiences in every place you visit.
          </p>
          <p className="para-font">
            and discover new and affordable adventures of course.
          </p>
        </div>

        <div className="choose-us-card">
          <div className="card">
            <div className="card-content">
              <h1 className="h-one main-font">
                Complete Security of Capital Preservation
              </h1>
              <p className="para para-font">
                Your investment is safe with our professional traders as they
                have been doing this day in and day out, securely multiplying
                the client's equity.
              </p>
              <p className="para para-font">
                  Risk Management and Money Management.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h1 className="h-one main-font">
                Long Term Solution For a Secure Future
              </h1>
              <p className="para para-font">
                To be par with the markets, our professionals constantly keep
                themselves updated with the changes and technological know how.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h1 className="h-one main-font">
                Advanced Tools, Research and Development
              </h1>
              <p className="para para-font">
                We believe in providing hassle free and convenient tour booking
                options to our guests. Tour booking can be done through our
                different portals which include our Toll Free
              </p>
              <p className="para para-font">
                Research and Analysis on Fundamental and Socio Political factors
                to ensure the capital investment is always working in the right
                direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
