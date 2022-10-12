import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Joystick, JoystickShape } from "react-joystick-component";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import bgjoy from "./images/bgjoy.png";
import stickview from "./images/stickview.png";
import stickwalk from "./images/stickwalk.png";
import background from "./images/background.png";
import topbar from "./images/topbar.png";
import textholder from "./images/textholder.png";
import optionsbar from "./images/optionsbar.png";
import item from "./images/item.png";
import floor1 from "./images/mats/floor1.png";
import floor2 from "./images/mats/floor2.png";
import floor3 from "./images/mats/floor3.png";
import counter1 from "./images/mats/counter1.png";
import counter2 from "./images/mats/counter2.png";
import counter3 from "./images/mats/counter3.png";
import counter4 from "./images/mats/counter4.png";
import back1 from "./images/mats/back1.png";
import back2 from "./images/mats/back2.png";
import back3 from "./images/mats/back3.png";
import back4 from "./images/mats/back4.png";
import back5 from "./images/mats/back5.png";
import counter21 from "./images/mats/counter21.png";
import counter22 from "./images/mats/counter22.png";
import counter23 from "./images/mats/counter23.png";
import counter24 from "./images/mats/counter24.png";
import chromefin from "./images/mats/chromefin.png";
import blackfin from "./images/mats/blackfin.png";
import escaleras from "./images/escaleras.png";
import appliancesb from "./images/appliancesb.png";
import appliancesp from "./images/appliancesp.png";
import faucet1 from "./images/mats/faucet1.png";
import faucet2 from "./images/mats/faucet2.png";
import faucet3 from "./images/mats/faucet3.png";
import faucet4 from "./images/mats/faucet4.png";
import shower1 from "./images/mats/shower1.png";
import shower2 from "./images/mats/shower2.png";
import sink1 from "./images/mats/sink1.png";
import sink2 from "./images/mats/sink2.png";
import url from "socket.io-client/lib/url";
let socket = null;
var wx, wy, vx, vy;
var option;
var selection;
var level = true;
function App() {
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState("");
  const location = useLocation();
  const [showIf, setShowIf] = useState(true);
  const [showCt, setShowCt] = useState(false);
  const [showBk, setShowBk] = useState(false);
  const [showPf, setShowPf] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showBCt, setShowBCt] = useState(false);
  const [showBBk, setShowBBk] = useState(false);
  const [showBFt, setShowBFt] = useState(false);
  const [showPwFt, setShowPwFt] = useState(false);
  const [showSpace, setShowSpace] = useState(false);
  const [showSpace2, setShowSpace2] = useState(false);
  const navigate = useNavigate();
  function mostrar() {
    if (level) {
      navigate("/roof");
      setShowIf(false);
      setShowCt(false);
      setShowBk(false);
      setShowPf(false);
      setShowApp(false);
      setShowBCt(false);
      setShowBBk(false);
      setShowBFt(false);
      setShowPwFt(false);
      setShowSpace(false);
      setShowSpace2(false);
      level = false;
    } else {
      navigate("/interiorflooring");
      setShowIf(true);
      setShowCt(false);
      setShowBk(false);
      setShowPf(false);
      setShowApp(false);
      setShowBCt(false);
      setShowBBk(false);
      setShowBFt(false);
      setShowPwFt(false);
      setShowSpace(false);
      setShowSpace2(false);
      level = true;
    }
  }
  useEffect(() => {
    let url = "url:000.000.0.0"
    
    socket = io("http://"+url+":3001")
    socket.on("chatMessage", (msg) => {
      switch (msg.slice(6)) {
        case "Fuera":
          if (level) {
            navigate("/interiorflooring");
            setShowIf(true);
            setShowCt(false);
            setShowBk(false);
            setShowPf(false);
            setShowApp(false);
            setShowBCt(false);
            setShowBBk(false);
            setShowBFt(false);
            setShowPwFt(false);
            setShowSpace(false);
            setShowSpace2(false);
            socket.emit(
              "chatMessage",
              "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
            );
          }
          break;
        case "Cocina":
          navigate("/interiorflooring");
          setShowIf(true);
          setShowCt(true);
          setShowBk(true);
          setShowPf(true);
          setShowApp(true);
          setShowBCt(false);
          setShowBBk(false);
          setShowBFt(false);
          setShowPwFt(false);
          setShowSpace(false);
          setShowSpace2(false);
          socket.emit(
            "chatMessage",
            "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
          );
          break;
        case "Appliances":
          navigate("/interiorflooring");
          setShowIf(true);
          setShowCt(false);
          setShowBk(false);
          setShowPf(false);
          setShowApp(true);
          setShowBCt(false);
          setShowBBk(false);
          setShowBFt(false);
          setShowPwFt(false);
          setShowSpace(true);
          setShowSpace2(false);
          socket.emit(
            "chatMessage",
            "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
          );
          break;
        case "Baño":
          navigate("/interiorflooring");
          setShowIf(true);
          setShowCt(false);
          setShowBk(false);
          setShowPf(false);
          setShowApp(false);
          setShowBCt(true);
          setShowBBk(true);
          setShowBFt(true);
          setShowPwFt(false);
          setShowSpace(false);
          setShowSpace2(true);
          socket.emit(
            "chatMessage",
            "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
          );
          break;
        case "Baños":
          navigate("/interiorflooring");
          setShowIf(true);
          setShowCt(false);
          setShowBk(false);
          setShowPf(false);
          setShowApp(false);
          setShowBCt(true);
          setShowBBk(true);
          setShowBFt(false);
          setShowPwFt(true);
          setShowSpace(false);
          setShowSpace2(true);
          socket.emit(
            "chatMessage",
            "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
          );
          break;
      }
    });
  }, []);
  useEffect(() => {
    switch (location.pathname) {
      case "/roof":
        setSelection("Roof");
        break;
      case "/interiorflooring":
        option = "interiorflooring";
        setSelection("Interior Flooring");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/countertop":
        option = "countertop";
        setSelection("Countertop");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/backsplash":
        option = "backsplash";
        setSelection("Backsplash");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/plumbingfixtures":
        option = "plumbingfixtures";
        setSelection("Plumbing Fixtures");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/appliances":
        option = "appliances";
        setSelection("Appliances");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/bathroomcountertop":
        option = "bathroomcountertop";
        setSelection("Bathroom Countertop");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/bathroombacksplash":
        option = "bathroombacksplash";
        setSelection("Bathroom Backsplash");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/bathroomfixtures":
        option = "bathroomfixtures";
        setSelection("Bathroom Fixtures");
        socket.emit("chatMessage", "msg," + option);
        break;
      case "/powderfixtures":
        option = "powderfixtures";
        setSelection("Powder Fixtures");
        socket.emit("chatMessage", "msg," + option);
        break;
    }
    console.log(location.pathname);
  }, [location]);
  function handleWalk(stick) {
    wx = stick.x;
    wy = stick.y;
    socket.emit(
      "chatMessage",
      "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
    );
  }
  function handleView(stick) {
    vx = stick.x;
    vy = stick.y;
    socket.emit(
      "chatMessage",
      "msg," + "Walk," + wy + "," + wx + "," + vy + "," + vx
    );
  }
  function handleStop(stick) {
    socket.emit("chatMessage", "msg," + "Stop,0,0,0,0");
    wx = 0;
    wy = 0;
    vx = 0;
    vy = 0;
  }
  return (
    <div>
      <div className="interfacecontainer">
        <img className="backgroundclass" src={background} />
        <img className="topbarclass" src={topbar} />
        <img className="textholderclassbg" src={textholder} />
        <div className="textholderclass">
          <p className="textholdertext">{selection}</p>
        </div>
        <img className="optionsbarclass" src={optionsbar} />
      </div>
      <div className="variableselector">
        <div className="overflo">
          <nav>
            <ul>
              <li className={`${showSpace ? "show" : "hide"}`}>
                <Link to="#"></Link>
              </li>
              <li className={`${showIf ? "show" : "hide"}`}>
                <Link to="/interiorflooring">INTERIOR FLOORING</Link>
              </li>
              <li className={`${showSpace2 ? "show" : "hide"}`}>
                <Link to="#"></Link>
              </li>
              <li className={`${showCt ? "show" : "hide"}`}>
                <Link to="/countertop">COUNTERTOP</Link>
              </li>
              <li className={`${showBk ? "show" : "hide"}`}>
                <Link to="/backsplash">BACKSPLASH</Link>
              </li>
              <li className={`${showPf ? "show" : "hide"}`}>
                <Link to="/plumbingfixtures">PLUMBING FIXTURES</Link>
              </li>
              <li className={`${showSpace ? "show" : "hide"}`}>
                <Link to="#"></Link>
              </li>
              <li className={`${showApp ? "show" : "hide"}`}>
                <Link to="/appliances">APPLIANCES</Link>
              </li>
              <li className={`${showBCt ? "show" : "hide"}`}>
                <Link to="/bathroomcountertop">
                  BATHROOM <br />
                  COUNTERTOP
                </Link>
              </li>
              <li className={`${showBBk ? "show" : "hide"}`}>
                <Link to="/bathroombacksplash">
                  BATHROOM <br />
                  BACKSPLASH
                </Link>
              </li>
              <li className={`${showBFt ? "show" : "hide"}`}>
                <Link to="/bathroomfixtures">
                  BATHROOM <br />
                  FIXTURES
                </Link>
              </li>
              <li className={`${showPwFt ? "show" : "hide"}`}>
                <Link to="/powderfixtures">
                  POWDER <br />
                  FIXTURES
                </Link>
              </li>
              <li className={`${showSpace ? "show" : "hide"}`}>
                <Link to="#"></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="variantsselector">
        <Routes>
          <Route exact path="/" element={<div></div>} />
          <Route
            exact
            path="/interiorflooring"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={floor1} />
                      <p className="varianttitle">Option A</p>
                      <span className="variantdescription">
                        Interceramic,
                        <br />
                        Rainforest Gray
                        <br />
                        20 x 60 cm
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={floor2} />
                      <p className="varianttitle">Option B</p>
                      <span className="variantdescription">
                        Interceramic,
                        <br />
                        Rainforest Nogal
                        <br />
                        20 x 60 cm
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={floor3} />
                      <p className="varianttitle">Option C</p>
                      <span className="variantdescription">
                        Interceramic,
                        <br />
                        Rainforest Taupe
                        <br />
                        20 x 60 cm
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/countertop"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter1} />
                      <p className="varianttitle">Option A</p>
                      <span className="variantdescription">
                        Caesarstone,
                        <br />
                        Pure White
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter2} />
                      <p className="varianttitle">Option B</p>
                      <span className="variantdescription">
                        Caesarstone,
                        <br />
                        Blanco Drift
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter3} />
                      <p className="varianttitle">Option C</p>
                      <span className="variantdescription">
                        Caesarstone,
                        <br />
                        Vanilla Noir
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "d")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter4} />
                      <p className="varianttitle">Upgrade Op.</p>
                      <span className="variantdescription">
                        Caesarstone,
                        <br />
                        Calacatta Nuvo
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/backsplash"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back1} />
                      <p className="varianttitle">Option A</p>
                      <span className="variantdescription">
                        Interceramic, Epoca
                        <br />
                        Classic Helios
                        <br />
                        8" x 8"
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back2} />
                      <p className="varianttitle">Option B</p>
                      <span className="variantdescription">
                        FT Mosaic,
                        <br />
                        Ceramic 8" x 8"
                        <br />
                        BoldBrick,
                        <br />
                        Black & White
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back3} />
                      <p className="varianttitle">Option C</p>
                      <span className="variantdescription">
                        Interceramic,
                        <br />
                        Form 8" x 8"
                        <br />
                        Marlo
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/plumbingfixtures"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter21} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option A</p>
                      <span className="variantdescription">
                        Moen, Belfield
                        <br />
                        High Arc Pulldown
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter22} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option B</p>
                      <span className="variantdescription">
                        Moen, Align
                        <br />
                        One-Handle
                        <br />
                        High Arc Pulldown
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter23} />
                      <p className="varianttitle">Sink Option A</p>
                      <span className="variantdescription">
                        Moen, 1800 series
                        <br />
                        Single Bowl
                        <br />
                        21" x 18"
                        <br />
                        Stainless Steel
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "d")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter24} />
                      <p className="varianttitle">Sink Option B.</p>
                      <span className="variantdescription">
                        Moen, 1800 series
                        <br />
                        Double Bowl
                        <br />
                        31.75" x 20.5"
                        <br />
                        Stainless Steel
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/appliances"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcontover"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={appliancesb} />
                      <p className="varianttitle2">Appliances Standard</p>
                      <span className="variantdescription2">
                        GE Refrigerator, French Door w/ Bottom Freezer, 18
                        cu.ft.
                        <br />
                        GE Gas Range & GE Vent Hood Stainless Steel
                        <br />
                        GE Microwave 1.6 cu.ft. Stainless Steel
                        <br />
                        GE Dishwasher Stainless Steel
                        <br />
                        GE Stack Washer & Electric Dryer 2.3 cu.ft Washer & 4.4
                        cu.ft. Dryer
                      </span>
                    </li>
                    <li
                      className="itemcontover"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={appliancesp} />
                      <p className="varianttitle2">
                        Appliances (Profile Upgrade)
                      </p>
                      <span className="variantdescription2">
                        GE Profile French Door w/ Bottom Freezer 22.1 FT
                        <br />
                        GE Profile Gas Range & GE Profile Vent Hood Stainless
                        Steel
                        <br />
                        GE Profile Microwave 1.6 ft3 Stainless Steel
                        <br />
                        GE Profile Dishwasher Stainless Steel
                        <br />
                        GE Front Load Washer 4.8 cu.ft <br />
                        GE Front Load Electric Dryer with steam 7.8 cu.ft.
                        <br />
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/bathroomcountertop"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter1} />
                      <p className="varianttitle">Base Option</p>
                      <span className="variantdescription">
                        Caesarstone,
                        <br />
                        Pure White
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={counter4} />
                      <p className="varianttitle">Upgrade Option</p>
                      <span className="variantdescription">
                        Caesarstone
                        <br />
                        Calacatta Nuvo
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/bathroombacksplash"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back1} />
                      <p className="varianttitle">Option A</p>
                      <span className="variantdescription">
                        Interceramic, Epoca
                        <br />
                        Classic Helios
                        <br />
                        8" x 8"
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back4} />
                      <p className="varianttitle">Option B</p>
                      <span className="variantdescription">
                        FT Mosaic
                        <br />
                        Ceramic Jardin
                        <br />
                        8" x 8"
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={back5} />
                      <p className="varianttitle">Option C</p>
                      <span className="variantdescription">
                        FT Mosaic
                        <br />
                        Ceramic Quatrefoil
                        <br />
                        8" x 8"
                        <br />
                        White & French blue
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/bathroomfixtures"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={faucet1} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option A</p>
                      <span className="variantdescription">
                        Moen, Cia
                        <br />
                        Two-Handle
                        <br />
                        Bathroom Faucet
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={faucet2} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option B</p>
                      <span className="variantdescription">
                        Moen, Gibson
                        <br />
                        Two-Handle
                        <br />
                        High Arc Bathroom
                        <br />
                        Faucet
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={shower1} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "c,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "c,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Shower Option B</p>
                      <span className="variantdescription">
                        Moen, Cia
                        <br />
                        Posi-Temp
                        <br />
                        Shower
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "d")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={shower2} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "d,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "d,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Shower Option B</p>
                      <span className="variantdescription">
                        Moen, Gibson
                        <br />
                        Posi-Temp
                        <br />
                        Ecoperformance
                        <br />
                        Shower
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
          <Route
            exact
            path="/powderfixtures"
            element={
              <div>
                <nav>
                  <ul>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "a")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={faucet3} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "a,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option A</p>
                      <span className="variantdescription">
                        Novatto, Kennedy
                        <br />
                        Two-Handle
                        <br />
                        wall mount
                        <br />
                        (Standard)
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "b")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={faucet4} />
                      <img
                        className="chrome"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,chrome"
                          )
                        }
                        src={chromefin}
                      />
                      <img
                        className="black"
                        onClick={() =>
                          socket.emit(
                            "chatMessage",
                            "msg," + option + "," + "b,black"
                          )
                        }
                        src={blackfin}
                      />
                      <p className="varianttitle">Faucet Option B</p>
                      <span className="variantdescription">
                        Moen, Arris
                        <br />
                        Two-Handle
                        <br />
                        wall mount
                        <br />
                        (Upgrade)
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "c")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={sink1} />
                      <p className="varianttitle">Sink Option B</p>
                      <span className="variantdescription">
                        Kohler, Vox
                        <br />
                        Rectangle vessel
                        <br />
                        sink, White
                        <br />
                        22-5/8" x 16-1/8" x
                        <br />
                        3-1/4" H
                      </span>
                    </li>
                    <li
                      className="itemcont"
                      onClick={() =>
                        socket.emit("chatMessage", "msg," + option + "," + "d")
                      }
                    >
                      <img className="itemclass" src={item} />
                      <img className="itemimage" src={sink2} />
                      <p className="varianttitle">Sink Option B</p>
                      <span className="variantdescription">
                        Kohler, Carillon
                        <br />
                        Rectangle vessel
                        <br />
                        sink, Black
                        <br />
                        21-1/8" x 14-9/16" x 6-1/8" H
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          />
        </Routes>
      </div>
      <div className="joycontainer">
        <div className="joycontainer_walk">
          <Joystick
            size={window.innerHeight / 3}
            sticky={false}
            baseImage={bgjoy}
            baseShape={JoystickShape.Square}
            stickShape={JoystickShape.Square}
            stickImage={stickwalk}
            move={handleWalk}
            stop={handleStop}
          ></Joystick>
        </div>
        <div className="joycontainer_view">
          <Joystick
            size={window.innerHeight / 3}
            sticky={false}
            baseImage={bgjoy}
            baseShape={JoystickShape.Square}
            stickShape={JoystickShape.Square}
            stickImage={stickview}
            move={handleView}
            stop={handleStop}
          ></Joystick>
        </div>
        <img
          src={escaleras}
          className="escalerasClass"
          onClick={() =>
            socket.emit("chatMessage", "msg," + "level") && mostrar()
          }
        />
      </div>
    </div>
  );
}
export default App;
