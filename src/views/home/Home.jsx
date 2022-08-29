import React from 'react';
import argsp from '../../imagenes/argspain.png';
import brpt from '../../imagenes/brazil_flags_portugal.jpg';
import enuk from '../../imagenes/flags_of_the_united_states_and_the_united_kingdom_clip_art.jpg';
import Navb from '../../components/Navegacion';
import Slider from './slider/Sliderhome';
import './Homecss.css';
import { Card, Button } from 'react-bootstrap';
const Home = () => {
	return (
		<div className="container">
			<Navb />
			<main role="main" className="flex-shrink-0 mt-5 ">
				<div className="container" style={{ display: 'flex' }}>
					<div className="row" style={{ display: 'flex', margin: 'auto' }}>
						<Slider/>
					</div>
				</div>
				<body>
					
				<section className="sectioncolor">
				<div className="container" style={{ display: 'flex' }}>
					<div className="row" style={{ display: 'flex', margin: 'auto' }}>
							<h1 style={{textAlign: 'center'}}> Nuestros cursos </h1>
							<p style={{textAlign: 'center'}}>Hacenos tu consulta para poder orientarte
							 más acerca de cual es el más indicado para vos.</p>
					</div>
				</div>
				<div className="container cont_servicios">
					<div className="row">
						<div className="col-lg-4 card_lang">
							<Card style={{ width: '20rem', display: 'flex', margin: 'auto' }}>
								<Card.Img id="img_lang" src={argsp} alt="argspainimg" />
								<Card.Body>
									<Card.Title>Clases de español</Card.Title>
									<Card.Text>
										Probá tus habilidades en el español y diseñamos un plan de estudio perfecto para vos, para reforzar tus conocimientos y a la vez ampliarlos.
								</Card.Text>
									<Button variant="primary">Leer más &raquo;</Button>
								</Card.Body>
							</Card>
						</div>

						<div className="col-lg-4 card_lang">
							<Card style={{ width: '20rem', display: 'flex', margin: 'auto' }}>
								<Card.Img id="img_lang" src={brpt} alt="brptimg" />
								<Card.Body>
									<Card.Title>Clases de portugés</Card.Title>
									<Card.Text>
										Clases a medida de portugés para extranjeros, diseñadas para conseguir un excelente uso del idioma en cualquier ciudad de habla portuguesa.
									</Card.Text>
									<Button variant="primary">Leer más &raquo;</Button>
								</Card.Body>
							</Card>
						</div>

						<div className="col-lg-4 card_lang" >
							<Card style={{ width: '20rem', display: 'flex', margin: 'auto' }}>
								<Card.Img id="img_lang" src={enuk} alt="enukimg" />
								<Card.Body>
									<Card.Title>Clases de inglés</Card.Title>
									<Card.Text>
										Clases a medida de inglés para extranjeros, diseñadas para conseguir un excelente uso del idioma en cualquier ciudad de habla inglesa.
								</Card.Text>
									<Button variant="primary">Leer más &raquo;</Button>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
				</section>
				</body>
			</main>
		</div>
	)
}

export default Home
