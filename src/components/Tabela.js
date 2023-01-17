

function Tabela(){
    
    return(
        <>
        <div className="tabela">
            <table>
            <thead>
            <tr>
                <th>Horário</th>
                <th>Boxe</th>
                <th>Jiu-jitsu</th>
                <th>Cross-fit</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>08:00</td>
                <td>Segunda a sexta</td>
                <td>Segunda a sexta</td>
                <td>Segunda a sexta</td>
            </tr>

            <tr>
                <td>10:00</td>
                <td>Sabado</td>
                <td>Sabado</td>
                <td>Sabado</td>
            </tr>

            <tr>
                <td>16:00</td>
                <td></td>
                <td></td>
                <td>Segunda a sexta</td>
            </tr>

            <tr>
                <td>18:00</td>
                <td></td>
                <td>Segunda a sexta</td>
                <td></td>
            </tr>

            <tr>
                <td>20:00</td>
                <td>Segunda a sexta</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        </table>
        </div>

            <div className="anotacoes_horario">
                <div className="horario">
                    <h3>Horários de funcionamento</h3>
                    <br></br>
                    <p>Segunda a Sexta: 06h às 22h</p>
                    <p>Sábado: 9h às 15h</p>
                    <p>Domingo: Fechado</p>
                </div>
                <div className="observacao">
                    <h3>* Observação</h3>
                    <br></br>
                    <p>Treinos de musculação estão disponíveis a todo momento em que a academia estiver em horário de funcionamento.</p>
                </div>
            </div>
        </>
    )
}

export default Tabela;