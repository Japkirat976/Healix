import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import BasicInfo from "../pages/BasicInfo";
import Medical from "../pages/Medical";
import Nutrition from "../pages/Nutrition";
import Fitness from "../pages/Fitness";

import HealthSummary from "../pages/HealthSummary";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/onboarding/basic" element={<BasicInfo />} />

      <Route path="/onboarding/medical" element={<Medical />} />

      <Route
        path="/onboarding/nutrition"
        element={<Nutrition />}
      />

      <Route
        path="/onboarding/fitness"
        element={<Fitness />}
      />

      <Route
        path="/health-summary"
        element={<HealthSummary />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default AppRoutes;