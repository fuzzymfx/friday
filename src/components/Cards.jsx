import React, { useEffect } from "react";
import corda1 from "../assets/img/corda1.svg";
import polkadot1 from "../assets/img/polkadot1.svg";
import hyperledger1 from "../assets/img/hyperledger1.svg";
import ethereum1 from "../assets/img/ethereum1.svg";
import corda from "../assets/img/corda2.svg";
import polkadot from "../assets/img/polkadot2.svg";
import hyperledger from "../assets/img/hyperledger2.svg";
import ethereum from "../assets/img/ethereum2.svg";
import Aos from "aos";
var dark;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark = true;
}

export default function Cards() {
	const [isDark, setIsDark] = React.useState(dark);

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		event.matches ? setIsDark(true) : setIsDark(false);
	});
	useEffect(() => {
		Aos.init();
	}, []);

	const imgsmall = { transform: "scale(0.5)" };
	return (
		<>
			<div className="container">

				<div className="row mb-5">
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
					>
						<div>
							<img src={isDark ? corda1 : corda} alt="ledger" style={imgsmall} />
							<div className="fs-3 fw-bold text-secondary">
								{" "}
								Corda
							</div>
							<div className="p-2">
								{" "}

								Corda’s development framework enables the building of future-proof apps quickly in financial services and other regulated markets.
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
					>
						<div>
							<img src={
								isDark ? polkadot1 : polkadot

							} alt="ledger" style={imgsmall} />
							<div className="fs-3 fw-bold text-secondary" >
								{" "}
								Polkadot
							</div>
							<div className="p-2">
								{" "}
								Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains.
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center"
					>
						<div>
							<img src={
								isDark ? hyperledger1 : hyperledger
							} alt="ledger" style={imgsmall} />
							<div className="fs-3 fw-bold text-secondary" >
								{" "}
								Hyperledger
							</div>
							<div className="p-2">
								{" "}
								The open global ecosystem for enterprise grade blockchain technologies.
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
					>
						<div>
							<img src={
								isDark ? ethereum1 : ethereum
							} alt="ethereum" style={imgsmall} />
							<div className="fs-3 fw-bold text-secondary">
								Ethereum
							</div>
							<div className="p-2" >
								Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>);
}

