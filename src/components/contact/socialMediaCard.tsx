import { LazyMotion, domAnimation, m } from "framer-motion";

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
		<LazyMotion features={domAnimation}>
			<m.a
				initial={{ scale: 0.7, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, delay: 0, type: "spring", bounce: 0.5, damping: 10 }}
				href={props.link}
				target="_blank"
			>
				<div className="sm:hover:scale-105 bg-primaryColor rounded-2xl py-8 px-4 transition duration-300  ">
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
			</m.a>
		</LazyMotion>
	);
};
