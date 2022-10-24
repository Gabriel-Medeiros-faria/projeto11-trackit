import Header from "./Header";
import Float from "./Float";
import styled from "styled-components";

export default function Histórico(){
    return(
        <>
        <Header/>
        <Container>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
        <Float/>
        </>
    )
}

const Container = styled.div`
margin-top: 90px;
margin-left: 17px;
h1{
    font-size:22.98px;
    font-family: 'Lexend Deca';
    color: #126BA5;
    font-weight: 400;
}
p{
    margin-top: 10px;
font-family:'Lexend Deca';
font-size:17.98px;
font-weight: 400;
color: #666666;
}
`