import logo from '../../img/logo.png'
import menu from '../../img/menu.svg'
import close from '../../img/close.svg'
import './style.css'

function Header(){

    const link = '#'

    function openMenu(){
    const btnMenu = document.getElementById("btnMenu");
    const menuMobile = document.getElementById("menu_mobile");
        btnMenu.style.display = "none";
        menuMobile.style.display = "block";
        menuMobile.style.right = "0";
    }

    function closeMenu(){
    const btnMenu = document.getElementById("btnMenu");
    const menuMobile = document.getElementById("menu_mobile");
        menuMobile.style.right = "-100%";
        btnMenu.style.display = "block";
    }

    document.body.onresize = function() {
        const btnMenu = document.getElementById("btnMenu");
        if (document.body.clientWidth > 1000)            
            btnMenu.style.display = "none";
        else
            btnMenu.style.display = "block";
    };

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
            <img src={menu} alt="menu icon" className="menu" id="btnMenu" onClick={openMenu}/>
        </header>


        <div className="menu_hide" id="menu_mobile">
            <img src={close} alt="close icon" className="close_menu" onClick={closeMenu}/>

            <div className='links_header'>
                <a href={link} onClick={closeMenu}>horário de treinos</a>
                <a href={link} onClick={closeMenu}>treinos</a>
                <a href={link} onClick={closeMenu}>unidades</a>
                <a href={link} onClick={closeMenu}>comece agora</a>
            </div>
        </div>
        </div>
    )
}

export default Header;