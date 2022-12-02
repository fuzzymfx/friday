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
import movie from '../assets/img/movie.svg';

export default function Intro() {
	return (
		<div style={{ width: '100%' }}>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="blog-heading p-5">
							<h2 className='text-dark'>DECENTRALIZED
								<br />
								<br />
								TRANSPARENT
								<br />
								<br />
								IMMUTABLE
							</h2>
							<br />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<p className="m-5">
							A problem that has plagued the internet since its inception is:
							<h4>
								"how to store data in a way that is secure, tamper-proof and accessible to all."
							</h4>
							We always ponder as to how do we ensure that our transactions are being processed in a secure manner. What happens when you upload your data on social media? Do the biggest tech giants track you? What about fraud, forgery, questionable lending processes and other issues that affect the centralized banking system?
							Privacy, security and transparency are the biggest concerns.
							<br />
							<br />
							Blockchain is an attempt to address these concerns.
							Blockchain is an immutable, shared, decentralized, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively, without the alteration of all subsequent blocks and the collusion in a business network. It is a  mechanism for storing data in a way that makes system-changes, hacking, and cheating difficult to
							near-impossible.
							<br />
							<br />
							<div className="fs-5 fst-italic fw-lighter">
								We are a team of passionate engineers who are building the future of web and finance using blockchain technology.
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>





	)
}
