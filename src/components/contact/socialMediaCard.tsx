type socialMediaCardType = {
	contact: {
		lang: string;
	};
	socialName: string;
	userName: string;
	link: string;
};

export const SocialMediaCard = ({ contact, socialName, userName, link }: socialMediaCardType) => {
	const lowerCaseSocialName = socialName.toLowerCase();
	const upperCaseSocialName = socialName.toUpperCase();

	return (
		<a
			title={`Link para o ${lowerCaseSocialName} de Davi Machado`}
			href={link}
			target="_blank"
			className="glass-tile flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-[1.75rem] px-6 py-8 text-center"
		>
			<i className={`bi bi-${lowerCaseSocialName} text-3xl text-accent`}></i>
			<h3 className="font-semibold">{socialName}</h3>
			<p className="text-sm text-muted dark:text-mutedDark">{userName}</p>
			<p className="mt-2 text-xs font-semibold text-accent">
				{contact.lang === "pt-br" ? `VISITAR ${upperCaseSocialName}` : `VISIT ${upperCaseSocialName}`}
			</p>
		</a>
	);
};
