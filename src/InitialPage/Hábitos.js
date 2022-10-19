import styled from "styled-components"
import Header from "./Header"
import Float from "./Float"

export default function Habitos() {

    const daysList = ["D", "S", "T", "Q", "Q", "S", "S"]


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
                        <input placeholder="nome do hábito"></input>
                        <div className="days">
                            {daysList.map((d, index) => <div className="day">
                                {d}
                            </div>)}
                        </div>
                        <div className="finish">
                            <p className="cancel">Cancelar</p>
                            <p className="save">Salvar</p>
                        </div>
                    </CreateHabitBox>
                    <HabitBox>
                        <p>nome do hábito</p>
                        <div className="days">
                            {daysList.map((d, index) => <div className="day">
                                {d}
                            </div>)}
                        </div>
                    </HabitBox>
                </HabitsList>

                <TextNone>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </TextNone>
            </Container>
            <Float />
        </>
    )
}

const Container = styled.div`
background-color: #E5E5E5;
margin-top: 70px;
margin-bottom: 70px;
height: 667px;
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

const TextNone = styled.div`
margin-top: 28px;
p{
    font-family: 'Lexend Deca';
    font-size: 17.98px;
    color: #666666;
}
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
`
const HabitBox = styled.div`
width: 340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
padding-left: 20px;

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
`