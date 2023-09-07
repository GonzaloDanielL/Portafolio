import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/AI'


export function Project(props) {
    const lenguajes = []
    for (let i = 0; i < props.tec.length; i++) {
        lenguajes.push(<span key={i}>{props.tec[i]}</span>)

    }

    return (
        <div
            className='projects-card'>

            <div className='projects-link-external'>
                {props.tipo == "enlace" ?
                    <div>
                        <a href={props.link} target='_blank'>
                            <label><BiLinkExternal /></label>
                        </a>
                        <a href={props.github} target='_blank'>
                            <label><BsGithub /></label>
                        </a>
                    </div>
                    : props.tipo == "bloqueado" ?
                        <div>
                            <a>
                                <label><AiOutlineClose /></label>
                            </a>
                        </div>
                        :
                        <div>
                            <a href={props.github} target='_blank'>
                                <label><BsGithub /></label>
                            </a>
                        </div>
                }
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