import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im'
import { FaImages } from 'react-icons/fa'

import { useDispatch } from 'react-redux';
import { changeUrls, changeTitle } from '../redux/userSlice';


export function Project(props) {

    const dispatch = useDispatch();
    const lenguajes = []

    function comenzarCarrusel() {
        let count = 0
        let slides = document.querySelectorAll('.slide');

        function showSlide(position) {
            document.getElementById(slides[position].id).style.visibility = 'visible';
            document.getElementById(slides[position].id).style.opacity = '1';
        }

        showSlide(count)
    }

    for (let i = 0; i < props.tec.length; i++) {
        lenguajes.push(<span key={i}>{props.tec[i]}</span>)
    }

    return (
        <div
            className='projects-card'>

            <div className='projects-link-external'>
                <div>
                    {props.github ? <a href={props.github} target='_blank'><label><BsGithub /></label></a> : ""}
                    {props.link ? <a href={props.link} target='_blank'><label><BiLinkExternal /></label></a> : ""}
                    {props.imgs ? <button onClick={() => (document.getElementById('modal').style.visibility = 'visible',
                        document.getElementById('modal').style.opacity = 1, comenzarCarrusel(),
                        dispatch(changeUrls(props.imgs)), dispatch(changeTitle(props.title)))}><FaImages /></button> : ""}

                    {props.none ? <a href={props.link} target='_blank'><label><ImBlocked /></label></a> : ""}
                </div>
            </div>

            <div className='projects-card-content'>
                <img className='projects-card-img' src={props.img} alt="" />

                <div className='projects-card-body'>
                    <div className='projects-card-body-des'>
                        <h2>{props.title}</h2>
                        <p>{props.des}</p>
                    </div>
                    <div className='projects-card-body-tec'>
                        {lenguajes}
                    </div>
                </div>
            </div>
        </div>
    )
}