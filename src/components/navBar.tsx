import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Nav = () => {
	const [section, setSection] = useState("Home");

	useEffect(() => {}, []);

	return (
		<nav className="left-0 fixed bottom-0  w-full flex justify-center items-center mb-7 text-primaryColor ">
			<ul className="flex w-fit justify-center text-[25px] border-2 border-transparent bg-secondaryColor bg-opacity-50 gap-2 px-3 py-2 rounded-full ">
				<li className="flex items-center justify-center">
					<a
						title="link para a seção principal"
						className={`iconNav transition duration-300 ${
							section == "Home" ? "bg-primaryColor text-bgColor" : undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor sm:hover:text-bgColor`}
						onClick={() => setSection("Home")}
						href="#Home"
					>
						<i className="bi bi-house"></i>
					</a>
				</li>
				<li className="flex items-center justify-center">
					<a
						title="link para a seção sobre mim"
						className={`iconNav transition duration-300 ${
							section == "about" ? "bg-primaryColor text-bgColor" : undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor sm:hover:text-bgColor`}
						onClick={() => setSection("about")}
						href="#aboutMe"
					>
						<i className="bi bi-person" id="user"></i>
					</a>
				</li>
				<li className="flex items-center justify-center">
					<a
						title="link para a seção minhas habilidades"
						className={`iconNav transition duration-300 ${
							section == "skills" ? "bg-primaryColor text-bgColor" : undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor sm:hover:text-bgColor`}
						onClick={() => setSection("skills")}
						href="#skills"
					>
						<i className="bi bi-journal-code"></i>
					</a>
				</li>
				<li className="flex items-center justify-center">
					<a
						title="link para a seção meus projetos"
						className={`iconNav transition duration-300 ${
							section == "project" ? "bg-primaryColor text-bgColor" : undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor sm:hover:text-bgColor`}
						onClick={() => setSection("project")}
						href="#project"
					>
						<i className="bi bi-pc-display"></i>
					</a>
				</li>
				<li className="flex items-center justify-center">
					<a
						title="link para a seção contato"
						className={`iconNav transition duration-300 ${
							section == "contact" ? "bg-primaryColor text-bgColor" : undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor sm:hover:text-bgColor`}
						onClick={() => setSection("contact")}
						href="#contact"
					>
						<i className="bi bi-telephone"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};
