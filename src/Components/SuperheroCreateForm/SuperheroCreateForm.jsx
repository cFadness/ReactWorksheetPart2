import React, {Component} from 'react';

class SuperHeroCreateForm extends Component{

    constructor(props){
        super(props);
        this.state={
            superheroId: 3,
            superHeroName: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.superheroId++
        this.setState({
            superheroId: this.state.superheroId
        })
        this.props.createNewSuperHero(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input name="superHeroName" onChange={this.handleChange} value={this.state.superHeroName} />
                <label>Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label>Secondary Ability</label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                <button type="submit">Create New Superhero</button>
            </form>
        );
    }
}

export default SuperHeroCreateForm;