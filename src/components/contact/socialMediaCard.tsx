type socialMediaCardType = {
	contact: {
		lang: string;
	};
	socialName: string;
	userName: string;
	link: string;
};

export const SocialMediaCard = (props: socialMediaCardType) => {
	const upperCaseSocialName = props.socialName.toUpperCase();
	const lowerCaseSocialName = props.socialName.toLowerCase();

	return (
		<a title={`link para o ${lowerCaseSocialName} de Davi Samuel`} href={props.link} target="_blank">
			<div className="sm:hover:scale-105 bg-primaryColor dark:bg-darkprimaryColor rounded-2xl px-14 py-10 !aspect-video transition duration-300">
				<div className="text-center">
					<i className={`bi bi-${lowerCaseSocialName} text-3xl`}></i>
				</div>

				<h3 className="text-center">{props.socialName}</h3>
				<p className="text-center">{props.userName}</p>
				<div className="text-center font-bold mt-3">
					<p id="linkSocial">{`${
						props.contact.lang == "pt-br"
							? `VISITAR PERFIL DO ${upperCaseSocialName}`
							: `VISIT ${upperCaseSocialName} PROFILE`
					} `}</p>
				</div>
			</div>
		</a>
	);
};
