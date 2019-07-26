import React from 'react';
import { connect } from 'react-redux';
import { getFood } from '../../Action/Action';
import styled from 'styled-components';


class Slider extends React.Component {

    componentDidMount() {
        this.props.getFood()
    }


    render() {

        const SliderWrapper = styled.div`
        
        li{
            list-style:none;     
        }

        `;

        return (
            <SliderWrapper>
                {this.props.foods.map((food) => {
                    return (
                        <div key={food.id}>
                            <li>{food.chef_name}</li>
                        </div>


                    )



                })}
            </SliderWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);