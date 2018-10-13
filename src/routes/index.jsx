import LandingPage from "views/LandingPage/LandingPage.jsx";
import TeamPage from "views/TeamPage/TeamPage.jsx";
import ResourcePage from "views/ResourcePage/ResourcePage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import SuccessPage from "views/SuccessPage/SuccessPage.jsx";

var indexRoutes = [
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/resources", name: "ResourcePage", component: ResourcePage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  { path: "/success", name: "SuccessPage", component: SuccessPage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
