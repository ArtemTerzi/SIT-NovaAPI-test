import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage"));
const TrackingPage = lazy(() => import("pages/TrackingPage"));
const DepartmentsPage = lazy(() => import("pages/DepartmentsPage"));

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
