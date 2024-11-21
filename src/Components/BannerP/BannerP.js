import "./BannerP.css";
import logo from "../../assets/images/dine.svg";

const BannerP = ({ data }) => {
	const { title, desc } = data;

	return (
		<section className="banner-p">
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12 col-xl-6">
					<a href="/">
						<img className="logo" src={logo} alt="" />
					</a>

					<h1 className="heading-xl text-white">{title}</h1>
					<p className="body-1 text-white w-80 text-center text-lg-start mx-auto mx-xl-0 mb-5">{desc}</p>
				</div>
			</div>
		</section>
	);
};

export default BannerP;
