import React from "react";
import { Link } from "react-router-dom";
export function Contact() {
	return (
		<section className="section-contato" id="contact" data-aos="fade-down" data-aos-duration="1000">
			<h1 className="text-[40px] font-bold">Contato</h1>

			<div className="divFormAside">
				<aside className="div-SocialMedia">
					<div className="socialMedia hover:scale-105">
						<div className="iconSocial">
							<i className="bi bi-github iconSocial"></i>
						</div>

						<h3>Git Hub</h3>
						<p>davisamasoa</p>
						<div className="div-linkSocial">
							<a id="linkSocial" href="https://github.com/Davisamasoa" target="_blank">
								VISITAR PERFIL DO GITHUB
							</a>
						</div>
					</div>

					<div className="socialMedia hover:scale-105">
						<div className="iconSocial">
							<i className="bi bi-linkedin iconSocial"></i>
						</div>

						<h3>Linkedin</h3>
						<p>Davi Samuel Machado Soares</p>
						<div className="div-linkSocial">
							<a id="linkSocial" href="https://www.linkedin.com/in/davisamasoa/" target="_blank">
								VISITAR PERFIL DO LINKEDIN
							</a>
						</div>
					</div>
				</aside>

				<form className="gap-5" action="https://formsubmit.co/davisamasoa@gmail.com" method="POST">
					<input type="text" name="nome" id="name" placeholder="Nome e Sobrenome" required />
					<input type="email" name="email" placeholder="E-mail" required />
					<textarea
						name="mensagem"
						placeholder="Mensagem"
						required
						id="mensagem"
						cols="30"
						rows="10"
					></textarea>
					<button className="hover:scale-105" id="submit" type="submit">
						Enviar
					</button>
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_next" value="https://davisamasoa.vercel.app/thanks.html" />
				</form>
			</div>
		</section>
	);
}
