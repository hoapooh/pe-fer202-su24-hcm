import "../styles/Contact.scss";

export default function Contact() {
	return (
		<div className="contact">
			<div className="layer-1">
				<div className="content">
					<div className="header">
						<div style={{ marginBottom: "12px" }}>
							<div className="sub-title">contact us</div>
						</div>
						<div style={{ marginBottom: "16px" }}>
							<h1 className="main-title">We&apos;ve been waiting for you.</h1>
						</div>
						<p>We want to hear from you. Let us know how we can help.</p>
					</div>
					<div className="body">
						<div style={{ marginBottom: "24px" }}>
							<h5>Send us a Message</h5>
						</div>
						<form className="form-block">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<button type="submit" className="btn-main-style submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="layer-2">contact information</div>
			<div style={{ textAlign: "center", borderTop: "1px solid #050505", padding: "20px 0" }}>
				© Made by{" "}
				<a target="_blank" rel="noopener" href="https://github.com/hoapooh">
					Hoapooh
				</a>{" "}
				with 💖 and inspired by{" "}
				<a target="_blank" rel="noopener" href="https://member-template-webflow.webflow.io/contact">
					Flowbase
				</a>
			</div>
		</div>
	);
}
