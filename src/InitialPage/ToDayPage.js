import styled from "styled-components"
import Header from "./Header"
import Check from "../img/Group.png"
import Float from "./Float"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"
import dayjs from "dayjs"
import locale from "../../node_modules/dayjs/locale/pt-br"

export default function ToDayPage() {
    
    const dia = (dayjs().locale("pt-br").format("dddd, D/M"));
    const { token, setHabits, habits, arraySelected, setArraySelected, percent, setPercent } = useContext(AuthContext)

    function GetHabits(){       
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        useEffect(()=>{
            const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            promisse.then((resp)=>DeuCerto(resp.data))
            promisse.catch((error)=>NãoDeuCerto(error))
        },[habits])
    }
    GetHabits()

    function DeuCerto(resp){
        setHabits(resp)
        const newArray = []
        for(let i = 0;i<resp.length;i++){
            if(resp[i].done){
                newArray.push(resp[i])
                if(!arraySelected.includes(resp[i].id)){
                    setArraySelected([...arraySelected, resp[i].id])
                }
            }
        }
        let conta = newArray.length / resp.length * 100
        setPercent(conta.toFixed(0))
    }
    function NãoDeuCerto(error){
        console.log(error)
    }

    function SelectedHabit(id){

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        console.log(token)
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, id,  config)
            promisse.then((resp)=>SelectedHabitRight(id))
            promisse.catch((error)=>console.log(error))
}
function SelectedHabitRight(id){
}

function DeletedHabit(id){
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, id, config)
    promisse.then((resp) => DeletedHabitRigth(id))
}

    function DeletedHabitRigth(id){
        const newArray = arraySelected.filter((e)=> e !== id)
        setArraySelected(newArray)
    }




    return (
        <>
            <Header />
            <Container>
                <TopPage>
                    <h1>{dia}</h1>
                    {arraySelected.length === 0?
                    <p>Nenhum hábito concluído ainda</p>
                    :
                    <p className="green">{percent}% dos hábitos concluídos </p>}
                </TopPage>
                <TaskList>
                    {habits.map((obj, index)=>
                    <TaskBox>
                    <div className="texts">
                        <h2>{obj.name}</h2>
                        {obj.currentSequence > 0 && obj.highestSequence > 0 && obj.currentSequence === obj.highestSequence?
                        <>
                        <p>Sequência atual: <span className="green">{obj.currentSequence}</span></p>
                        <p>Seu recorde: <span className="green">{obj.highestSequence}</span></p></>:
                        <>
                        <p>Sequência atual: {obj.currentSequence}</p>
                        <p>Seu recorde: {obj.highestSequence}</p></>
                        }
                        
                    </div>
                    {obj.done?<div className="checkSelected" onClick={()=> DeletedHabit(obj.id)}>
                        <img src={Check}/>
                    </div>:<div className="check" onClick={()=> SelectedHabit(obj.id)}>
                        <img src={Check} />
                    </div>}                    
                    </TaskBox>
                    )}
                </TaskList>


            </Container>
            <Float />
        </>
    )
}

const Container = styled.div`
padding-left: 15px;
height: 100%;
margin-top: 70px;
margin-bottom: 70px;
`

const TopPage = styled.div`
padding-top: 28px;


h1{
    font-size: 22.98px;
    color: #126BA5;
    font-family: 'Lexend Deca';
    font-weight: 400;
}
p{
    font-size: 17.98px;
    color: #BABABA;
    font-family: 'Lexend Deca';
}
`

const TaskList = styled.div`

`

const TaskBox = styled.div`
width: 97%;
height: 94px;
background-color: #FFFFFF;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
.green{color: #8fc549;}
h2{
    font-size: 19.98px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #666666;
    margin-bottom: 7px;
    margin-left: 10px;
}
p{
    font-size: 12.98px;
    font-family: 'Lexend Deca';
    color: #666666;
    font-weight: 400;
    margin-left: 10px;

}

.check{
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    border-color: #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
}
.checkSelected{
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border-color: #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
}
`