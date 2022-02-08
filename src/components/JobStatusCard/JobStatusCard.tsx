import React from "react";
import "./JobStatusCard.scss";
import profile from "../../assets/images/profile.png";
import { Button } from "..";

interface JobStatusProps {
  pending: boolean;
}

const JobStatusCard: React.FC<JobStatusProps> = ({ pending }) => {
  return (
    <div className="job_card_wrapper">
      <div className="job_card">
        <div className="job_card_grid">
          <img src={profile} alt="avatar" width={40} height={40} className="avatar" />
          <div className="card_content">
            <h3>Hirer address : koverkal2562@gmail.com</h3>
            <div className="card_content-details mt-20">
              <h5>Title</h5>
              <p className="f-14 mt-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, iaculis massa id
                faucibus quisque sed molestie parturient amet. Arcu pharetra nibh sed id orci, sed
                lorem enim. Libero eget ipsum lectus ac egestas sit. Malesuada amet, sed ut nisl.
              </p>
              {pending && (
                <div className="mt-20">
                  <Button variant="secondary">Upload Files</Button>
                </div>
              )}
            </div>
            {pending && (
              <div className="mt-30">
                <Button>Finish Job</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatusCard;
