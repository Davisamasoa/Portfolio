import { Default } from "./pages/default";

function App() {
	return <Default />;
}

export default App;

const projects = document.querySelectorAll(".project");

for (let i = 2; i < projects.length; i++) {
	projects[i].style.display = "none";
}
