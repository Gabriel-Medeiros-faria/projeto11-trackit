import styled from "styled-components"
import imgUser from "../img/Logo.jpg"


export default function Header(){
    return(
        <>
            <Container>
                <TextLogo>
                    trackit
                </TextLogo>
                <ImgUser>
                    <img src={imgUser}/>
                </ImgUser>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #126BA5;
width: 100%;
height: 70px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const TextLogo = styled.div`
font-family: 'Playball', cursive;
font-size: 38.98px;
color: white;
margin-left: 10px;
`
const ImgUser = styled.div`
img{
    border-radius: 100%;
    width: 51px;
    height: 51px;
    margin-right: 10px;
}
`