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
                    <a href="/indexPortuguese">BR</a>
                    <a href="/">USA</a>
                </div>
            </div>
        </div>
    )
}

export default Header;