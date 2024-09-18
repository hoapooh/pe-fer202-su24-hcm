import "../styles/Contact.scss";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Contact() {
	const section1Ref = useAnimateOnScroll(); // Section 1 with 0.2s delay increment
	const section2Ref = useAnimateOnScroll(); // Section 2 with 0.3s delay increment

	return (
		<div className="contact">
			{/* ==== LAYER 1 ==== */}
			<div className="layer-1">
				{/* ==== CONTENT ==== */}
				<div className="content">
					<div ref={(el) => (section1Ref.current[0] = el)} className="header element-to-animate">
						<div style={{ marginBottom: "12px" }}>
							<div className="sub-title">contact us</div>
						</div>
						<div style={{ marginBottom: "16px" }}>
							<h1 className="main-title">We&apos;ve been waiting for you.</h1>
						</div>
						<p>We want to hear from you. Let us know how we can help.</p>
					</div>
					<div ref={(el) => (section1Ref.current[1] = el)} className="body element-to-animate">
						<div style={{ marginBottom: "24px" }}>
							<h5>Send us a Message</h5>
						</div>
						<form className="form-block">
							<div className="text-field">
								<img
									src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/6357a57f2856a6a1c29c807e_Form%20Icon%2004.svg"
									loading="lazy"
									alt=""
									className="icon-regular"
								/>
								<input
									className="text-field-input"
									type="text"
									name="Name"
									placeholder="Enter your name"
									id="Name"
									required
								/>
							</div>
							<div className="text-field">
								<img
									src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/6357a57f130e1fcfdb25987a_Form%20Icon%2003.svg"
									loading="lazy"
									alt=""
									className="icon-regular"
								/>
								<input
									className="text-field-input"
									type="text"
									name="Name"
									placeholder="Enter your email"
									id="Name"
									required
								/>
							</div>
							<div className="text-field">
								<img
									src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/6357a57f2856a6a1c29c807e_Form%20Icon%2004.svg"
									loading="lazy"
									alt=""
									className="icon-regular"
								/>
								<input
									className="text-field-input"
									type="text"
									name="Name"
									placeholder="Business name"
									id="Name"
									required
								/>
							</div>
							<div style={{ marginBottom: "16px" }}>
								<div className="text-field">
									<img
										src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/6357a580b63339632a2d6efb_Form%20Icon%2002.svg"
										loading="lazy"
										alt=""
										className="icon-regular"
									/>
									<input
										className="text-field-input"
										type="text"
										name="Name"
										placeholder="Phone number"
										id="Name"
										required
									/>
								</div>
							</div>
							<button type="submit" className="btn-main-style submit">
								Submit
							</button>
						</form>
					</div>
				</div>
				{/* ==== CIRCLE CONTACT FORM ==== */}
				<div
					ref={(el) => (section1Ref.current[2] = el)}
					className="circle-contact element-to-animate"
				>
					<img
						src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/6358a9bc7bda63e2604850d7_Contact%20Gradient.svg"
						loading="lazy"
						alt=""
						className="gradient"
					/>
				</div>
				{/* ==== BACKGROUND WRAPPER ==== */}
				<div
					ref={(el) => (section1Ref.current[3] = el)}
					className="background-wrapper element-to-animate"
				>
					<div className="background-line-wrapper">
						<div className="line"></div>
						<div className="line-wrapper">
							<img
								src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/63549f1f299a9b70e9a419b5_BG%20Accent.svg"
								loading="lazy"
								alt=""
								className="accent-1"
							/>
							<div className="line"></div>
						</div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line-wrapper">
							<img
								src="https://cdn.prod.website-files.com/63338a1f38b4fd25d6ea3cb2/63549fcecef9162cb0fd5a7d_BG%20Accent%20Small.svg"
								loading="lazy"
								alt=""
								className="accent-1"
							/>
							<div className="line"></div>
						</div>
						<div className="line"></div>
					</div>
				</div>
			</div>
			{/* <div className="layer-2">contact information</div> */}
			<div className="respect" style={{ textAlign: "center" }}>
				<div ref={(el) => (section2Ref.current[0] = el)} className="element-to-animate">
					© Made by{" "}
					<a target="_blank" rel="noopener" href="https://github.com/hoapooh">
						Hoapooh
					</a>{" "}
					with 💖 and inspired by{" "}
					<a
						target="_blank"
						rel="noopener"
						href="https://member-template-webflow.webflow.io/contact"
					>
						Flowbase
					</a>
				</div>
			</div>
		</div>
	);
}
