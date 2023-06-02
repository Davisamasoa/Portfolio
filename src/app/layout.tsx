import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Davi Samuel | Dev Full Stack Jr",
	description:
		"Portfólio web de Davi Samuel, um estudante de programação que busca sua primeira chance no mercado como desenvolvedor full-stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
