
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import FoodAnalysisPage from "./pages/FoodAnalysisPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


const routes = [
  {
    element: <Layout />,
    // 페이지 추가
    children: [
      { path: "/", element: <PrivateRoute component={<HomePage />} /> },
      { path: "/login", element: <PrivateRoute component={<LoginPage />} /> },
      { path: "/image_analysis", element: <PrivateRoute component={<FoodAnalysisPage />} /> },
      { path: "/profile", element: <PrivateRoute component={<ProfilePage />} /> },
    ],
  },
];

export default routes;
