import { Link } from 'react-router-dom';
import flagBrazil from '../imgs/flag-brasil.svg';
import flagUSA from '../imgs/flag-usa.svg';


const Header = () => {
    return (
        <div className="section header-wrapper">
            <div className="navbar-header">
                <a href="/" className="logo">Pedro Trotta</a>

                <div className="navigation-refs">
                    <a href="/">About</a>
                    <a href="/">My Work</a>
                    <a href="/">Projects</a>
                    <a href="https://wa.me/67999710088" target="_blank" rel="noreferrer">Contact Me</a>
                </div>

                <div className="translate-region">
                    <Link to="/pt"><div className="flag-region">
                        <img src={flagBrazil} alt="" />BR
                        </div></Link>
                    <Link to="/"><div className="flag-region">
                        <img src={flagUSA} alt=''/>USA
                        </div></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;