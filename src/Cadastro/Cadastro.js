import axios, { AxiosError } from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.jpg"
import gif from "../img/cartoon-snail-loading-loading-gif-animation_2734139.gif"

export default function Cadastro(){

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const[nome, setNome] = useState("")
    const[foto, setFoto] = useState("")
    const navigate = useNavigate()
    const[loading, setLoading] = useState(false)
    const[disabledInput, setDisabledInput] = useState(false)

    function Post(){

        if(email !== "" || senha !== "" || nome !== "" || foto !== ""){
            
            

            let body = {
                email: email,
                name: nome,
                image: foto,
                password: senha
            }

            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            setLoading(true)
            setDisabledInput(true)
            promisse.then(()=> deuCerto())

            promisse.catch((resp)=> deuErrado(resp.response.data.message))

            
        }

        else{
            alert("preencha todos os campos!")
        }
        
    }
    
    function deuCerto(){
            setLoading(false)
            setDisabledInput(false)
            navigate('/')
            alert('cadastro realizado com sucesso')
    }

    function deuErrado(error){
        console.log(error)
        setDisabledInput(false)
        setLoading(false)
        if(error.status === 422){
            alert("Sua imagem ou Email é inválida")
        }
        if(error.status === 409){
            alert("Usuário ja cadastrado")
        }
        
    }

    return(
        <>
        <Container>
                <Logo>
                    <img src={logo}/>
                </Logo>
                <CamposLogin>
                    <input placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} disabled={disabledInput}></input>
                    <input placeholder="Senha" onChange={(e)=> setSenha(e.target.value)} disabled={disabledInput}></input>
                    <input placeholder="Nome" onChange={(e)=> setNome(e.target.value)} disabled={disabledInput}></input>
                    <input placeholder="Foto" onChange={(e)=> setFoto(e.target.value)} disabled={disabledInput}></input>
                    <div className="login" onClick={() => Post()} disabled={disabledInput}>
                        {loading ? <img src={gif}/> : "Cadastrar" }
                    </div>
                </CamposLogin>
                <Link to="/">
                <Cad>
                    Já tem uma conta? Faça login
                </Cad>
                </Link>
            </Container>
        
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Logo = styled.div`
width: 180px;
margin-top: 68px;
margin-bottom: 30px;
`

const CamposLogin = styled.div`
display: flex;
flex-direction: column;
input{
    font-size: 20px;
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: #DBDBDB;
}
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #52B6FF;
    height: 55px;
    font-size: 30px;
    border-radius: 10px;
    margin-bottom: 15px;
}
img{
    width: 95px;
}
`
const Cad = styled.div`
color: #52B6FF;
text-decoration: underline;
font-size: 20px;
`