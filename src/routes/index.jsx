import LandingPage from "views/LandingPage/LandingPage.jsx";
import TeamPage from "views/TeamPage/TeamPage.jsx";
import ResourcePage from "views/ResourcePage/ResourcePage.jsx";

var indexRoutes = [
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/resources", name: "ResourcePage", component: ResourcePage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
