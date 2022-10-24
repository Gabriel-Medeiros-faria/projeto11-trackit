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
    const [openCreateHabit, setOpenCreateHabit] = useState(false)
    const [disabledInput, setDisabled] = useState(false)

    function post() {
        if (valorInput !== "" && arrayDaysSelected.length !== 0) {
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
            setDisabled(true)
            promisse.then((resp) => deuCerto(resp))
            promisse.catch((error) => deuErrado(error))
        }
        else {
            alert("coloque o nome do hábito e o(s) dia(s)")
        }
    }


    function deuCerto(resp) {
        setLoading(false)
        setValorInput("")
        setDisabled(false)
        setArrayDaysSelected([])
        setOpenCreateHabit(false)
    }


    function deuErrado(error) {
        setLoading(false)
        alert("foi não menó")
        setDisabled(false)
    }


    function ObjServer() {

        useEffect(() => {

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            promisse.then((resp) => FuncionouObjServer(resp.data))
            promisse.catch((error) => console.log(error.response.data))
        }, [arrayRespServer])
    }
    ObjServer()
    function FuncionouObjServer(resp) {
        setArrayRespServer(resp)
    }


    function ListDays(days) {

        const htmlDays = daysList.map((d, index) => {
            if (days.includes(index)) {
                return <div className="daySelected">
                    {daysList[index]}
                </div>
            }
            else {
                return (
                    <div className="day">
                        {daysList[index]}
                    </div>)
            }
        })
        return htmlDays
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

    function DelHabits(id) {
        //eslint-disable-next-line no-restricted-globals
        const confirmated = confirm("Deseja realmente excluir?")
        if (confirmated) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        }
    }

    return (
        <>
            <Header />
            <Container>
                <TopPage>
                    <h1>Meus hábitos</h1>
                    <p onClick={() => setOpenCreateHabit(true)} data-identifier="create-habit-btn">+</p>
                </TopPage>
                <HabitsList>
                    {openCreateHabit ? <CreateHabitBox>
                        <input placeholder="nome do hábito" onChange={(e) => setValorInput(e.target.value)} disabled={disabledInput} data-identifier="input-habit-name"></input>
                        <div className="days">
                            {daysList.map((d, index) => arrayDaysSelected.includes(index)
                                ?
                                <div className="daySelected" onClick={() => SelecionarDias(index)} disabled={disabledInput} data-identifier="week-day-btn" >
                                    {d}
                                </div>
                                :
                                <div className="day" onClick={() => SelecionarDias(index)} disabled={disabledInput} data-identifier="week-day-btn" >
                                    {d}
                                </div>
                            )}

                        </div>
                        <div className="finish">
                            <p className="cancel" onClick={() => setOpenCreateHabit(false)} disabled={disabledInput} data-identifier="cancel-habit-create-btn">Cancelar</p>
                            <p className="save" onClick={() => post()} disabled={disabledInput} data-identifier="save-habit-create-btn">{loading ? <img src={gif} /> : "Salvar"}</p>
                        </div>
                    </CreateHabitBox> : ""}
                    {arrayRespServer.length === 0 ? 
                    <TextNone data-identifier="no-habit-message">
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </TextNone> :
                        <HabitBox>
                            {arrayRespServer.map((obj, index) => {
                                return (
                                    <>
                                        <BigBox>
                                            <p data-identifier="habit-name">{obj.name}</p>
                                            <div className="days">
                                                {ListDays(obj.days)}
                                            </div>
                                            <img src={trash} onClick={() => DelHabits(obj.id)} data-identifier="delete-habit-btn"/>
                                        </BigBox>
                                    </>
                                )
                            })
                            }
                        </HabitBox>}
                </HabitsList>
            </Container>

            <Float />
        </>
    )
}
const Container = styled.div`
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
width: 100%;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
padding: 19px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
input{
    border-color: #D4D4D4;
    font-family: 'Lexend Deca';
    font-size: 19.98px;
    width: 100%;
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
width: 100%;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
padding-left: 20px;
position: relative;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

img{
width: 15px;
position: absolute;
top: 7px;
right: 7px;
}
`
const TextNone = styled.div`
margin-top: 10px;
font-family:'Lexend Deca';
font-size:17.98px;
font-weight: 400;
color: #666666;
`