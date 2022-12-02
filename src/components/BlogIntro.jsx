import React from 'react'
import '../assets/css/blog.css';
import '../assets/css/style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dapp from '../assets/img/DAPP.svg';
import NFT from '../assets/img/NFT.svg';
import wallet from '../assets/img/wallet.svg';

export default function CardsIntro() {
	return (
		<div style={{ width: '100%' }}>
			<div>
				<div className='container' >
					<div className="row justify-content-center mx-1" >
						<div className="col-md-4 py-5 " id='techhead'>
							<Card sx={{ maxWidth: 345 }}  >
								<CardMedia
									component="img"
									height="100%"
									image={wallet}
									alt="react js"
								/>
								<CardContent className="cdx">
									{/* <Typography gutterBottom variant="h5" component="div" className="cdt">
										DAPPS
									</Typography> */}
									{/* <Typography variant="body4">
										<ul style={{
											listStyleType: 'none',
										}}>
											<li>Exchange platforms</li>
											<li>Smart Contracts</li>
											<li>Tracking and monitoring systems</li>
											<li>Decentralized finance systems</li>
										</ul>
									</Typography> */}
								</CardContent>
								<CardActions className='cdx' >

									<Button size="small" href="#tech">Explore DAPPs</Button>
								</CardActions>
							</Card>

						</div>
						<div className="col-md-8 py-5" >
							<h2 className='mt-5'>Decentralized Applications</h2>
							<p>
								Decentralized apps are applications that run on a decentralized network. They are not controlled by any single entity, but rather by a network of users. They are also known as DApps. The most popular applications DApps are cryptocurrencies. Many cryptocurrencies can be considered rudimentary versions of dApps, even without smart contract functionality and web interfaces.
							</p>
							<p>
								We have worked with several multinational companies to develop their DAPPS. We have also developed our DAPPS for our clients. We have developed DAPPS for Finance, Health, Education, and many other industries. Some of our most promising products are:  CBDC, a digital currency that is issued by a central bank, SSID, a decentralized identity system, and DEX, a decentralized exchange platform. We have also developed a DAPP for the health industry that allows patients to store their medical records on the blockchain. We have also developed a DAPP for the education industry that lets students maintain their academic records on the blockchain.
							</p>
						</div>
					</div>
					<div className="row justify-content-center mx-1" >
						<div className="col-md-8 py-5" >
							<h2 className='mt-5'>Blockchain Development</h2>
							<p>
								Blockchain applications go far beyond cryptocurrency and bitcoin. Blockchains can be public or private, depending on their use cases. It is a powerful tool that can be to solve a wide variety of problem statements. These applications can be used to solve a wide variety of problems, The applications are predominantly present in the financial, healthcare, education sector, and a lot of other sectors. They can also be used to solve problems in government organizations.
							</p>
							<p>
								We primarily focus on developing blockchain applications for the financial sector. We have developed a blockchain application for the financial sector that allows users to store their financial records on the blockchain. We build private and public blockchains that cater to the needs of our clients. We also build smart contracts that can be used to automate the process of transactions. We also build decentralized exchanges that can be used to trade cryptocurrencies.
							</p>
						</div>
						<div className="col-md-4 py-5 " id='techhead'>
							<Card sx={{ maxWidth: 345 }}  >
								<CardMedia
									component="img"
									height="100%"
									image={dapp}
									alt="react js"
								/>
								<CardContent className="cdx">
									{/* <Typography gutterBottom variant="h5" component="div" className="cdt">
										DAPPS
									</Typography> */}
									{/* <Typography variant="body4">
										<ul style={{
											listStyleType: 'none',
										}}>
											<li>Exchange platforms</li>
											<li>Smart Contracts</li>
											<li>Tracking and monitoring systems</li>
											<li>Decentralized finance systems</li>
										</ul>
									</Typography> */}
								</CardContent>
								<CardActions className='cdx' >

									<Button size="small" href="#tech">Explore public blockhains</Button>
								</CardActions>
							</Card>

						</div>

					</div>
					<div className="row justify-content-center mx-1" >
						<div className="col-md-4 py-5 " id='techhead'>
							<Card sx={{ maxWidth: 345 }}  >
								<CardMedia
									component="img"
									height="100%"
									image={NFT}
									alt="react js"
								/>
								<CardContent className="cdx">
									{/* <Typography gutterBottom variant="h5" component="div" className="cdt">
										DAPPS
									</Typography> */}
									{/* <Typography variant="body4">
										<ul style={{
											listStyleType: 'none',
										}}>
											<li>Exchange platforms</li>
											<li>Smart Contracts</li>
											<li>Tracking and monitoring systems</li>
											<li>Decentralized finance systems</li>
										</ul>
									</Typography> */}
								</CardContent>
								<CardActions className='cdx' >

									<Button size="small" href="#tech">Explore NFTs & SCs</Button>
								</CardActions>
							</Card>

						</div>
						<div className="col-md-8 py-5" >
							<h2 className='mt-5'>NFT & Smart Contract Development</h2>
							<p>
								Non Fungible Tokens (NFTs) are a new type of digital asset that can be used to represent anything. They are unique and can be used to represent digital art, music, videos, and a lot of other artistic varieties. They represent real-world assets like real estate, cars, and other assets. NFTS not only pertains to representing digital collectibles like digital cards, and digital games, but also to representing digital certificates like academic certificates, financial certificates, and other certificates.
							</p>
							<p>
								While Smart Contracts are digital programs stored on a blockchain that run when predetermined conditions are met. Smart contracts have a lot of use cases and can be used to automate a lot of processes. They can be used to automate the process of payments, transactions, and a lot of other processes. They can also be used to automate the process of voting, and a lot of other processes.
							</p>

							<p>
								Squbix has built tradeable digital certificates that can be verified and exchanged on the blockchain. Our certificates can be exchanged for cryptocurrencies and represent real-world assets. We also build smart contracts that can be used to automate the process of transactions. We are building a decentralized exchange that can be used to trade in old goods using smart contracts which run on our blockchain.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div >

	)
}
