import {lazy} from "react"
const Mine = lazy(() => import("@/pages/Mine"))
const Home = lazy(() => import("@/pages/Home"))
const Mine1 = lazy(() => import("@/pages/Mine/Mine1"))
const Mine2 = lazy(() => import("@/pages/Mine/Mine2"))
const Page404 = lazy(() => import("@/pages/Page404"))
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
