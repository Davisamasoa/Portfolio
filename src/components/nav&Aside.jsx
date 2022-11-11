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

			<aside className="sideIcons" data-aos="fade-right" data-aos-duration="1000">
				<div>
					<a href="https://github.com/Davisamasoa" target="_blank">
						<i className="bi bi-github"></i>
					</a>
				</div>
				<div>
					<a href="mailto:davisamasoa@gmail.com">
						<i className="bi bi-envelope"></i>
					</a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/davisamasoa/" target="_blank">
						<i className="bi bi-linkedin"></i>
					</a>
				</div>
			</aside>
		</>
	);
}
