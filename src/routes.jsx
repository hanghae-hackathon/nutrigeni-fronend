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
        path: "/calendar",
        element: (
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
];

export default routes;
