import Link from "next/link";

export default function ThanksForSendingYourMessage() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center gap-6 px-6 text-center">
			<div className="glass flex flex-col items-center gap-4 rounded-[2rem] px-8 py-12 sm:px-14">
				<i className="bi bi-check-circle text-4xl text-accent"></i>
				<div className="space-y-1">
					<h1 className="text-xl font-bold sm:text-2xl">Obrigado por enviar sua mensagem!</h1>
					<h2 className="text-base font-light text-muted dark:text-mutedDark sm:text-lg">
						Thank you for sending your message!
					</h2>
				</div>
				<Link href="/" className="btn-primary mt-2 text-sm">
					Voltar ao portfólio / Back to portfolio
				</Link>
			</div>
		</main>
	);
}
