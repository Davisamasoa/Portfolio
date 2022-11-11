import { AppRoutes } from "./routes";

function App() {
	return <AppRoutes />;
}

export default App;

const projects = document.querySelectorAll(".project");

for (let i = 2; i < projects.length; i++) {
	projects[i].style.display = "none";
}
