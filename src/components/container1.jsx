const Container1 = () => {
    return(
        <div className="section">
            <div className="card-info">
                <div className="wrapper-info">
                    <div className="name-links">
                        <h1>Pedro Trotta</h1>
                        <div className="social-box">
                            <a href="https://www.linkedin.com/in/pedro-trota-853b17323/" target="_blank" rel="noreferrer" className="social">
                            <i className='bx bxl-linkedin'></i>
                            </a>
                            <a href="https://discord.gg/underr" rel="noreferrer" target="_blank" className="social"><i className='bx bxl-discord-alt'></i></a>
                            <a href="https://wa.me/67999710088" target="_blank" rel="noreferrer" className="social"><i className='bx bxl-whatsapp' ></i></a>
                            <a href="mailto:pedroforte1911@gmail.com" className="social"><i className='bx bxl-gmail' ></i></a>
                        </div>
                    </div>
                    <div className="local">
                    <i className='bx bx-map-pin' ></i>
                    <a href="https://www.google.com/maps/place/Campo+Grande,+State+of+Mato+Grosso+do+Sul/data=!4m2!3m1!1s0x9486e6726b2b9f27:0xf5a8469ebc84d2c1?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noreferrer">Campo Grande - Mato Grosso do Sul</a>
                    </div>
                </div>
                <div className="intro-wrapper">
                I'm 23 year old Software Engineer. I have been programming for more than 5 years. I create professional websites.
                </div>
            {/* <div className="linkedin-wrapper mw-50 badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="pedro-trota-853b17323" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/pedro-trota-853b17323/en?trk=profile-badge">Hit me up!</a></div> */}
            </div>
        </div>
    )
}

export default Container1;