import "./Footer.css";
import logo from "../../assets/images/dine.svg";

const Footer = ({ data }) => {
	const { address, country, phone, week_hours, weekend_hours } = data;

	return (
		<footer className="footer">
			<div className="container-fluid container-xl mx-auto d-flex flex-column flex-sm-row justify-content-between pe-xl-5">
				<a href="/">
					<img className="logo" src={logo} alt="" />
				</a>
				<div className="footer-content d-flex flex-column w-75 flex-xl-row justify-content-around ps-0 ps-xl-5 text-center text-sm-start">
					<div className="text-white mb-4">
						<p>{address}</p>
						<p>{country}</p>
						<p>{phone}</p>
					</div>
					<div className="text-white pe-xl-5 me-xl-5 mb-4">
						<p>OPEN TIMES</p>
						<p>{week_hours}</p>
						<p>{weekend_hours}</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
