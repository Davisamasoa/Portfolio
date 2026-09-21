import { SocialMediaCard } from "./socialMediaCard";

type contactDataType = {
	contact: {
		title: string;
		lang: string;
		labelName: string;
		placeHolderName: string;
		emailLabel: string;
		placeHolderEmail: string;
		labelMessage: string;
		placeHolderMessage: string;
		sendButton: string;
	};
};

export const Contact = ({ contact }: contactDataType) => {
	return (
		<section id="contact" className="mx-auto mt-16 max-w-5xl pt-24 sm:mt-28">
			<span className="section-eyebrow block text-center">04</span>
			<h2 className="section-title text-center">{contact.title}</h2>

			<div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
				<div className="flex flex-row gap-4 lg:flex-col">
					<SocialMediaCard
						contact={contact}
						socialName="GitHub"
						userName="Davisamasoa"
						link="https://github.com/Davisamasoa"
					/>
					<SocialMediaCard
						contact={contact}
						socialName="LinkedIn"
						userName="davisamasoa"
						link="https://www.linkedin.com/in/davisamasoa/"
					/>
				</div>

				<form
					className="glass flex w-full flex-col gap-5 rounded-[2rem] p-6 sm:p-8"
					action="https://formsubmit.co/davisamasoa@gmail.com"
					method="POST"
				>
					<div className="flex flex-col gap-5 md:flex-row">
						<div className="flex w-full flex-col gap-2">
							<label htmlFor="name">{contact.labelName}</label>
							<input
								className="input-glass"
								type="text"
								name="nome"
								id="name"
								required
								placeholder={contact.placeHolderName}
							/>
						</div>
						<div className="flex w-full flex-col gap-2">
							<label htmlFor="email">{contact.emailLabel}</label>
							<input
								id="email"
								className="input-glass"
								type="email"
								name="email"
								required
								placeholder={contact.placeHolderEmail}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="mensagem">{contact.labelMessage}</label>
						<textarea
							className="input-glass resize-none"
							name="mensagem"
							required
							id="mensagem"
							rows={6}
							placeholder={contact.placeHolderMessage}
						></textarea>
					</div>

					<button className="btn-primary mt-2 w-full" id="submit" type="submit">
						{contact.sendButton}
						<i className="bi bi-send"></i>
					</button>

					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_next" value="https://davisamasoa.vercel.app/thanks" />
				</form>
			</div>
		</section>
	);
};
