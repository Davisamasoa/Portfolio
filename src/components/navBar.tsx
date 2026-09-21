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
				<ul className="glass-pill flex items-center gap-1 p-2">
					{navItems.map((item) => (
						<li key={item.id} className="flex items-center justify-center">
							<a
								title={item.label}
								href={item.href}
								onClick={() => setSection(item.id)}
								className={`flex h-10 w-10 items-center justify-center rounded-full text-lg transition duration-300 sm:h-11 sm:w-11 sm:hover:-translate-y-1 ${
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
