import { AboutMe } from "./components/aboutMe";
import { Contact } from "./components/contact";
import Footer from "./components/footer";
import { Home } from "./components/home";
import { NavAside } from "./components/nav&Aside";
import { Projects } from "./components/projects";

function App() {
	return (
		<>
			<NavAside />
			<Home />
			<AboutMe />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;

const projects = document.querySelectorAll(".project");

for (let i = 2; i < projects.length; i++) {
	projects[i].style.display = "none";
}
