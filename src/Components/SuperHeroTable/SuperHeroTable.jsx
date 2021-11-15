import React from 'react';

const SuperHeroTable = (props) => {
    let superHeroes = props.arrayOfSuperHeroes.map((element) => {
        return(
            <tr>
                <td>{element.superheroId}</td>
                <td>{element.superHeroName}</td>
                <td>{element.primaryAbility}</td>
                <td>{element.secondaryAbility}</td>
            </tr>
        )
    });
    



    return (
        <table>
            <tr>
                <th>Super Hero ID</th>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </tr>
            {superHeroes}
        </table>
    );
}
 
export default SuperHeroTable;