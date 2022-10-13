import styles from "./index.module.less"
import routes from "../routes"
import {useRoutes, Link} from "react-router-dom"
import React from "react"

function App() {
	const element = useRoutes(routes)
	return (
		<div className={styles.App}>
			<div className={styles.text}>
				create-react-app、React18、React-Router6实战
			</div>
			<div className={styles.nav}>
				<Link to="">首页</Link>
				<Link to="mine">我的</Link>
			</div>
			{element}
		</div>
	)
}

export default App
