import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import HomePage from "pages/HomePage";
import TrackingPage from "pages/TrackingPage";
import DepartmentsPage from "pages/DepartmentsPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
      </Route>
    </Routes>
  );
};
