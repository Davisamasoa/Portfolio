import React, { useEffect, useState } from "react";

type Props = {};

export default function Darkmode({}: Props) {
	const [theme, setTheme] = useState<string | null>("null");

	useEffect(() => {
		const existingPreference = localStorage.getItem("themePreference");

		if (!existingPreference) {
			localStorage.setItem("themePreference", "white");
		}

		setTheme(existingPreference);
	}, []);

	useEffect(() => {
		const htmlElement = document.querySelector("html");

		if (htmlElement) {
			if (theme === "dark") {
				htmlElement.className = "dark";
				localStorage.setItem("themePreference", "dark");
			} else {
				htmlElement.className = "";
				localStorage.setItem("themePreference", "white");
			}
		}
	}, [theme]);

	function changeTheme() {
		if (theme == "dark") {
			setTheme("white");
		} else {
			setTheme("dark");
		}
	}

	return (
		<i
			className={`text-lg cursor-pointer text-primaryColor dark:text-darkprimaryColor bi  ${
				theme == "white" ? "bi-moon" : "bi-brightness-high"
			} `}
			onClick={changeTheme}
		></i>
	);
}
