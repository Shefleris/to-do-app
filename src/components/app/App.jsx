import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../user/Login";
import Register from "../user/Register";
import LandingPage from "../landingPage/LandingPage";
import ProjectList from "../ProjectList/ProjectList";
import ProjectPage from "../ProjectPage/ProjectPage";
import AddProject from "../addProject/AddProject";
import Header from "../header/Header";

function App() {
	//routing: path="/" should lead to landing only when not signed in, otherwise to dashboard
	//achieve this with useNavigate in landing component?
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage/>} />
					<Route path="/dashboard" element={<ProjectList/>} />
					<Route path="/login" element={<Login onSuccessRedirectRoute="/dashboard" />} />
					<Route path="/register" element={<Register onSuccessRedirectRoute="/dashboard" />} />
					<Route path="/projects/:projectId" element={<ProjectPage />} />
					<Route path="/add-project" element={<AddProject/>}/>
					<Route path="/update-project/:id" element={<AddProject/>}/>
				</Routes>
			</Router>
		</>
	)
}

export default App;