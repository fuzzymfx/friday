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
							<h2 className='text-secondary'>DECENTRALIZATION
								<br />
								<br />
								TRANSPARENCY
								<br />
								<br />
								IMMUTABILITY</h2>
							<br />
							<p className="m-5">Blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively, without the alteration of all subsequent blocks and the collusion of the network.</p>

						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image={read}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									READ
								</Typography>
								<Typography variant="body2" color="text.secondary">
									We are a team of blockchain enthusiasts who are passionate about the technology and its potential to change the world.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</div>
					<div className="col-md-4">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image={react}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									REACT
								</Typography>
								<Typography variant="body2" color="text.secondary">
									We are a team of blockchain enthusiasts who are passionate about the technology and its potential to change the world.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</div>
					<div className="col-md-4">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image={movie}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									MOVIE
								</Typography>
								<Typography variant="body2" color="text.secondary">
									We are a team of blockchain enthusiasts who are passionate about the technology and its potential to change the world.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</div>
				</div>
			</div>
		</div>





	)
}
