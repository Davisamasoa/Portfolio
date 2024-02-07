import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Davi Samuel | Dev Full Stack",
	description: "Portfólio de Davi Samuel, programador web Full Stack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body
				className={`${inter.className} bg-bgColor dark:bg-darkbgColor text-textColor dark:text-darktextColor`}
			>
				{children}
			</body>
		</html>
	);
}
