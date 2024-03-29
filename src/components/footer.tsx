type langDataType = {
	footer: {
		credits: string;
	};
};

export const Footer = ({ footer }: langDataType) => {
	return (
		<footer className="mt-24 pb-24 flex gap-4 flex-col justify-center items-center text-textColor dark:text-darktextColor">
			<p>{footer.credits}</p>
			<figure className="flex gap-3 text-primaryColor dark:text-darkprimaryColor">
				<a title="link para o github de Davi Samuel" href="https://github.com/Davisamasoa" target="_blank">
					<i className="bi bi-github text-3xl"></i>
				</a>

				<a
					title="link para o linkedin de Davi Samuel"
					href="https://www.linkedin.com/in/davisamasoa/"
					target="_blank"
				>
					<i className="bi bi-linkedin text-3xl"></i>
				</a>
			</figure>
		</footer>
	);
};
