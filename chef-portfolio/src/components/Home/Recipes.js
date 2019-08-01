import React from 'react'
import { getFood } from '../../Action/Action';
import { connect } from 'react-redux';
import './Home.css'

class Recipes extends React.Component {
    constructor(props) {
        super(props);

        this.setState = {
            newfood: this.props.foods[0]
        }




    }

    componentDidMount() {
        this.props.getFood()
    }

        render() {

        return (
            <div className='recipe-wrapper'>
                <h1>Recipes</h1>
                <div className='recipe-info'>
                    {this.props.foods.map((food) => {
                        return (
                            <div className='recipe-content-container'>
                                <div key={food.id}>
                                    <img  src={food.item_photo} />
                                    <p>{food.chef_name}</p>
                                    <p>{food.recipe_title}</p>
                                    <p>{food.chef_location}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        foods: state.foods
    }
}

const mapDispatchToProps = {
    getFood,
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

