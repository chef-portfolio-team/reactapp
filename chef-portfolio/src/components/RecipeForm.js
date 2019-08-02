import React from 'react'
import { connect } from 'react-redux'
import { addFood } from '../Action/Action'
import './Home/Home.css'

class RecipeForm extends React.Component {
    state = {
        chef_name: '',
        recipe_title: '',
        chef_location: '',
        ingredients: '',
    }

     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

     addNewFood= e => {
        e.preventDefault()
        
        const newFood = this.state
        
        this.props.addFood(newFood)
            this.setState({
                chef_name: '',
                recipe_title: '',
                chef_location: '',
                ingredients: '',
        })
    }
     render() {
        return (
            <div>
                <form onSubmit={this.addNewFood}>
                    <input type='text' name='chef_name' placeholder='Chef Name' value={this.state.chef_name} onChange={this.handleChange} />
                    <input type='text' name='recipe_title' placeholder='Recipe Title' value={this.state.recipe_title} onChange={this.handleChange} />
                    <input type='text' name='chef_location' placeholder='Chef Location' value={this.state.chef_location} onChange={this.handleChange} />
                    <input type='text' name='ingredients' placeholder='Ingredient' value={this.state.ingredients} onChange={this.handleChange} />
                    <button onClick={this.addNewFood}>Create New Recipe</button>
                </form>
            </div>
        )
    }
}

 const mapStateToProps = state => {
    return {
        addingFood: state.addingFood
    }
}

 export default connect(mapStateToProps,{ addFood })(RecipeForm) 