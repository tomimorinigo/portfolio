/* eslint-disable react/prop-types */
import '../assets/styles/AsideSocial.css';

function AsideSocial({scrollState}) {
  return (
    <aside className={scrollState ? 'no-show-aside' : 'aside-social'}>
      <a className='social-icon' href="https://github.com/tomimorinigo" target='_blank' rel='noreferrer'>
        <img src="/media/github.png" alt="GitHub Profile" />
      </a>
      <a className='social-icon'  href="https://www.linkedin.com/in/tomas-morinigo-3508a9204/" target='_blank' rel='noreferrer'>
      <img src="/media/linkedin.png" alt="Linkedin Profile" />
      </a>
      <a className='social-icon' href="mailto:morinigotomas1@gmail.com">
      <img src="/media/email.png" alt="GitHub Profile" />
      </a>
      <hr className="white-line" />
    </aside>
  );
}

export default AsideSocial;