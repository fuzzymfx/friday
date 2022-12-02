import React, { useEffect, useState } from "react";
import technology from "../assets/img/technology.svg";
import technology2 from "../assets/img/technology2.svg"
import quality from "../assets/img/Quality.svg";
import quality2 from "../assets/img/quality2.svg";
import research from "../assets/img/Research.svg";
import research2 from "../assets/img/research2.svg";
import technologyd from "../assets/img/technologyd.svg";
import qualityd from "../assets/img/qualityd.svg";
import researchd from "../assets/img/researchd.svg";
import Aos from "aos";
var dark;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark = true;
}
export default function OurCoreValues() {
	const [isDark, setIsDark] = React.useState(dark);

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		event.matches ? setIsDark(true) : setIsDark(false);
	});
	const [over1, setOver1] = useState(null);
	const [paraStyle1, setParaStyle1] = useState({
		opacity: "",
		transition: "1s",
	});
	const [paraStyle2, setParaStyle2] = useState({
		opacity: "",
		transition: "1s",
	});
	const [paraStyle3, setParaStyle3] = useState({
		opacity: "",
		transition: "1s",
	});
	useEffect(() => {
		if (over1 === "card1") {
			setParaStyle1({ ...paraStyle1, opacity: "1" });
		} else if (over1 === "card2") {
			setParaStyle2({ ...paraStyle2, opacity: "1" });
		} else if (over1 === "card3") {
			setParaStyle3({ ...paraStyle3, opacity: "1" });
		} else {
			setParaStyle1({ ...paraStyle1, opacity: "0.5" });
			setParaStyle2({ ...paraStyle2, opacity: "0.5" });
			setParaStyle3({ ...paraStyle3, opacity: "0.5" });
		}
		// eslint-disable-next-line
	}, [over1]);
	// React.useEffect(() => {
	// 	Aos.init();
	// }, []);

	return (
		<div className="container">
			<div className="row">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="col-md-12 col-lg-4">
					<div
						className="card rounded-4 cardgroup text-center mt-5 pb-4"
						style={{
							height: "450px",
							backgroundColor: isDark ? "#212529" : "#ffffff",
						}}
						onMouseOver={() => setOver1("card1")}
						onMouseOut={() => setOver1(null)}
					>
						<div className=" py-5">
							<img
								src={over1 === "card1" ? quality2 : isDark ? quality : qualityd}
								style={{ transition: " opacity 3s ease-in" }}
								alt="icon"
							/>
							{/* {over1==="card1" ?<img src={quality2} alt="quality" className="cat2"/>:<img src={quality} alt="quality" className="cat"/>} */}
						</div>
						<div className="card-body p-0">
							<h5 className="card-title  fw-bold">Quality</h5>
							<p className="card-text p-4 " style={paraStyle1}>
								Our belief lies in the fact that perfection induces perfection,
								therefore we have a team implementing the most efficient methodologies and at the helm of every minuscule innovation.
							</p>
						</div>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="col-md-12 col-lg-4 ">
					<div
						className="card  rounded-4 cardgroup text-center mt-5 pb-4"
						style={{
							height: "450px",
							backgroundColor: isDark ? "#212529" : "#ffffff",
						}}
						onMouseOver={() => setOver1("card2")}
						onMouseOut={() => setOver1(null)}
					>
						<div className="py-5">
							<img
								src={over1 === "card2" ? technology2 : isDark ? technology : technologyd}
								style={{ opacity: "1", transition: " opacity 3s ease-in" }}
								alt="icon"
							/>
						</div>
						<div className="card-body p-0">
							<h5 className="card-title  fw-bold">Technology</h5>
							<p className="card-text p-4" style={paraStyle2}>
								We are a technological utopia; constantly evolving and adapting to changes in tech.
								Our paramount intent is to reach the zeniths of new age technology.
							</p>
						</div>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="col-md-12 col-lg-4 ">
					<div
						className="card rounded-4 cardgroup text-center mt-5 pb-4"
						style={{
							height: "450px",
							backgroundColor: isDark ? "#212529" : "#ffffff",
						}}
						onMouseOver={() => setOver1("card3")}
						onMouseOut={() => setOver1(null)}
					>
						<div className="py-5">
							<img
								src={over1 === "card3" ? research2 : isDark ? research : researchd}
								alt="icon"
								className="my-3"
							/>
						</div>
						<div className="card-body p-0">
							<h5 className="card-title fw-bold">Research</h5>
							<p className="card-text p-4" style={paraStyle3}>
								At the current state where the world lies, innovation is inevitable, thus we strive to aspire,
								understand and develop ideas that can be the genesis of new ideation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}
