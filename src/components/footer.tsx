type langDataType = {
	footer: {
		credits: string;
	};
};

export const Footer = ({ footer }: langDataType) => {
	return (
		<footer className="mt-32 flex flex-col items-center gap-5 pb-28 text-center">
			<div className="glass-pill flex gap-2 p-2">
				<a
					title="Link para o GitHub de Davi Machado"
					href="https://github.com/Davisamasoa"
					target="_blank"
					className="flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:bg-white/40 dark:hover:bg-white/10"
				>
					<i className="bi bi-github text-xl"></i>
				</a>

				<a
					title="Link para o LinkedIn de Davi Machado"
					href="https://www.linkedin.com/in/davisamasoa/"
					target="_blank"
					className="flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:bg-white/40 dark:hover:bg-white/10"
				>
					<i className="bi bi-linkedin text-xl"></i>
				</a>
			</div>
			<p className="text-sm text-muted dark:text-mutedDark">{footer.credits}</p>
		</footer>
	);
};
