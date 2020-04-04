import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Err from "./pages/Err";
import Blog from "./pages/Blog";
import { fetchPopularRepos } from "./api";

// import AboutMob from "./pages_mob/AboutMob";
// import ContactsMob from "./pages_mob/ContactsMob";

export const routes = [
	// --------------------------- isNavBar
	{
		id: 1,
		isNavBar: true,
		isExact: true,
		path: "/",
		name: " ",
		className: "logo",
		component: Home,
		fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
	},
	{
		id: 2,
		isNavBar: true,
		isExact: true,
		path: "/",
		name: "Главная",
		className: "nav-link"
	},
	{
		id: 3,
		isNavBar: true,
		isExact: true,
		path: "/galery",
		name: "Галерея",
		className: "nav-link",
		component: Galery
	},
	{
		id: 4,
		isNavBar: true,
		isExact: true,
		path: "/blog",
		name: "Блог",
		className: "nav-link",
		component: Blog
	},

	// --------------------------- isMobile
	{
		id: 1,
		isMobile: true,
		isExact: true,
		path: "/",
		name: "Рти-Торг",
		className: "logo",
		component: Home
	},

	// --------------------------- isFooter

	{
		id: 6,
		isFooter: false,
		isExact: true,
		path: "/",
		name: "Рти-Торг",
		className: "logo",
		component: Home
	},

	// --------------------------- isMobile

	// --------------------------- 404
	{
		id: 18,
		isExact: true,
		component: Err,
		status: 404
	}
];
