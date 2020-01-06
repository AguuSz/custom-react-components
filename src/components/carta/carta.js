import React from 'react';
import './carta.styles.scss';

const Carta = ({ className, img, children, ...props }) => (
    <>
        <div className={`carta ${className}`}>
            <img className="img" src={`${img}`} alt={props.alternativo} />
            <div className="texto">
                <h2 className="titulo">{props.titulo}</h2>
                <p className="parrafo">{children}</p>
            </div>
        </div>
    </>
)

export default Carta;