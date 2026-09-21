import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Davi Machado | Full-Stack Developer",
	description: "Portfólio de Davi Machado, desenvolvedor Full-Stack criando produtos web rápidos, organizados e bonitos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={`${montserrat.className} relative min-h-screen overflow-x-hidden antialiased`}>
				<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
					<div className="absolute -left-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/40 blur-[120px] animate-float dark:bg-accent/25" />
					<div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent2/40 blur-[120px] animate-floatSlow dark:bg-accent2/20" />
					<div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-accent3/30 blur-[120px] animate-float dark:bg-accent3/15" />
				</div>
				{children}
			</body>
		</html>
	);
}
