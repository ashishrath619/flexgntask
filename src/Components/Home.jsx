import React from "react";
import taskimg from "../Assests/taskimg.png";
import "./Home.css";
function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col  ">
            <div className="row ">
              <div className="col">
                <div className="text-container ">
                  <h2>
                    Flexagn is a global learning platform that brings kids
                    together through play
                  </h2>

                  <p className="downloadtext">Download our app</p>
                  <div className="logoicon ">
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                      alt=""
                      className="linklogoimg"
                    />
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                      alt=""
                      className="linklogoimg"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={taskimg} alt="taskimg" className="taskimg " />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
