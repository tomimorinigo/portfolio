/* eslint-disable react/prop-types */
import '../assets/styles/Loader.css';

function Loader({showContent}){
    return (
        <div className={`loader ${showContent ? 'fade-out' : ''}`}>
            <div className='loader-content'></div>
        </div>
    );
}

export default Loader;