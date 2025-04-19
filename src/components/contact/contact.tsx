import React from "react";
import { SocialMediaCard } from "./socialMediaCard";

type contactDataType = {
	contact: {
		title: string;
		lang: string;
		labelName: string;
		placeHolderName: string;
		placeHolderEmail: string;
		labelMessage: string;
		placeHolderMessage: string;
		sendButton: string;
	};
};

export const Contact = ({ contact }: contactDataType) => {
	return (
		<section className="sm:pt-32 pt-16 mt-16  text-textColor dark:text-darktextColor" id="contact">
			<h1 className="text-center text-5xl font-bold">{contact.title}</h1>

			<div className=" pt-14 flex mx-auto gap-24 justify-center lg:w-[950px] md:w-full flex-col lg:flex-row items-center">
				<aside className="w-full sm:w-fit text-bgColor dark:text-darkbgColor flex flex-col gap-5 lg:order-1 order-2">
					<SocialMediaCard
						contact={contact}
						socialName="GitHub"
						userName="davisamasoa"
						link="https://github.com/Davisamasoa"
					/>
					<SocialMediaCard
						contact={contact}
						socialName="LinkedIn"
						userName="Davi Samuel Machado Soares"
						link="https://www.linkedin.com/in/davisamasoa"
					/>
				</aside>

				<form
					className="flex w-full sm:w-auto flex-col  text-textColor dark:text-darktextColor lg:order-2 order-1"
					action="https://formsubmit.co/davisamasoa@gmail.com"
					method="POST"
				>
					<div className="flex flex-col gap-1">
						<label className="text-textColor dark:text-darktextColor mb-1" htmlFor="name">
							{contact.labelName}
						</label>
						<input
							className="sm:w-96 w-full py-2 px-2 bg-transparent rounded-md border-2 border-primaryColor dark:border-darkprimaryColor"
							type="text"
							name="nome"
							id="name"
							required
							placeholder={contact.placeHolderName}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-textColor dark:text-darktextColor mt-5 mb-1" htmlFor="email">
							E-mail:
						</label>
						<input
							id="email"
							className="sm:w-96 w-full py-2 px-2 bg-transparent rounded-md border-2 border-primaryColor dark:border-darkprimaryColor"
							type="email"
							name="email"
							required
							placeholder={contact.placeHolderEmail}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-textColor dark:text-darktextColor mt-5 mb-1" htmlFor="mensagem">
							{contact.labelMessage}
						</label>
						<textarea
							className="sm:w-96 w-full py-2 px-2 h-20 bg-transparent rounded-md border-2 border-primaryColor dark:border-darkprimaryColor"
							name="mensagem"
							required
							id="mensagem"
							cols={30}
							rows={10}
							placeholder={contact.placeHolderMessage}
						></textarea>
					</div>

					<div className="w-full">
						<button
							className="w-36 hover:scale-105 bg-primaryColor dark:bg-darkprimaryColor mt-10 text-bgColor dark:text-darkbgColor  py-2 rounded-md transition duration-300"
							id="submit"
							type="submit"
						>
							{contact.sendButton}
						</button>
					</div>

					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_next" value="https://davisamasoa.vercel.app/thanks" />
				</form>
			</div>
		</section>
	);
};
