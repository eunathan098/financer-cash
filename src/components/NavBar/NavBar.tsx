// Importação do CSS
import "./NavBar.css"

// Importação de Imagens
import LogotipoNotifications from "../../assets/imagens/Icons/Notifications.png"
import LogotipoUser from "../../assets/imagens/Icons/user.png"


function NavBar(){
    return(
        <>
            <nav>
                <div className="container-name">
                    <span className="header-title"> Olá, Nathan!</span>
                    <span className="header-subtitle"> Aqui esta um resumo da sua movimentação financeira </span>
                </div>

                <div className="container-perfil-notifications">
                    <img src={LogotipoNotifications} alt="logotipo-notifications" id="icon-notifications"/>
                    <img src={LogotipoUser} alt="logotipo-user" id="icon-user"/>

                </div>
            </nav>
        
        
        </>
    )
}
export default NavBar