export const IconsAside = () => {
	return (
		<aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 transform-gpu sm:flex">
			<div className="glass-pill flex flex-col gap-2 p-2">
				<a
					title="Link para o GitHub de Davi Machado"
					className="flex h-11 w-11 items-center justify-center rounded-full text-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/40 dark:hover:bg-white/10"
					href="https://github.com/Davisamasoa"
					target="_blank"
				>
					<i className="bi bi-github"></i>
				</a>

				<a
					title="Link para o LinkedIn de Davi Machado"
					className="flex h-11 w-11 items-center justify-center rounded-full text-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/40 dark:hover:bg-white/10"
					href="https://www.linkedin.com/in/davisamasoa/"
					target="_blank"
				>
					<i className="bi bi-linkedin"></i>
				</a>

				<a
					title="Link para o e-mail de Davi Machado"
					className="flex h-11 w-11 items-center justify-center rounded-full text-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/40 dark:hover:bg-white/10"
					href="mailto:davisamasoa@gmail.com"
				>
					<i className="bi bi-envelope"></i>
				</a>
			</div>
		</aside>
	);
};
