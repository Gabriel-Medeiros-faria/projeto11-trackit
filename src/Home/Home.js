import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.jpg"
import gif from "../img/cartoon-snail-loading-loading-gif-animation_2734139.gif"

export default function Home() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function Post() {
        if (email !== "" || senha !== "") {

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            let body = {
                email: email,
                password: senha
            }

            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body, config)
            setLoading(true)
            promisse.then((resp) => deuCerto(resp))
            promisse.catch((error) => deuErrado(error.response.status))


        }

        else {
            alert("Preencha todos os campos")
        }


    }

    function deuCerto(resp) {
        setToken(resp.data.token)
        setLoading(false)
    }

    function deuErrado(error) {
        console.log(error)
        setLoading(false)
        if (error === 422) {
            alert("Sua senha ou email é inválida")
        }
        if (error === 409) {
            alert("Usuário ja cadastrado")
        }
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} />
                </Logo>
                <CamposLogin>
                    <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
                    <div className="login" onClick={() => Post()}>
                        {loading ? <img src={gif} /> : "Entrar"}
                    </div>
                </CamposLogin>
                <Link to="/cadastro">
                    <Cadastro>
                        Não tem uma conta? Cadastre-se
                    </Cadastro>
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

const Cadastro = styled.div`
color: #52B6FF;
text-decoration: underline;
font-size: 20px;

`