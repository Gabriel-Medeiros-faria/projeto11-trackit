import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.jpg"
import gif from "../img/cartoon-snail-loading-loading-gif-animation_2734139.gif"
import { AuthContext } from "../contexts/Auth"

export default function Home() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false)
    const {setUser, token, setToken} = useContext(AuthContext)
    const [disabledInput, setDisabled] = useState(false)

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
            setDisabled(true)
            promisse.then((resp) => deuCerto(resp))
            promisse.catch((error) => deuErrado(error.response.status))


        }

        else {
            alert("Preencha todos os campos")
        }


    }

    function deuCerto(resp) {
        setDisabled(false)
        setUser(resp.data)
        setToken(resp.data.token)
        setLoading(false)
        navigate('/hoje')
    }

    function deuErrado(error) {
        console.log(error)
        setDisabled(false)
        setLoading(false)
        if (error === 422) {
            alert("Sua senha ou email é inválida")
        }
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} />
                </Logo>
                <CamposLogin>
                    <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} disabled={disabledInput}  data-identifier="input-email"></input>
                    <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} disabled={disabledInput} data-identifier="input-password"></input>
                    <div className="login" onClick={() => Post() } disabled={disabledInput} data-identifier="login-btn">
                        {loading ? <img src={gif} /> : "Entrar"}
                    </div>
                </CamposLogin>
                <Link to="/cadastro">
                    <Cadastro data-identifier="sign-up-action">
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