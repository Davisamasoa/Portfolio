import React from "react";

export function NavAside() {
	return (
		<>
			<nav>
				<ul className="navegation">
					<li className="iconNav">
						<a href="#Home">
							<i className="bi bi-house"></i>
						</a>
					</li>
					<li className="iconNav">
						<a href="#aboutMe">
							<i className="bi bi-person" id="user"></i>
						</a>
					</li>
					<li className="iconNav">
						<a href="#skills">
							<i className="bi bi-journal-code"></i>
						</a>
					</li>
					<li className="iconNav">
						<a href="#project">
							<i className="bi bi-pc-display"></i>
						</a>
					</li>
					<li className="iconNav">
						<a href="#contact">
							<i className="bi bi-telephone"></i>
						</a>
					</li>
				</ul>
			</nav>

			<aside className="sideIcons">
				<a href="https://github.com/Davisamasoa" target="_blank">
					<i className="bi bi-github"></i>
				</a>

				<a href="https://www.linkedin.com/in/davisamasoa/" target="_blank">
					<i className="bi bi-linkedin"></i>
				</a>

				<a href="mailto:davisamasoa@gmail.com">
					<i className="bi bi-envelope"></i>
				</a>
			</aside>
		</>
	);
}
