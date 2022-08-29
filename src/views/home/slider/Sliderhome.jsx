import React from 'react';
import cl1 from '../../../imagenes/student1.jpg';
import cl2 from '../../../imagenes/student2.jpg';
import cl3 from '../../../imagenes/student3.jpg';
import { Carousel } from 'react-bootstrap'
import './Slidercss.css'
function Sliderhome() {
    return (
        <div className="slider_width slider_height item-position" >
            <Carousel className="justify">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={cl1}
                        alt="First slide"
                        height="2000"
                        width="1500"
                    />
                    <Carousel.Caption>
                        <h3>Clases de nivel</h3>
                        <p>Grupos de estudio serán armados con gente de tu mismo nivel.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={cl2}
                        alt="Second slide"
                        height="2000"
                        width="1500"
                    />
                    <Carousel.Caption>
                        <h3>Los mejores profesores</h3>
                        <p>Las clases son dadas por profesores de muy alto nivel y calidad humana.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={cl3}
                        alt="Third slide"
                        height="2000"
                        width="1500"
                    />
                    <Carousel.Caption>
                        <h3>Material disponible</h3>
                        <p>Ponemos a disposición de los estudiantes todo el material necesario para realizar la cursada de una manera optima.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Sliderhome
