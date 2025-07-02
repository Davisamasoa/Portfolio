type langDataType = {
	about: {
		title: string;
		text: string;
	};
};

export const About = ({ about }: langDataType) => {
	return (
		<section
			className="sm:pt-32 max-w-5xl mx-auto pt-16 mt-16 text-textColor dark:text-darktextColor"
			id="aboutMe"
		>
			<h1 className="text-center text-5xl font-bold">{about.title}</h1>

			<div className="pt-14 gap-10 flex lg:flex-row flex-col items-center w-full justify-center">
				<img
					className="w-[350px] object-contain rounded-2xl"
					src="/assets/img/eu.webp"
					alt="Foto de Davi Samuel"
					width={573}
					height={763}
				/>

				<div className="flex items-center">
					<p
						className="w-full md:px-6 md:text-lg
					"
					>
						{about.text}
					</p>
				</div>
			</div>
		</section>
	);
};
