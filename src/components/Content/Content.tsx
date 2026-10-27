// Importação do CSS
import "./Content.css"
import "../../StylesResponsive.css"

import { useNavigate } from "react-router-dom"

// Importação de Imagens
import IconeReceitas from "../../assets/imagens/Icons/receita.png"


function Content(){
    const navigate = useNavigate()

    function acessarReceitas(){
        navigate("/receitas");
    }

    function acessarDespesas(){
        navigate("/despesas")
    }




    return(
        <>
            <div className="container">
                <div className="container-cards">
                    <div className="card card-receitas">
                        <img src={IconeReceitas} alt="" className="icon-cards" />
                        <span className="content-titulos"> Receitas </span>
                        <span className="valores-positivos"> R$ 10.000 </span>
                    </div>

                    <div className="card card-despesas">
                        <img src={IconeReceitas} alt=""  className="icon-cards"/>
                         <span className="content-titulos"> Despesas </span>
                        <span className="valores-negativos"> R$ 2.000 </span>
                    </div>

                    <div className="card card-saldo">
                        <img src={IconeReceitas} alt=""  className="icon-cards"/>
                         <span className="content-titulos"> Saldo </span>
                        <span className="saldo-total"> R$ 100.000 </span>
                    </div>

                    <div className="card card-periodo" >
                        {/* <img src={IconePeriodo} alt="" /> */}
                         <span className="content-titulos"> Período </span>
                         <span className="content-titulos"> Janeiro </span>

                    </div>
                </div>
            </div>

            <div className="container-receitas-despesas-relatorio">
                <input type="submit" value="Receitas" id="btn-receitas" onClick={acessarReceitas}/>
                <input type="submit" value="Despesas" id="btn-despesas" onClick={acessarDespesas}/>
            </div>
        
        </>
    )
}
export default Content