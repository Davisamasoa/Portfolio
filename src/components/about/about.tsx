import Image from "next/image";

type langDataType = {
	about: {
		title: string;
		text: string;
	};
};

export const About = ({ about }: langDataType) => {
	const paragraphs = about.text.split("\n\n");

	return (
		<section id="aboutMe" className="mx-auto mt-16 max-w-5xl pt-24 sm:mt-28">
			<span className="section-eyebrow block text-center">01</span>
			<h2 className="section-title text-center">{about.title}</h2>

			<div className="glass mt-14 flex flex-col items-center gap-10 rounded-[2rem] p-6 sm:p-10 lg:flex-row">
				<div className="relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl sm:h-[340px] sm:w-[270px]">
					<Image fill sizes="270px" className="object-cover" src="/assets/img/eu.webp" alt="Foto de Davi Machado" />
				</div>

				<div className="space-y-4 text-sm leading-relaxed text-muted dark:text-mutedDark sm:text-base">
					{paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
};
