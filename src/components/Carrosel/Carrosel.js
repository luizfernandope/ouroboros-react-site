import seta from '../../img/seta.svg';
import './Carrosel.css'

function Carrosel(){

    let index = 0;

    const foto = ['https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
                  'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
                  'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80']

    setInterval( function() {
        /*nextImage();*/
    }, 6000)

    function nextImage(){
        if(index===2){
            index = 0;
        }
        else{
            index = index+1;
        }
        document.getElementById("foto").src = foto[index];
    }
    function backImage(){
        if(index===0){
            index = 2;
        }
        else{
            index = index-1;
        }
        document.getElementById("foto").src = foto[index];
    }


    return(
        <>
            <div className="carrosel">
                <div className="esquerda" onClick={backImage}>
                    <img src={seta} alt="foto anterior" className="seta"/>
                </div>

                <div className="direita" id="dir" onClick={nextImage}>
                    <img src={seta} alt="proxima foto" className="seta" id="direita"/>
                </div>

                <img src={foto[0]} alt="foto principal" id='foto'/>
            </div>
            
        </>
    )
}

export default Carrosel