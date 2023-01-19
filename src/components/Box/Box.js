import './Box.css'

function Box({image,title, description}){

    const link = '#'

    return(
        <>
            <div className="box">
                <img src={image} alt="foto box"/>

                <h2>{title}</h2>
                <p>{description}</p>

                <a href={link}>veja mais</a>
            </div>

        
        </>
    )
}

export default Box;