import LandingPage from "views/LandingPage/LandingPage.jsx";
import TeamPage from "views/TeamPage/TeamPage.jsx";
import ResourcePage from "views/ResourcePage/ResourcePage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import ContactSuccessPage from "views/ContactPage/ContactSuccessPage.jsx";

var indexRoutes = [
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/resources", name: "ResourcePage", component: ResourcePage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  { path: "/contact/success", name: "ContactSuccessPage", component: ContactSuccessPage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
