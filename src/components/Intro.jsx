import React from 'react'
import '../assets/css/blog.css';
import '../assets/css/style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import read from '../assets/img/read.svg';
import react from '../assets/img/react.svg';
import btc from '../assets/img/bitcoin-transfer.svg';
import think from '../assets/img/think.svg';
import { fontFamily } from '@mui/system';

export default function Intro() {
	return (
		<div style={{ width: '100%' }}>
			<div className="container">
				<div className="row">
					<h1 className=""
						style={{

							fontSize: '64px',
							fontWeight: '600',
							color: '#3f3d56',
							marginTop: '2rem',
							marginBottom: '2rem',
							// textAlign: 'center',
							width: '100%',
							// fontFamily: 'Quicksand'
						}}
					>WELCOME TO SQUBIX DIGITAL</h1>
					<div className="col-md-8">
						<p className="m-5">
							A problem that has plagued the internet since its inception is:
							<p className='text-secondary fs-5'>
								how to store data in a way that is <b>
									secure,</b><b> tamper-proof,</b> and <b> accessible </b>
								to all.
							</p>
							We always ponder as to how do we ensure that our transactions are being processed in a secure manner. What happens when you upload your data on social media? Do the biggest tech giants track you? What about fraud, forgery, questionable lending processes and other issues that affect the centralized banking system?
							Privacy, security and transparency are the biggest concerns.
							<br />
							<br />
							Blockchain is an attempt to address these concerns.
							Blockchain is an immutable, shared, decentralized, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively, without the alteration of all subsequent blocks in a business network. It is a  mechanism for storing data in a way that makes system-changes, hacking, and cheating difficult to
							near-impossible.
							<br />
							<br />
							<div className="fs-5 fst-italic fw-light">
								We are a team of passionate engineers who are building the future of web and finance using blockchain technology.
							</div>
						</p>
					</div>
					<div className="col-md-4">
						<img src={think} alt="bitcoin transfer" style={{ width: '100%', height: '100%' }} />
						{/* <Card sx={{ maxWidth: 750 }}>
							<CardMedia
								component="img"
								height="100%"
								image={btc}
								alt="bticoin transfer"
							/>
						</Card> */}
					</div>
				</div>
			</div>
		</div>
	)
}
