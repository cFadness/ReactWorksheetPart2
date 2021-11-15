import React, {Component} from 'react';
import axios from 'axios';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperHeroCreateForm from './SuperheroCreateForm/SuperheroCreateForm'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            superheroes: [
                {
                    superheroId: 1,
                    superHeroName: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    superHeroName: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    superHeroName: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        };
    }

    createSuperHero = (newSuperHero) => {
        this.state.superheroes.push(newSuperHero);
        this.setState({
            superheroes: this.state.superheroes
        })
    }

    render(){
        return(
            <div>
                <SuperHeroTable arrayOfSuperHeroes = {this.state.superheroes}/>
                <SuperHeroCreateForm createNewSuperHero = {this.createSuperHero}/>
            </div>
        )
    }
}

export default App;