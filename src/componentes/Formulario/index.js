import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [imagem, setImagem] = useState('')
    const [data, setData] = useState('')
    //const [time, setTime] = useState('')

    function ValidarCpf(cpf){
        return true
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()

        if (ValidarCpf(cpf)){
            props.aoNovaPessoaAdicionada({nome, cpf, imagem, data})
        } else {

        }
        
        setNome('')
        setCpf('')
        setData('')
        setImagem('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o registro da pessoa:</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true}
                    label="CPF" 
                    placeholder="Digite seu cpf"
                    valor={cpf}
                    aoAlterado={valor => setCpf(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite a url da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto 
                    label="Data Nascimento" 
                    placeholder="Digite a data"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                {/* <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                /> */}
                <Botao>
                    Criar Pessoa
                </Botao>
            </form>
        </section>
    )
}

export default Formulario