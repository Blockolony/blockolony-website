import LandingPage from "views/LandingPage/LandingPage.jsx";
import TeamPage from "views/TeamPage/TeamPage.jsx";

var indexRoutes = [
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
