/* eslint-disable react/prop-types */

import '../assets/styles/Project.css';

function Project({title, description, technologies, image, link, githubLink, direction}){
    return(
        <div className={`project-container ${direction === 'right' ? 'right-direction' : 'left-direction'}`}>
            <div className='side-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='technologies-list'>
                    {technologies.map((tech, index) => <span className='technologie' key={index}>{tech}</span>)}
                </div>
                <div className='links'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <img src="/media/link.png" alt="Project link" />
                    </a>
                    <a href={githubLink} target='_blank' rel='noreferrer'>
                        <img src="/media/github.png" alt="Project Repository" />
                    </a>
                </div>
            </div>
            <div className='image-wrapper'>
                <img src={image} alt="Project image" />
            </div>
        </div>
    )
}

export default Project;