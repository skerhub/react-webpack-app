import Mine from "../pages/Mine"
import Home from "../pages/Home"
import Mine1 from "../pages/Mine/Mine1"
import Mine2 from "../pages/Mine/Mine2"
import Page404 from "../pages/Page404"
const routes = [
	{
		path: "",
		element: <Home />,
	},
	{
		path: "mine",
		element: <Mine />,
		children: [
			{
				path: "",
				element: <Mine1 />,
			},
			{
				path: "mine2",
				element: <Mine2 />,
			},
			{
				path: "*",
				element: <Page404 />,
			},
		],
	},
	{
		path: "*",
		element: <Page404 />,
	},
]
export default routes
