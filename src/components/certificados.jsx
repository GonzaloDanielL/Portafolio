import { useDispatch } from 'react-redux';
import { changeUrls, changeTitle } from '../redux/userSlice';

export function Certificados(props) {
    const dispatch = useDispatch();

    function comenzarCarrusel() {
        let count = 0
        let slides = document.querySelectorAll('.slide');

        function showSlide(position) {
            document.getElementById(slides[position].id).style.visibility = 'visible';
            document.getElementById(slides[position].id).style.opacity = '1';
        }

        showSlide(count)
    }

    return (
        <div
            className='certificados-card'>
            <div className='cer-card-title'>
                <h2>{props.title}</h2>
                <span>Por: {props.escuela}</span>
            </div>
            <div className='cer-card-img'>
                <button onClick={() =>
                (document.getElementById('modal').style.visibility = 'visible',
                document.getElementById('modal').style.opacity = 1, comenzarCarrusel(),
                dispatch(changeUrls(props.img)), dispatch(changeTitle(props.title)))}>
                    <img src={props.url} alt="Imagen del certificado..." />
                </button>
            </div>
        </div>
    )
}