import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import CalendarPage from "./pages/CalendarPage";
import FoodAnalysisPage from "./pages/FoodAnalysisPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/image_analysis", element: <PrivateRoute component={<FoodAnalysisPage />} /> },
      { path: "/profile", element: <PrivateRoute component={<ProfilePage />} /> },
      { path: "/calendar", element: <PrivateRoute component={<CalendarPage />} /> },
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/image_analysis",
        element: (
          <PrivateRoute>
            <FoodAnalysisPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <RegisterPage />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
