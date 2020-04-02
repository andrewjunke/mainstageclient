import React from "react";
import * as Cookies from "js-cookie";

import "./meeting.css";
import AgoraVideoCall from "../../components/AgoraVideoCall";
import { AGORA_APP_ID } from "../../agora.config";

class Meeting extends React.Component {
  constructor(props) {
    super(props);
    
   
    this.appId = AGORA_APP_ID;
    if (!this.appId) {
      return alert("Get App ID first!");
    }
    this.uid = undefined;
  }

  render() {
    return (
      <div className="wrapper meeting">
        <div className="ag-header">
          <div className="ag-header-lead">
            <img
              className="header-logo"
              src={require("../../assets/images/ag-logo.png")}
              alt=""
            />
            <span>MainSTAGE</span>
          </div>
          <div className="ag-header-msg">
            STAGE:&nbsp;<span id="room-name">{"Our Main Stage"}</span>
          </div>
        </div>
        <div className="ag-main">
          <div className="ag-container">
            <AgoraVideoCall
              videoProfile={"480p_4"}
              channel={"mainstage001"}
              transcode={"interop"}
              attendeeMode={"audience"}
              baseMode={"al"}
              appId={this.appId}
              uid={this.uid}
            />
          </div>
        </div>
        <div className="ag-footer">
          <a className="ag-href" href="https://www.agora.io">
            <span>MainStage</span>
          </a>
          <span>Contact Us: amainstage@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Meeting;
