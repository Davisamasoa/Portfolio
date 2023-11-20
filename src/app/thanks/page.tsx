import Link from "next/link";
import React from "react";

type Props = {};

export default function ThanksForSendingYourMessage({}: Props) {
	return (
		<main className="text-textColor dark:text-darktextColor h-screen w-screen flex justify-center items-center flex-col sm:text-2xl text-xl text-center font-bold">
			<h1>Obrigado por enviar a sua mensagem!</h1>
			<h1 className="opacity-50">Thank you for send your message!</h1>
			<Link
				className="bg-primaryColor dark:bg-darkbgColor text-bgColor dark:text-darkbgColor text-sm p-2 font-normal rounded-md mt-5 border-2"
				href="/"
			>
				Voltar para o portfólio / Back to portfolio{" "}
			</Link>
		</main>
	);
}
