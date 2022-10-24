import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import { useContext, useEffect, useState } from "react"
import {AuthContext} from "../contexts/Auth"
import 'react-circular-progressbar/dist/styles.css';

export default function Float() {

    const {arraySelected, setArraySelected, percent } = useContext(AuthContext)
    const [newPercent, setNewPercent] = useState([])
    

    useEffect(()=>{
        const newPercent = percent
        setNewPercent(newPercent)
    },[percent])

    return (
        <>
            <Container>
                <Link to="/habitos">
                <div className="hábitos">
                    <p data-identifier="habit-page-action">Hábitos</p>
                </div>
                </Link>
                
                <Link to="/hoje">
                    <DivCircle>
                    <CircularProgressbarWithChildren
                            value={percent}
                            text={'Hoje'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            })}/>
                    </DivCircle>
                </Link>

                <Link to="/histórico">
                <div className="histórico">
                    <p data-identifier="historic-page-action">Histórico</p>
                </div>
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
z-index: 1000;
bottom: 0;
left: 0;

.hábitos p{
font-size: 17.98px;
color: #52B6FF;
font-family: 'Lexend Deca';
}

.histórico p{
font-size: 17.98px;
color: #52B6FF;
font-family: 'Lexend Deca';
}
`
const DivCircle = styled.div`
margin-bottom: 50px;
text-align:center;
width: 91px;
height: 91px;

p{
    position: fixed;
    bottom: 53px;
    right: 190px;
    font-family: 'Lexend Deca';
    color: #FFFFFF;
    font-weight: 400;
}
`