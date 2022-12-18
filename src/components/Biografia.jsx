import './biografia.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Biografia = () => {
    const navigate = useNavigate();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={"/images/Danna Blenk/perfil.jpg"} alt="artista" className="img-perfil img-fluid"/>
                </div>
                <div className="col-md-5">
                    <h1 className="title-perfil">Danna Blenk</h1>
                    <p className="text-perfil">Nació en un pequeño pueblo de Londres, donde desde muy temprana edad mostró su pasión por el arte. A los 18 años decidió mudarse a Buenos Aires para estudiar en la prestigiosa Escuela de Bellas Arte, donde se especializó en el arte abstracto.
                        Desde entonces, Danna ha expuesto sus obras en diversos lugares de Argentina, siendo reconocida por su habilidad para crear piezas y texturas que juegan con los colores y las formas, siempre en busca de transmitir emociones y sensaciones a través de su maravilloso arte.
                        Su trabajo ha sido galardonado en numerosas ocasiones, y ha sido invitada a participar en ferias y festivales de arte en distintos países, lo que le ha permitido consolidarse como una de las artistas más destacadas de su generación.
                        Danna siempre ha seguido su corazón y su pasión por el arte abstracto, convirtiéndose en una figura importante en la escena artística.
                        Su talento y dedicación le han permitido alcanzar el éxito y la admiración de muchos, siendo así una gran fuente de inspiración para aquellos que aman el arte.</p>
                </div>
                <div>
                    <button className="btn me-5" type="submit" onClick={() => navigate(-1)}><i className="bi bi-box-arrow-left" style={{ fontSize: "30px", color: "#716e6e" }}></i></button>
                </div>
            </div>
        </div>
    )

}

export default Biografia;