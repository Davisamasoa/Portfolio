import React from "react";

export function NavAside() {
	return (
		<>
			<nav>
				<ul className="navegation">
					<li className="iconNav hover:scale-125">
						<a href="#Home">
							<i className="bi bi-house"></i>
						</a>
					</li>
					<li className="iconNav hover:scale-125">
						<a href="#aboutMe">
							<i className="bi bi-person" id="user"></i>
						</a>
					</li>
					<li className="iconNav hover:scale-125">
						<a href="#skills">
							<i className="bi bi-journal-code"></i>
						</a>
					</li>
					<li className="iconNav hover:scale-125">
						<a href="#project">
							<i className="bi bi-pc-display"></i>
						</a>
					</li>
					<li className="iconNav hover:scale-125">
						<a href="#contact">
							<i className="bi bi-telephone"></i>
						</a>
					</li>
				</ul>
			</nav>

			<aside className="sideIcons" data-aos="fade-right" data-aos-duration="1000">
				<a className="hover:scale-125" href="https://github.com/Davisamasoa" target="_blank">
					<i className="bi bi-github"></i>
				</a>

				<a className="hover:scale-125" href="https://www.linkedin.com/in/davisamasoa/" target="_blank">
					<i className="bi bi-linkedin"></i>
				</a>

				<a className="hover:scale-125" href="mailto:davisamasoa@gmail.com">
					<i className="bi bi-envelope"></i>
				</a>
			</aside>
		</>
	);
}
