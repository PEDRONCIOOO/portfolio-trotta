import { Link } from 'react-router-dom';


const HeaderPT = () => {
    return (
        <div className="section header-wrapper">
            <div className="navbar-header">
                <a href="/" className="logo">Pedro Trotta</a>

                <div className="navigation-refs">
                    <a href="/">Sobre</a>
                    <a href="/">Meu Trabalho</a>
                    <a href="/">Projetos</a>
                    <a href="https://wa.me/67999710088" target="_blank" rel="noreferrer">Whastapp</a>
                </div>

                <div className="translate-region">
                    <Link to="/pt">BR</Link>
                    <Link to="/">USA</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderPT;