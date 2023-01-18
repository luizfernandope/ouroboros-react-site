import logo from '../../img/logo_cobra.png'
import email from '../../img/mail.svg'
import phone from '../../img/phone.svg'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'
import whatssap from '../../img/whatsap.svg'
import './Footer.css'

function Footer(){

    const link = '#'

    return(
        <>
        <footer>
            <div className="content">
                <img src={logo} alt="logo ouroboros" className="logo_footer"/>

                <div className="links">
                    <h2>Acesso rápido</h2>
                    <a href={link}>inicio</a>
                    <a href={link}>treinos</a>
                    <a href={link}>horário de treinos</a>
                    <a href={link}>unidades</a>
                </div>

                <div className="contato">
                <h2>Contato</h2>
                    <div className="email">
                        <img src={email} alt="email icon"/>
                        <p>umemail@email.com</p>
                    </div>
                    <div className="phone">
                        <img src={phone} alt="phone icon"/>
                        <p>11 99999-9999</p>
                    </div>

                    <div className="midias">
                        <img src={instagram} alt="instagram icon"/>
                        <img src={facebook} alt="facebook icon"/>
                        <img src={whatssap} alt="whatssap icon"/>
                    </div>
                </div>
            </div>
            <p className="direitos">© Copyright 2023, Luiz Fernando Pegorari - Todos direitos reservados</p>
        </footer>
        </>
    )
}

export default Footer;