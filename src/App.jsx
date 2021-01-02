import React from "react";
import {NavLink} from "react-router-dom";
import logo from "./assets/logo.png";
import awardimg from "./assets/award.png";
import persons from "./assets/persons.png";
import machines from "./assets/machines.png";
const App = () => {

  return (

    <>
      <nav className="img-fluid text-center mt-0 pt-0 mx-auto">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </nav>

      <div className="main-body container-fluid">
        <div className="row flex-container">
          <div className="col-md-4 award-section">
            <img src={awardimg} alt="award img" className="award-img" />
          </div>

          <div className="col-md-8 person-section">
            <h6 className="heading-top">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h6>
            <ul className="list-container">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <div>
              <img src={persons} alt="persons" className="img-fluid" />
            </div>
            <p>
              Government of India has awarded the
              <strong>"National Energy Conservation Award 2018" </strong> . Mr.
              G. Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-3">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className="machines-img mt-2">
        <img src={machines} alt="machines pic" className="img-fluid" />
      </div>
      <p
        className="text-center machine-names ml-3"
        style={{ fontSize: "14px" }}
      >
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <div className="hoizontal-line mt-3"></div>
      <h6 className="heading-bottom text-center mt-2">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h6>
      <p className="text-center bottom-text ml-3">
        CHEMICALS & PROCESS <span className="red-vertical-bar">|</span> POWER
        <span className="red-vertical-bar">|</span> WATER & WASTE WATER
        <span className="red-vertical-bar">|</span> OILS & GAS
        <span className="red-vertical-bar">|</span> PHARMA
        <span className="red-vertical-bar">|</span> SUGARS & DISTILLERIES
        <span className="red-vertical-bar">|</span> PAPER & PULP
        <span className="red-vertical-bar">|</span> MARINE & DEFENCE
        <span className="red-vertical-bar">|</span> METAL & MINING
        <span className="red-vertical-bar">|</span> FOOD & BEVERAGE
        <span className="red-vertical-bar">|</span>
        PETROCHEMICAL & REFINERIES <span className="red-vertical-bar">
          |
        </span>
        SOLAR <span className="red-vertical-bar">|</span> BUILDING
        <span className="red-vertical-bar">|</span> HVAC
        <span className="red-vertical-bar">|</span> FIRE FIGHTING
        <span className="red-vertical-bar">|</span> AGRICULTURE & RESIDENTIAL
      </p>

      <footer className="footer">
        <i className="fas fa-phone-alt fa-2x mt-3">
          <sub style={{ fontSize: "15px" }} className="sub_bottom"> Toll free 1800 200 1234 </sub>
        </i>
        <i className="fab fa-facebook fa-2x mt-3">
          <sub style={{ fontSize: "15px" }} className="sub_bottom"> www.facebook.com/cripumps</sub>
        </i>
        <i className="fas fa-globe fa-2x mt-3">
          <sub style={{ fontSize: "15px" }} className="sub_bottom"> www.crigroups.com </sub>
        </i>
      </footer>
    </>
  );
}


export default App;
