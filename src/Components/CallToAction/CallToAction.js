import "./CallToAction.css";

const CallToAction = ({ data }) => {
	const { text, button } = data;
	return (
		<section className="cta">
			<div className="cta-mask">
				<div className="container-fluid container-xl mx-auto d-flex flex-column flex-xl-row justify-content-between align-items-center gap-4">
					<h2 className="heading-l text-white text-center text-xl-start m-0">{text}</h2>
					<a href="/booking" className="btn-dine-dark">
						{button}
					</a>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
