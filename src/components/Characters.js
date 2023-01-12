import styled from 'styled-components';
import Character from './Character';

const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Characters = ({people}) => {



return (
    <Container className="characters">

        {Array.isArray(people) && people.map(person => {

            return <Character person={person} />

        })}

    </Container>
)

}

export default Characters;