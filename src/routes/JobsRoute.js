import { Route, Routes } from "react-router-dom";

import Jobs from "../pages/jobs";
import ViewJobs from "../pages/jobs/view";

export function JobsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Jobs />} />
      <Route path="/:id" element={<ViewJobs />} />
    </Routes>
  );
}
