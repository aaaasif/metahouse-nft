import React from "react";
import { JobStatusCard } from "../../components";

const CompletedProject: React.FC = () => {
  return (
    <div>
      <h1>COMPLETED JOB</h1>
      <JobStatusCard pending={false} />
    </div>
  );
};

export default CompletedProject;
