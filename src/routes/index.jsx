import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
