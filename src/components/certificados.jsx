
export function Certificados(props) {
    return (
        <div
            className='certificados-card'>
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
        </div>
    )
}