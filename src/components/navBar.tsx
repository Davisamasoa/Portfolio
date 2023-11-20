import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Nav = () => {
	const [section, setSection] = useState("Home");

	useEffect(() => {}, []);

	return (
		<nav className="left-2/4 fixed bottom-0 translate-x-[-50%] flex justify-center items-center mb-7 text-primaryColor dark:text-darkprimaryColor ">
			<ul className="flex w-fit justify-center text-[25px] border-2 border-transparent bg-secondaryColor dark:bg-darksecondaryColor bg-opacity-40 dark:bg-opacity-50 gap-2 px-3 py-2 rounded-full ">
				<li className="flex items-center justify-center">
					<a
						title="link para a seção principal"
						className={`iconNav transition duration-300 ${
							section == "Home"
								? "bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor"
								: undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor`}
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
							section == "about"
								? "bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor"
								: undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor  dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor`}
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
							section == "skills"
								? "bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor"
								: undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor  dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor`}
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
							section == "project"
								? "bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor"
								: undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor  dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor`}
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
							section == "contact"
								? "bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor"
								: undefined
						}       px-3 py-[5px] rounded-full sm:hover:bg-primaryColor  dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor`}
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
