import styles from "./index.module.less"
import routes from "../routes"
import {useRoutes, Link} from "react-router-dom"
import {Suspense} from "react"
function App() {
	const element = useRoutes(routes)
	return (
		<div className={styles.App}>
			<div className={styles.text}>
				webpack配置操作
			</div>
			<div className={styles.nav}>
				<Link to="">首页</Link>
				<Link to="mine">我的</Link>
			</div>
			<Suspense fallback={<div>加载中...</div>}>
				{element}
			</Suspense>
		</div>
	)
}

export default App
