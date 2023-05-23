import Pessoa from '../Pessoa'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const css2 = { borderColor: props.corPrimaria }
    return(
        //Se houver mais de um colaborar ele exibe a seção
        (props.pessoas.length > 0) && 
        <section className="time" style={css}> 
            <h3 style={css2}>{props.nome}</h3>
            <div className="colaboradores">
                {props.pessoas.map( pessoa =>
                    <Pessoa corDeFundo={props.corPrimaria}
                                 key={pessoa.nome}
                                nome={pessoa.nome} 
                                cpf={pessoa.cpf}   
                                imagem={pessoa.imagem}
                                datanascimento={pessoa.datanascimento}
                    />)
                }
            </div>
        </section>
    )
}

export default Time