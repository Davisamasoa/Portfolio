import { AboutMe } from "../components/aboutMe";
import { Contact } from "../components/contact";
import Footer from "../components/footer";
import { Home } from "../components/home";
import { NavAside } from "../components/nav&Aside";
import { Projects } from "../components/projects";
import { Link } from "react-router-dom";

export function Default() {
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
