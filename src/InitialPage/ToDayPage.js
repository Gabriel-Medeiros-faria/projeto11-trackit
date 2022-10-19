import styled from "styled-components"
import Header from "./Header"
import Check from "../img/Group.png"
import Float from "./Float"

export default function ToDayPage() {
    return (
        <>
            <Header />
            <Container>
                <TopPage>
                    <h1>Dia, 00/00</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </TopPage>
                <TaskList>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                    <TaskBox>
                        <div className="texts">
                            <h2>Tarefa em si</h2>
                            <p>Sequência atual: 0</p>
                            <p>Seu recorde: 0</p>
                        </div>
                        <div className="check">
                            <img src={Check} />
                        </div>
                    </TaskBox>
                </TaskList>


            </Container>
            <Float />
        </>
    )
}

const Container = styled.div`
background-color: #E5E5E5;
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
width: 340px;
height: 94px;
background-color: #FFFFFF;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
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
`