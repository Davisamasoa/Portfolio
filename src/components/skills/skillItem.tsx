import Image from "next/image";

type skillItemType = {
	tecLink: string;
	tecImg: string;
	tecImgAlt: string;
};

export const SkillItem = (props: skillItemType) => {
	let invertColor;

	if (props.tecImgAlt == "NextJs" || props.tecImgAlt == "Babel" || props.tecImgAlt == "ExpressJs") {
		invertColor = "grayscale invert";
	} else {
		invertColor = "";
	}
	return (
		<li className="skillItem  sm:24 md:w-32 border-2 border-secondaryColor dark:border-darksecondaryColor shadow-primaryColor dark:shadow-darkprimaryColor hover:scale-110 transition duration-300  bg-secondaryColor dark:bg-darksecondaryColor rounded-lg py-5 px-5 ">
			<a
				href={props.tecLink}
				className="flex justify-between items-center flex-col"
				target="_blank"
				rel="noreferrer"
			>
				<div>
					<Image
						loading="lazy"
						className={`mx-auto ${
							props.tecImgAlt == "Prisma" ||
							props.tecImgAlt == "NextJS" ||
							props.tecImgAlt == "Prisma" ||
							props.tecImgAlt == "Babel" ||
							props.tecImgAlt == "ExpressJS"
								? "grayscale invert"
								: null
						}  ${props.tecImg == "/_next/static/media/prisma.effd950f.svg" ? "w-[80%]" : null}`}
						width={130}
						height={130}
						src={props.tecImg}
						alt={props.tecImgAlt}
					/>
				</div>

				<h3
					className="text-center font-normal text-xs mt-2 text-white dark:text-darktextColor
				"
				>
					{props.tecImgAlt}
				</h3>
			</a>
		</li>
	);
};
