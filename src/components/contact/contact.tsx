import React from "react";
import { SocialMediaCard } from "./socialMediaCard";
import { LazyMotion, domAnimation, m } from "framer-motion";

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
		<LazyMotion features={domAnimation}>
			<m.section className="sm:pt-32 pt-16 mt-48  text-textColor" id="contact">
				<m.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					className="text-center text-5xl font-bold"
				>
					{contact.title}
				</m.h1>

				<div className=" pt-14 flex mx-auto gap-24 justify-center lg:w-[950px] md:w-full flex-col lg:flex-row items-center">
					<aside className="w-full sm:w-fit text-bgColor flex flex-col gap-5 lg:order-1 order-2">
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
						className="flex w-full sm:w-auto flex-col  text-textColor lg:order-2 order-1"
						action="https://formsubmit.co/davisamasoa@gmail.com"
						method="POST"
					>
						<m.div
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="flex flex-col gap-1"
						>
							<label className="text-textColor mb-1" htmlFor="name">
								{contact.labelName}
							</label>
							<input
								className="sm:w-96 w-full py-2 px-2 bg-transparent rounded-md border-2 border-primaryColor"
								type="text"
								name="nome"
								id="name"
								required
								placeholder={contact.placeHolderName}
							/>
						</m.div>
						<m.div
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="flex flex-col gap-1"
						>
							<label className="text-textColor mt-5 mb-1" htmlFor="email">
								E-mail:
							</label>
							<input
								id="email"
								className="sm:w-96 w-full py-2 px-2 bg-transparent rounded-md border-2 border-primaryColor"
								type="email"
								name="email"
								required
								placeholder={contact.placeHolderEmail}
							/>
						</m.div>
						<m.div
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col gap-1"
						>
							<label className="text-textColor mt-5 mb-1" htmlFor="mensagem">
								{contact.labelMessage}
							</label>
							<textarea
								className="sm:w-96 w-full py-2 px-2 h-20 bg-transparent rounded-md border-2 border-primaryColor"
								name="mensagem"
								required
								id="mensagem"
								cols={30}
								rows={10}
								placeholder={contact.placeHolderMessage}
							></textarea>
						</m.div>

						<m.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="w-full"
						>
							<button
								className="w-36 hover:scale-105 bg-primaryColor mt-10 text-bgColor py-2 rounded-md transition duration-300"
								id="submit"
								type="submit"
							>
								{contact.sendButton}
							</button>
						</m.div>

						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_next" value="https://davisamasoa.vercel.app/thanks" />
					</form>
				</div>
			</m.section>
		</LazyMotion>
	);
};
