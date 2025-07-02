import Image from "next/image";

type projectItemType = {
	id?: string;
	projectName: string;
	projectImg: string;
	projectSite: string;
	projectGit: string;
	display: boolean;
	tecnologies: {
		oficialWebsite: string;
		imgPath: string;
		imgAlt: string;
	}[];
};

export const ProjectItem = (props: projectItemType) => {
	const display = props.display ? "" : "hidden";
	return (
		<div
			id={props.id}
			className={`${display} w-full  flex justify-center gap-5  rounded-2xl items-start flex-col`}
		>
			<figure className="w-full rounded-2xl">
				<Image
					width={700}
					height={500}
					loading="lazy"
					src={props.projectImg}
					className="rounded-xl w-full md:w-auto aspect-video object-cover"
					alt=""
				/>
			</figure>
			<div className="flex justify-start w-full gap-1">
				{props.tecnologies.map((Tecnology, index) => {
					return (
						<a
							href={Tecnology.oficialWebsite}
							key={index}
							target="_blank"
							title={`link para o site da tecnologia ${Tecnology.imgAlt}`}
							className={`bg-secondaryColor dark:bg-darksecondaryColor rounded-md p-1 min-w-[31px]  flex justify-center items-center`}
						>
							<Image
								loading="eager"
								className={` ${
									Tecnology.imgPath == "/_next/static/media/prisma.effd950f.svg" ? "w-[18px]" : "w-6"
								} brightness-0 invert grayscale-0`}
								src={Tecnology.imgPath}
								alt={Tecnology.imgAlt}
								width={10}
								height={10}
							/>
						</a>
					);
				})}
			</div>
			<p className="w-full text-start font-bold">{props.projectName}</p>
			<div className="flex flex-row gap-5 w-full">
				<a
					title={`link para ver demonstração do projeto ${props.projectName}`}
					className="lg:text-base md:text-[12px]  md:w-1/2 text-center bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor border-primaryColor dark:border-darkprimaryColor border-2 px-4 py-2  rounded-md sm:hover:bg-transparent sm:hover:text-textColor dark:sm:hover:text-darktextColor duration-300 transition"
					target="_blank"
					href={props.projectSite}
				>
					Ver Projeto
				</a>
				<a
					title={`link para o repositorio do projeto ${props.projectName} no github`}
					className=" items-center justify-center w-fit text-center bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor border-primaryColor dark:border-darkprimaryColor border-2 px-4  rounded-md sm:hover:bg-transparent sm:hover:text-textColor dark:sm:hover:text-darktextColor duration-300 transition hidden"
					target="_blank"
					href={props.projectGit}
				>
					<i className="bi bi-github text-3xl"></i>
				</a>
			</div>
		</div>
	);
};
