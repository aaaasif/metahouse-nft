import React from "react";

import "./Profile.scss";
import logo from "../../assets/abstracts/logo.png";
import profile from "../../assets/images/profile.png";
// import { ReactComponent as Recent } from "../../assets/icons/recent.svg";
import { ReactComponent as Pending } from "../../assets/icons/pending.svg";
import { ReactComponent as Complete } from "../../assets/icons/complete.svg";
import { ReactComponent as Hire } from "../../assets/icons/hire.svg";
import { Link } from "react-router-dom";
import { Button } from "..";

const Profile: React.FC = () => {
  const renderUserProfile = (
    <div className="userProfile mb-30">
      <img src={profile} alt="avatar" className="avatar mb-20" />
      <div>
        <h2 className="mb-10">Kamal nath</h2>
        <p className="mb-20 f-14">kamalnath1505z@gmail.com</p>
        <p className="f-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, iaculis massa id faucibus
          quisque sed molestie parturient amet.
        </p>
      </div>
    </div>
  );

  const renderUserLinks = (
    <div className="userlinks">
      <Link to="/" className="profile_link">
        <Hire />
        <span>Hire for the job </span>
      </Link>
      <Link to="/pending-project" className="profile_link">
        <Pending />
        <span>Pending work info </span>
      </Link>
      <Link to="/completed-project" className="profile_link">
        <Complete />
        <span>Completed job </span>
      </Link>
      <Button>Report issues</Button>
    </div>
  );

  return (
    <div className="profile_container">
      <div className="profile_container_logo">
        <img src={logo} alt="logo" width={150} />
      </div>
      <div className="p-30">
        {renderUserProfile}
        {renderUserLinks}
      </div>
    </div>
  );
};

export default Profile;
