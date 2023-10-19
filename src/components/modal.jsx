import { AiFillLeftSquare, AiFillRightSquare, AiOutlineCloseSquare } from 'react-icons/AI';
import { useSelector } from 'react-redux';

export function Modal() {
    const user = useSelector((state) => state.user)
    let imagenes = user.urlImages
    let title = user.titleModal
    let list = []
    let count = 0

    function cerrarModal() {
        count = 0;
        document.getElementById('modal').style.visibility = 'hidden';
        document.getElementById('modal').style.opacity = 0;

        let listimgs = document.querySelectorAll('.slide')

        for (let i = 0; i < imagenes.length; i++) {
            document.getElementById(listimgs[i].id).style.visibility = 'hidden';
            document.getElementById(listimgs[i].id).style.opacity = 0;
        }
    }

    function left() {
        let slides = document.querySelectorAll('.slide');
        document.getElementById(slides[count].id).style.visibility = 'hidden';
        document.getElementById(slides[count].id).style.opacity = '0';

        count--;
        if (count < 0) {
            count = (slides.length - 1)
        }

        document.getElementById(slides[count].id).style.visibility = 'visible';
        document.getElementById(slides[count].id).style.opacity = '1';
    }

    function right() {
        let slides = document.querySelectorAll('.slide');
        document.getElementById(slides[count].id).style.visibility = 'hidden';
        document.getElementById(slides[count].id).style.opacity = '0';

        count++;
        if (count === slides.length) {
            count = 0;
        }

        document.getElementById(slides[count].id).style.visibility = 'visible';
        document.getElementById(slides[count].id).style.opacity = '1';
    }

    for (let i = 0; i < imagenes.length; i++) {
        list.push(<div key={i + 1} className="slide" id={"slide" + i}>
            <img src={imagenes[i]} alt="" />
        </div>)
    }

    return (
        <div className='modal' id='modal'>
            <div className='modal-container'>
                <div className='modal-cabecera'>
                    <h2 className='modal-title'>{title}</h2>
                    <button onClick={() => (cerrarModal())}><AiOutlineCloseSquare /></button>
                </div>
                <div className='modal-content'>

                    <div className="carrusel-container" id="carrusel-container">
                        <div className="carrusel">
                            {list}
                        </div>
                        <div className="btn left" id="btnleft">
                            <button onClick={() => { left() }}><AiFillLeftSquare /></button>
                        </div>
                        <div className="btn right" id="btnright">
                            <button onClick={() => { right() }}><AiFillRightSquare /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}