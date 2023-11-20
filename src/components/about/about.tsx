type langDataType = {
	about: {
		title: string;
		text: string;
	};
};

export const About = ({ about }: langDataType) => {
	return (
		<section className="sm:pt-32 pt-16 mt-56 text-textColor dark:text-darktextColor" id="aboutMe">
			<h1 className="text-center text-5xl font-bold">{about.title}</h1>

			<div className="pt-14 gap-10 flex lg:flex-row flex-col items-center w-full justify-center">
				<div>
					<img
						className="sm:w-80 w-full rounded-2xl"
						src="/assets/img/fotoAboutMe.webp"
						alt="Foto de Davi Samuel"
						width={573}
						height={763}
					/>
				</div>
				<div className="flex items-center">
					<p className="sm:w-96 w-full md:px-6">{about.text}</p>
				</div>
			</div>
		</section>
	);
};
