import React from "react";
import { JobStatusCard } from "../../components";

const PendingProject: React.FC = () => {
  return (
    <div>
      <h1>PENDING WORK INFO</h1>
      <JobStatusCard pending={true} />
    </div>
  );
};

export default PendingProject;
