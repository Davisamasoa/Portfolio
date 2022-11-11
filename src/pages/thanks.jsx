import { Link } from "react-router-dom";

export function ThankYou() {
	return (
		<div className="div-obrigado">
			<h1>Obrigado por enviar sua mensagem!</h1>
			<Link className="a" to="/">
				Voltar para o Portfólio
			</Link>
		</div>
	);
}
