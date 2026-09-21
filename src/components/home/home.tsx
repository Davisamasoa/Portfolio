import Image from "next/image";

type langDataType = {
	home: {
		greeting: string;
		profission: string;
		downloadButton: string;
		cvLink: string;
		letsWorkButton: string;
	};
};

export const Home = ({ home }: langDataType) => {
	return (
		<section id="Home" className="relative mx-auto max-w-5xl pt-24 text-center">
			<span className="section-eyebrow">{home.greeting}</span>
			<h1 className="mt-4 bg-accent-gradient bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
				Davi Machado
			</h1>
			<p className="mt-4 text-base font-light text-muted dark:text-mutedDark sm:text-lg">{home.profission}</p>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
				<a target="_blank" href={`/assets/${home.cvLink}`} className="btn-outline text-sm sm:text-base">
					<i className="bi bi-download"></i>
					{home.downloadButton}
				</a>
				<a href="#contact" className="btn-primary text-sm sm:text-base">
					{home.letsWorkButton}
					<i className="bi bi-arrow-down-right"></i>
				</a>
			</div>

			<div className="relative mx-auto mt-16 h-[260px] w-[260px] sm:h-[340px] sm:w-[340px]">
				<div className="absolute inset-0 -z-10 rounded-full bg-accent-gradient opacity-40 blur-3xl" />
				<div className="glass h-full w-full overflow-hidden rounded-[2.5rem] p-3">
					<div className="relative h-full w-full overflow-hidden rounded-[2rem]">
						<Image
							fill
							priority
							sizes="340px"
							className="object-cover"
							src="/assets/img/eu1.webp"
							alt="Foto de Davi Machado"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
