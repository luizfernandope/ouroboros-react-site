import logo from '../img/logo.png'
import menu from '../img/menu.svg'

function Header(){

    const link = '#'

    return (
        <div>
        <header>
            <img src={logo} alt="logo" />

            <div className='links_header'>
                <a href={link}>horário de treinos</a>
                <a href={link}>treinos</a>
                <a href={link}>unidades</a>
                <a href={link}>comece agora</a>
            </div>
            <img src={menu} alt="menu icon" className="menu"/>
        </header>
        </div>
    )
}

export default Header;