import { FaWindowClose } from 'react-icons/fa'

export function Modal() {
    return (
        <div className='modal' id="modal">
            <div className='modal-sub-container'>
                <div className='modal-body'>
                    <div className='modal-title'>
                        <h1 id="modal-title"></h1>
                        <button onClick={(e) => (document.getElementById("modal").style.opacity = "0",
                            document.getElementById("modal").style.visibility = "hidden")}><FaWindowClose /></button>
                    </div>
                    <a id="modal-url" target="_blank" href="">
                        <img id="modal-img" alt="imagen del modal..." />
                    </a>
                </div>
            </div>
        </div>
    )
}