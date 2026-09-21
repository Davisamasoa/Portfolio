import Image, { StaticImageData } from "next/image";

type projectItemType = {
	projectName: string;
	projectImg: StaticImageData;
	projectSite: string;
	viewProjectLabel: string;
	tecnologies: {
		oficialWebsite: string;
		imgPath: string;
		imgAlt: string;
	}[];
};

export const ProjectItem = ({ projectName, projectImg, projectSite, tecnologies, viewProjectLabel }: projectItemType) => {
	return (
		<article className="glass-tile flex flex-col gap-4 rounded-[1.75rem] p-4">
			<div className="relative aspect-video w-full overflow-hidden rounded-2xl">
				<Image
					fill
					loading="lazy"
					placeholder="blur"
					sizes="(min-width: 1024px) 360px, 100vw"
					src={projectImg}
					className="object-cover"
					alt={`Captura de tela do projeto ${projectName}`}
				/>
			</div>

			<div className="flex flex-wrap gap-2">
				{tecnologies.map((tecnology, index) => (
					<a
						key={index}
						href={tecnology.oficialWebsite}
						target="_blank"
						title={`Tecnologia utilizada: ${tecnology.imgAlt}`}
						className="chip flex h-8 w-8 items-center justify-center !p-0"
					>
						<Image
							loading="eager"
							className={`h-4 w-4 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] ${
								["NextJS", "Babel", "ExpressJS", "Prisma"].includes(tecnology.imgAlt)
									? "dark:grayscale dark:invert"
									: ""
							}`}
							src={tecnology.imgPath}
							alt={tecnology.imgAlt}
							width={16}
							height={16}
						/>
					</a>
				))}
			</div>

			<h3 className="text-lg font-bold">{projectName}</h3>

			<a
				title={`Ver o projeto ${projectName}`}
				className="btn-primary w-full !py-2.5 text-sm"
				target="_blank"
				href={projectSite}
			>
				{viewProjectLabel}
				<i className="bi bi-arrow-up-right"></i>
			</a>
		</article>
	);
};
