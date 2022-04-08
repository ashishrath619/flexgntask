import React from "react";
import "./Aboutus.css";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import personsone from "../Assests/onep.png";
import twop from "../Assests/twop.png";
import threep from "../Assests/threep.png";

import link from "../Assests/link.png";
import fb from "../Assests/fb.png";
import tw from "../Assests/tw.png";
import ins from "../Assests/ins.png";

import Tasklog from "../Assests/tasklogo.png";
import HeaderComponent from "./Header";
function Aboutus() {
  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        A chief technology officer (CTO) is responsible for overseeing the
        planning and development of technology for a company's customers,
        vendors, and internal employees. The goal is to improve productivity and
        business output and reduce the cost and time
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 md-">
            <h2 className="heading-aboutus">About us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <br />

            <h3>
              Flexagn is designed to make daily learning intuitive, self-driven
              and fun!
            </h3>
            <br />

            <p>
              flexagn started with a dream to make daily learning a habit for
              kids As parents,we resonated well with the pain points of many
              parents for inspired learning cs,grade-driven learning.We believe
              that learning can be made much more fun, inspiring and interactive
              cia gameplay.The found team has year of combined collaborative
              social gamming and ed-tech experience and is on a missionn to
              bring the best fusion out of eduction and games for kids.
            </p>
          </div>
          <div className="col">
            <img src={Tasklog} alt="tasklog" className="tasklog" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row card-main">
              <div className="col">
                <OverlayTrigger
                  placement="bottom"
                  overlay={popover}
                  delay={{ show: 250, hide: 400 }}
                >
                  <div className="imgcard-container ">
                    <div className="imgsection">
                      <img
                        src={personsone}
                        alt="personsone"
                        className="personsone"
                      />
                      <div className="carddetails text-center">
                        <p className="text-center">
                          Alexzender Gomez
                          <br />
                          CTO & Founder
                        </p>
                      </div>
                      <div className="iconimage">
                        <img src={link} alt="link" className="iconimagelogo" />
                        <img src={fb} alt="fb" className="iconimagelogo" />
                        <img src={tw} alt="tw" className="iconimagelogo" />
                        <img src={ins} alt="ins" className="iconimagelogo" />
                      </div>
                    </div>
                  </div>
                </OverlayTrigger>
              </div>
              <div className="col">
                <OverlayTrigger
                  placement="bottom"
                  overlay={popover}
                  delay={{ show: 250, hide: 400 }}
                >
                  <div className="imgcard-container ">
                    <div className="imgsection">
                      <img src={twop} alt="personsone" className="personsone" />
                      <div className="carddetails text-center">
                        <p className="text-center">
                          Alexzender Gomez
                          <br />
                          CTO & Founder
                        </p>
                      </div>
                      <div className="iconimage">
                        <img src={link} alt="link" className="iconimagelogo" />
                        <img src={fb} alt="fb" className="iconimagelogo" />
                        <img src={tw} alt="tw" className="iconimagelogo" />
                        <img src={ins} alt="ins" className="iconimagelogo" />
                      </div>
                    </div>
                  </div>
                </OverlayTrigger>
              </div>

              <div className="col">
                <OverlayTrigger
                  placement="bottom"
                  overlay={popover}
                  delay={{ show: 250, hide: 400 }}
                >
                  <div className="imgcard-container ">
                    <div className="imgsection">
                      <img src={threep} alt="threep" className="personsone" />
                      <div className="carddetails text-center">
                        <p className="text-center">
                          Alexzender Gomez
                          <br />
                          CTO & Founder
                        </p>
                      </div>
                      <div className="iconimage">
                        <img src={link} alt="link" className="iconimagelogo" />
                        <img src={fb} alt="fb" className="iconimagelogo" />
                        <img src={tw} alt="tw" className="iconimagelogo" />
                        <img src={ins} alt="ins" className="iconimagelogo" />
                      </div>
                    </div>
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
