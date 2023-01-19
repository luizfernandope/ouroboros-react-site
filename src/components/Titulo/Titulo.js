import './Titulo.css'

function Titulo({text, id}){
    return(
        <div className="titulo" id={id}>
            <h1>{text}</h1>
        </div>
    )
}

export default Titulo;