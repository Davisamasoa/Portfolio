import { LazyMotion, domAnimation, m } from "framer-motion";

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
		<li className="skillItem  sm:24 md:w-28 border-2 border-secondaryColor shadow-primaryColor shadow-custom hover:scale-110 transition duration-300  bg-secondaryColor rounded-lg p-3 ">
			<a
				href={props.tecLink}
				className="flex justify-between items-center flex-col"
				target="_blank"
				rel="noreferrer"
			>
				<LazyMotion features={domAnimation}>
					<m.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
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
					</m.div>
				</LazyMotion>

				<h3
					className="text-center font-light text-xs mt-2 text-tex
				"
				>
					{props.tecImgAlt}
				</h3>
			</a>
		</li>
	);
};
