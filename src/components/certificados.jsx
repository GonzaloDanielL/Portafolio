import { useState } from "react";
import { FaWindowClose } from 'react-icons/fa'

export function Certificados(props) {
    return (
        <div className='certificados-card'>
            <div className='cer-card-title'>
                <h2>{props.title}</h2>
                <p>Por: {props.escuela}</p>
            </div>
            <div className='cer-card-img'>
                <button onClick={(e) =>
                (document.getElementById("modal-title").innerHTML = props.title,
                    document.getElementById("modal-img").src = props.url,
                    document.getElementById("modal-url").href = props.url,
                    document.getElementById("modal").style.visibility = "visible",
                    document.getElementById("modal").style.opacity = "1")}>
                    <img src={props.url} alt="Imagen del certificado..." />
                </button>
            </div>
            <div className='modal' id="modal">
                <div className='modal-sub-container'>
                    <div className='modal-body'>
                        <div className='modal-title'>
                            <h1 id="modal-title"></h1>
                            <button onClick={(e) => (document.getElementById("modal").style.opacity = "0", document.getElementById("modal").style.visibility = "hidden")}><FaWindowClose /></button>
                        </div>
                        <a id="modal-url" target="_blank" href="">
                            <img id="modal-img" alt="imagen del modal..." />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}