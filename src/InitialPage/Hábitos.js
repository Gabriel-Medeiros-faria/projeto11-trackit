import styled from "styled-components"
import Header from "./Header"
import Float from "./Float"
import trash from "../img/Vector.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react"
import gif from "../img/cartoon-snail-loading-loading-gif-animation_2734139.gif"
import { AuthContext } from "../contexts/Auth"
export default function Habitos() {

    const daysList = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [arrayDaysSelected, setArrayDaysSelected] = useState([])
    const [valorInput, setValorInput] = useState("")
    const { token } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [arrayRespServer, setArrayRespServer] = useState([])
    const [days, setDays] = useState([])

    console.log(days)
    console.log(arrayRespServer)
    console.log(valorInput)
    console.log(arrayDaysSelected)


    function post() {
        if (valorInput !== "" || arrayDaysSelected !== []) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const body = {
                name: valorInput,
                days: arrayDaysSelected
            }

            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
            setLoading(true)
            promisse.then((resp) => deuCerto(resp))
            promisse.catch((error) => deuErrado(error))
        }
    }



    function deuCerto(resp) {
        setLoading(false)
        console.log(resp)
    }
    function deuErrado(error) {
        console.log(error)
        setLoading(false)
        alert("foi não menó")
    }

    function ObjServer() {
        
        useEffect(() => {
            console.log("executou ObjServer")

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            
            const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            console.log(promisse)
            promisse.then((resp) => FuncionouObjServer(resp.data))
            promisse.catch((error) => console.log(error.response.data))
        }, [])

    }
    ObjServer()

    function FuncionouObjServer(resp) {
        setArrayRespServer(resp)
        for(let i=0;i<resp.length;i++){
            setDays([...days, resp[i].days])
        }
        console.log("executou FuncionouObjServer")
    }


    function SelecionarDias(index) {
        if (!arrayDaysSelected.includes(index)) {
            setArrayDaysSelected([...arrayDaysSelected, index])
        }
        else {
            const newArray = arrayDaysSelected.filter((e) => e !== index)
            setArrayDaysSelected(newArray)
        }
    }


    return (
        <>
            <Header />
            <Container>
                <TopPage>
                    <h1>Meus hábitos</h1>
                    <p>+</p>
                </TopPage>
                <HabitsList>
                    <CreateHabitBox>
                        <input placeholder="nome do hábito" onChange={(e) => setValorInput(e.target.value)}></input>
                        <div className="days">
                            {daysList.map((d, index) => arrayDaysSelected.includes(index)
                                ?
                                <div className="daySelected" onClick={() => SelecionarDias(index)}>
                                    {d}
                                </div>
                                :
                                <div className="day" onClick={() => SelecionarDias(index)}>
                                    {d}
                                </div>
                            )}

                        </div>
                        <div className="finish">
                            <p className="cancel">Cancelar</p>
                            <p className="save" onClick={() => post()}>{loading ? <img src={gif} /> : "Salvar"}</p>
                        </div>
                    </CreateHabitBox>
                    <HabitBox>
                        {arrayRespServer.map((obj) =>
                            <BigBox>
                                <p>{obj.name}</p>
                                <div className="days">
                                    {daysList.map((d, index) => daysList.includes(index)
                                        ?
                                        <div className="daySelected" >
                                            {d}
                                        </div>
                                        :
                                        <div className="day">
                                            {d}
                                        </div>
                                    )}
                                </div>
                                <img src={trash} />

                            </BigBox>)}
                    </HabitBox>
                </HabitsList>


            </Container>
            <Float />
        </>
    )
}

const Container = styled.div`
background-color: #E5E5E5;
margin-top: 70px;
margin-bottom: 70px;
height: 100%;
padding-left: 15px;
padding-right: 15px;
padding-top: 28px;
`
const TopPage = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
h1{
    font-size:22.98px;
    font-family: 'Lexend Deca';
    color: #126BA5;
    font-weight: 400;
}

p{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    font-size: 26.98px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #ffff;
    border-radius: 5px;
}
`
const HabitsList = styled.div`

`
const CreateHabitBox = styled.div`
width: 340px;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
padding: 19px;
input{
    border-color: #D4D4D4;
    font-family: 'Lexend Deca';
    font-size: 19.98px;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 5px;
}
.days{
    display: flex;
}
.day{
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    color: #D4D4D4;
    display: flex;
    font-family: 'Lexend Deca';
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    border-radius: 5px;
    font-weight: 400;
}
.daySelected{
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
    display: flex;
    font-family: 'Lexend Deca';
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    border-radius: 5px;
    font-weight: 400;
    background-color: #CFCFCF;
}
.finish{
    display:flex;
    align-items: center;
    margin-left: 155px;
    margin-top: 30px;
}
.cancel{
    color: #52B6FF;
    font-size: 15.98px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    margin-right: 3px;
}
.save{
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 15.98px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 95px;
}
`
const HabitBox = styled.div`

`
const BigBox = styled.div`
width: 340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
padding-left: 20px;
position: relative;
p{
    font-family: 'Lexend Deca';
    font-size: 19.98px;
    width: 303px;
    height: 45px;
    padding-top: 10px;
    color: #666666;
}
.days{
    display: flex;
}
.day{
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    color: #D4D4D4;
    display: flex;
    font-family: 'Lexend Deca';
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    border-radius: 5px;
    font-weight: 400;
}

img{
width: 15px;
position: absolute;
top: 7px;
right: 7px;
}

`
