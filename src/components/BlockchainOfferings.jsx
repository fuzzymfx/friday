import React, { useEffect } from "react";
import nft from "../assets/img/blockchainofferings/nft.svg";
import nft2 from "../assets/img/blockchainofferings/nft2.svg";
import circuit from "../assets/img/blockchainofferings/circuit.svg";
import circuit2 from "../assets/img/blockchainofferings/circuit2.svg";
import block from "../assets/img/blockchainofferings/block.svg";
import block2 from "../assets/img/blockchainofferings/block2.svg";
import wallet from "../assets/img/blockchainofferings/wallet.svg";
import wallet2 from "../assets/img/blockchainofferings/wallet2.svg";
import settings from "../assets/img/blockchainofferings/settings.svg";
import settings2 from "../assets/img/blockchainofferings/settings2.svg";
import transfer from "../assets/img/blockchainofferings/transfer.svg";
import transfer2 from "../assets/img/blockchainofferings/transfer2.svg";
import dot from "../assets/img/blockchainofferings/dot.svg";
import dots2 from "../assets/img/blockchainofferings/dots2.svg";
import Aos from "aos";

function BlockchainOfferings() {
	useEffect(() => {
		Aos.init({
			duration: 10000,
		});
	}, []);
	const [over1, setOver1] = React.useState("nft");
	const [main, setMain] = React.useState(null);
	const [innercontent, setInnercontent] = React.useState(
		<>
			<h1 className="text-dark">NFT Development</h1>
			<p className="text-dark inner-content">
				Extemporization of a certain assest in the form of data via the
				inculsion of digitization is technology we all need, Squbix has the
				solutions for the same.
			</p>
		</>
	);
	React.useEffect(() => {
		if (main === "nft")
			setInnercontent(
				<>
					<h1 className="text-dark text-wrap">NFT Development</h1>
					<p className="text-dark inner-content">
						Extemporization of a certain assest in the form of data via the
						inculsion of digitization is technology we all need, Squbix has the
						solutions for the same.
					</p>
				</>
			);
		else if (main === "block")
			setInnercontent(
				<>
					<h1 className="text-dark text-wrap">Private Blockchain</h1>
					<p className="text-dark inner-content">
						Cryptographic data is an acclivity towards the peak that is the
						answer to the mordern day complications. We build and develop
						private blockchains for your orgnisational needs.
					</p>
				</>
			);
		else if (main === "settings")
			setInnercontent(
				<>
					<h1 className="text-dark text-wrap">dApps Development</h1>
					<p className="text-dark inner-content">
						“Decentralised applications on decentralised peer-to-peer network”,
						the implications are as intriguing as they sound, we develop
						ascendable and reliable applicaction for numerous industry
						applications.
					</p>
				</>
			);
		else if (main === "transfer")
			setInnercontent(
				<>
					<h1 className="text-dark text-wrap">
						Decentralized / Centralized Exchange Development
					</h1>
					<p className="text-dark inner-content">
						In contrast to typical financial transactions, which are clandestine
						and conducted through intermediaries with extremely limited insight
						into their activities, DEXs provide total transparency into the
						movement of funds and the processes that facilitate exchange.
					</p>
				</>
			);
		else if (main === "wallet")
			setInnercontent(
				<>
					<h1 className="text-wrap text-dark">Wallet Development</h1>
					<p className="text-dark inner-content">
						We create systems that provide users total control over their cash
						by utilising external private keys. Making them resistant to hacking
						and other potential threats, resulting in the incorporation of an
						exciting feature in the field of decentralised finance.
					</p>
				</>
			);
		else if (main === "circuit")
			setInnercontent(
				<>
					<h1 className="text-wrap text-dark">Smart Contract Development</h1>
					<p className="text-dark inner-content">
						We are enthusiastic about the possibility of using newer ideas in
						automating several aspects of business through the use of smart
						contracts.
					</p>
				</>
			);
	}, [main]);

	return (<>
		<div className="container">
			<div
				data-aos="fade-up"
				data-aos-duration="500"
				className="card mt-5  my-0 p-0"
				style={{
					borderRadius: "20px",
					backgroundColor: "#ffffff",
					height: "100%",
				}}
			>
				<div className="card-body text-dark p-0 mh-100 d-inline-block" style={{
					borderRadius: "20px",
					height: "100%",
				}}>
					<div
						id="carouselExampleCaptions"
						className="carousel slide p-2 m-5 text-wrap "
						data-bs-ride="carousel"
					>
						<div className="row">
							<div className="col-md-2 d-flex align-items-center justify-content-center ">
								<img
									className="mx-3"
									src={
										main === "nft"
											? nft
											: main === "circuit"
												? circuit
												: main === "block"
													? block
													// : main === "digitalwallet"
													// ? digitalwallet
													: main === "wallet"
														? wallet
														: main === "settings"
															? settings
															: main === "transfer"
																? transfer
																: nft
									}
									alt="..."
								/>
							</div>
							<div className="col-md-10">
								<div className="inner-text text-wrap d-inline-block p-3">
									{innercontent}
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center d-none d-md-flex p-4">
						<img
							src={main === "nft" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
						<img
							src={main === "block" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
						<img
							src={main === "settings" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
						<img
							src={main === "transfer" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
						<img
							src={main === "wallet" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
						<img
							src={main === "circuit" ? dots2 : dot}
							alt="..."
							style={{ width: "30px", height: "30px" }}
						/>
					</div>
				</div>
			</div>
			<div
				data-aos="flip-up"
				data-aos-duration="500"

				className="card m-0 my-0 p-0"
				style={{ borderRadius: "20px", backgroundColor: "#212529" }}
			>
				<div
					className="card-body p-0 mx-0 "
					style={{
						backgroundColor: "#212529",
						// borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"
						borderRadius: "40px",
					}}
				>
					<div className="card-body p-0 m-5 "
						style={{
							borderRadius: "20px",
						}
						}
					>
						<div className="row d-flex justify-content-evenly px-2">
							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("nft")}
									onMouseOut={() => setOver1(null)}
									onClick={() => setMain("nft")}
									className="m-3"
									src={over1 === "nft" ? nft2 : nft}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("block")}
									onMouseOut={() => setOver1(null)}
									onClick={() => setMain("block")}
									className="m-3"
									src={over1 === "block" ? block2 : block}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("settings")}
									onMouseOut={() => setOver1(null)}
									onClick={() => setMain("settings")}
									className="m-3"
									src={over1 === "settings" ? settings2 : settings}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("transfer")}
									onMouseOut={() => setOver1(null)}
									onClick={() => setMain("transfer")}
									className="m-3"
									src={over1 === "transfer" ? transfer2 : transfer}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>

							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("wallet")}
									onMouseOut={() => setOver1(null)}
									onClick={() => setMain("wallet")}
									className="m-3"
									src={over1 === "wallet" ? wallet2 : wallet}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
							<div className="d-flex col-lg-1 justify-content-center ">
								<img
									onMouseOver={() => setOver1("circuit")}
									onClick={() => setMain("circuit")}
									onMouseOut={() => setOver1(null)}
									className="m-3"
									src={over1 === "circuit" ? circuit2 : circuit}
									alt="..."
									style={{ width: "80px", height: "80px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default BlockchainOfferings;
