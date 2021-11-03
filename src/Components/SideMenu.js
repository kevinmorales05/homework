import React from "react";
import home from "../assets/img/home.png";
import search from "../assets/img/search.png";
import bell from "../assets/img/bell.png";
import question from "../assets/img/question.png";
import important from "../assets/img/important.png";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <div>
        <div
          style={{
            backgroundColor: "#E7B74B",
            width: "40px",
            height: "40px",
            borderRadius: "40px",
          }}
          className="centered"
        >
          <img src={home} width="15px" height="15px" alt="home icon" />
        </div>
        <div className="centered">
          <img src={search} width="15px" height="15px" alt="home icon" />
        </div>
      </div>

      <div>
        <div className="centered">
          <img src={bell} width="15px" height="15px" alt="home icon" />
        </div>
        <div className="centered">
          <img src={important} width="15px" height="15px" alt="home icon" />
        </div>
        <div className="centered">
          <img src={question} width="15px" height="15px" alt="home icon" />
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "30px",
            height: "30px",
            borderRadius: "30px",
          }}
          className="centered"
        ></div>
      </div>
    </div>
  );
}
