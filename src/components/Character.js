// Write your Character component here
const  Character = props => {
   const {name, height, mass, birth_year, eye_color, hair_color, skin_color, species, starships, vehicles} =  props.data;
    console.log("Data: ",props.data);
    return (
        <div>
            <h3>Name: {name}</h3>
            <div>Born: {birth_year}</div>
            <div>Height: {height}, Mass: {mass}</div>
            <div>Species: {species}, Eyes: {eye_color}, Hair: {hair_color}, Skin: {skin_color}</div>
            {/* <div>Starships: {starships.map(ship => {
            return `${ship.name}, `})} </div> */}
        </div>
    );

}

export default Character;