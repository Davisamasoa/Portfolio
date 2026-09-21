"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
	{ id: "Home", href: "#Home", icon: "bi-house", label: "Início" },
	{ id: "about", href: "#aboutMe", icon: "bi-person", label: "Sobre mim" },
	{ id: "skills", href: "#skills", icon: "bi-stars", label: "Habilidades" },
	{ id: "project", href: "#project", icon: "bi-grid-1x2", label: "Projetos" },
	{ id: "contact", href: "#contact", icon: "bi-chat-dots", label: "Contato" },
];

export const Nav = () => {
	const [section, setSection] = useState("Home");

	const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
		event.preventDefault();
		setSection(id);
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
		history.pushState(null, "", href);
	};

	return (
		<div
			className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-[100dvh] items-end justify-center pb-[calc(1.5rem+env(safe-area-inset-bottom))] transform-gpu"
			aria-hidden="false"
		>
			<motion.nav
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="pointer-events-auto"
			>
				<ul className="glass-pill flex items-center gap-2 p-2">
					{navItems.map((item) => (
						<li key={item.id} className="flex items-center justify-center">
							<a
								title={item.label}
								href={item.href}
								onClick={(event) => handleNavClick(event, item.href, item.id)}
								className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full text-2xl transition duration-300 sm:h-[4.125rem] sm:w-[4.125rem] sm:hover:-translate-y-1 ${
									section === item.id
										? "bg-accent-gradient text-white shadow-glow"
										: "text-ink hover:bg-white/40 dark:text-inkDark dark:hover:bg-white/10"
								}`}
							>
								<i className={`bi ${item.icon}`}></i>
							</a>
						</li>
					))}
				</ul>
			</motion.nav>
		</div>
	);
};
