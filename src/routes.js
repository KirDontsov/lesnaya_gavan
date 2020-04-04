import Home from "./pages/Home";
import Galery from "./pages/Galery";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

export const routes = [
	// --------------------------- isNavBar
	{
		id: 1,
		isNavBar: true,
		isExact: true,
		path: "/",
		name: " ",
		className: "logo",
		component: Home
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

	// --------------------------- isFooter

	{
		id: 5,
		isFooter: false,
		isExact: true,
		path: "/",
		name: "  ",
		className: "logo",
		component: Home
	},

	// --------------------------- isMobile

	// --------------------------- 404
	{
		id: 6,
		isExact: true,
		name: "404",
		component: NotFound,
		status: 404
	}
];
