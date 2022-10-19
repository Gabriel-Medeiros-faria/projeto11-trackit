import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Float() {
    return (
        <>
            <Container>
                <Link to="/habitos">
                <div className="hábitos">
                    <p>Hábitos</p>
                </div>
                </Link>
                <Link to="/hoje">
                <div className="hoje">
                    <p>Hoje</p>
                </div>
                </Link>
                <div className="histórico">
                    <p>Histórico</p>
                </div>
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
bottom: 0;
left: 0;


.hábitos p{
font-size: 17.98px;
color: #52B6FF;
font-family: 'Lexend Deca';
}
.hoje{
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.hoje p{
font-size: 17.98px;
color: #FFFFFF;
font-family: 'Lexend Deca';
}
.histórico p{
font-size: 17.98px;
color: #52B6FF;
font-family: 'Lexend Deca';
}

`