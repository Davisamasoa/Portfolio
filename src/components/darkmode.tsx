"use client";

import { useEffect, useState } from "react";

export default function Darkmode() {
	const [theme, setTheme] = useState<string | null>(null);

	useEffect(() => {
		const existingPreference = localStorage.getItem("themePreference");
		setTheme(existingPreference || "dark");
	}, []);

	useEffect(() => {
		if (!theme) return;

		const htmlElement = document.querySelector("html");
		if (htmlElement) {
			htmlElement.className = theme === "dark" ? "dark" : "";
			localStorage.setItem("themePreference", theme);
		}
	}, [theme]);

	function changeTheme() {
		setTheme(theme === "dark" ? "white" : "dark");
	}

	return (
		<button
			title="Alternar tema claro/escuro"
			aria-label="Alternar tema claro/escuro"
			onClick={changeTheme}
			className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition duration-300 hover:bg-white/40 dark:text-inkDark dark:hover:bg-white/10"
		>
			<i className={`bi text-lg ${theme === "white" ? "bi-moon-stars" : "bi-sun"}`}></i>
		</button>
	);
}
