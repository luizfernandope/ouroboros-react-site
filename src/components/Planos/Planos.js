import './Planos.css'

function Planos(){

    const link = '#'

    return(
        <div className="planos">

            <div className="card_plano">
                <h3>plano mensal</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href={link} className="saiba_mais">saiba mais</a>
                <p className="preco">R$ 100,00</p>
                <a href={link} className="quero">eu quero</a>
            </div>

            <div className="card_plano">
                <h3>plano trimestral</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href={link} className="saiba_mais">saiba mais</a>
                <p className="preco">R$ 90,00</p>
                <a href={link} className="quero">eu quero</a>
            </div>

            <div className="card_plano">
                <h3>plano anual</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href={link} className="saiba_mais">saiba mais</a>
                <p className="preco">R$ 80,00</p>
                <a href={link} className="quero">eu quero</a>
            </div>
        </div>
    )
}

export default Planos;