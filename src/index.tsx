import React from "react"
import ReactDOM from "react-dom/client"
import "./index.less"
import App from "./Layout"
import {BrowserRouter as Router} from "react-router-dom"
console.log("当前环境", REACT_ENV)
console.log("构建信息", BUILD_INFO)
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
)
