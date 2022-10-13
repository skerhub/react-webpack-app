import {useOutlet, Link} from "react-router-dom"
import styles from "./index.module.less"
const Mine = () => {
	const element = useOutlet()
	return (
		<div className={styles.container}>
			<div>我的</div>
			<Link to="">to 1</Link>
			<Link to="mine2">to 2</Link>
			<div>{element}</div>
		</div>
	)
}

export default Mine
