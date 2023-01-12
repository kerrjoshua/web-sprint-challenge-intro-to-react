// Write your Character component here
import styled from 'styled-components';

const Container = styled.div`

    background-color: rgba(220,220,220,.5);
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: space-around;
    padding: 15px;
    color: #202020;
    
    

`

const  Character = props => {
   const {name, height, mass, birth_year, eye_color, hair_color, skin_color, species,} =  props.person;


    return (
        <Container>
            <h3>Name: {name}</h3>
            <div>Born: {birth_year}</div>
            <div>Height: {height}, Mass: {mass}</div>
            <div> Eyes: {eye_color}, Hair: {hair_color}, Skin: {skin_color}</div>
            {/* <div>Starships: {starships.map(ship => {
            return `${ship.name}, `})} </div> */}
        </Container>
    );

}

export default Character;