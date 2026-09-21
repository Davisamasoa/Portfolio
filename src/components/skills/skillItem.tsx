import Image from "next/image";

type skillItemType = {
	tecLink: string;
	tecImg: string;
	tecImgAlt: string;
};

const invertOnDark = ["NextJS", "Babel", "ExpressJS", "Prisma"];

export const SkillItem = ({ tecLink, tecImg, tecImgAlt }: skillItemType) => {
	const invert = invertOnDark.includes(tecImgAlt) ? "dark:grayscale dark:invert" : "";
	const isPrisma = tecImgAlt === "Prisma";

	return (
		<li className="glass-tile group flex flex-col items-center gap-3 px-3 py-5 sm:px-4">
			<a href={tecLink} className="flex flex-col items-center gap-3" target="_blank" rel="noreferrer">
				<Image
					loading="lazy"
					width={48}
					height={48}
					className={`h-10 w-10 object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${invert} ${
						isPrisma ? "w-[70%]" : ""
					}`}
					src={tecImg}
					alt={tecImgAlt}
				/>

				<h3 className="text-center text-[11px] font-medium text-muted dark:text-mutedDark sm:text-xs">
					{tecImgAlt}
				</h3>
			</a>
		</li>
	);
};
