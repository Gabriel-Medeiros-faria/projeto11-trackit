import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"
import { Link } from "react-router-dom"

export default function Header(){

    const {user} = useContext(AuthContext)

    return(
        <>
            <Container>    
                <Link to="/">   
                <TextLogo>
                    trackit
                </TextLogo>
                </Link>  
                <ImgUser>
                    <img src={user?.image}/>
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
position: fixed;
top:0;
left: 0;
z-index: 100000;
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