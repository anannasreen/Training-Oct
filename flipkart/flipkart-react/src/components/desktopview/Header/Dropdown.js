import React from "react";
import notificationIcon from "./../assets/notification.svg";
import customerCareIcon from "./../assets/customerCare.svg";
import advertiseIcon from "./../assets/advertise.svg";
import downloadIcon from "./../assets/download.svg";
import './Header.css'

function DropdownData() {
  return (
    <div className="dropdown">
      <div className="triangle"></div>
      <div className="dropdown-list">
        <ul>
          <li className="dropdown-item">
            <img src={notificationIcon} />
            Notification Preferences
          </li>
          <li className="dropdown-item">
            <img src={customerCareIcon} />
            24x7 Customer Care
          </li>
          <li className="dropdown-item">
            <img src={advertiseIcon} />
            Advertise
          </li>
          <li className="dropdown-item">
            <img src={downloadIcon} />
            Download App
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownData;
