import "./BannerHP.css";
import logo from "../../assets/images/dine.svg";

const BannerHP = ({ data }) => {
	const { title, desc, button } = data;

	return (
		<section className="banner-hp">
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12 col-xl-6">
					<a href="/">
						<img className="logo" src={logo} alt="" />
					</a>
					<h1 className="heading-xl text-white">{title}</h1>
					<p className="body-1 text-white w-80 mx-auto mx-xl-0 mb-5">{desc}</p>
					<a href="/booking" className="btn-dine-dark">
						{button}
					</a>
				</div>
			</div>
		</section>
	);
};

export default BannerHP;
