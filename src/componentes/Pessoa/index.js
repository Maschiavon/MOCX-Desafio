import './Pessoa.css'

const Pessoa = ({ nome, imagem, cpf, datanascimento, corDeFundo }) => {
    return (
    <div className="pessoa">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cpf}</h5>
            <h5>{datanascimento}</h5>
        </div>
    </div>
    )
}

export default Pessoa