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
            display: flex;
            flex-direction: row;
            justify-c2ontent: center;
            justify-content: space-between;
            margin: 20px 30px;
            // border: 1px solid yellow;
               
        }
        img{
            height:50px;
            width:50px;
        }

        `;

            const SliderInfo = styled.div`
            display: flex;
            width: 80%;
            height: 200px;
            justify-content: center;
            align-items: center;
            overflow-x:hidden; 
            border:2px solid yellow; 

        `;

        return (
            <SliderWrapper>
                <SliderInfo>
                {this.props.foods.map((food) => {
                    return (
                        <div key={food.id}>
                            <li>{food.chef_name}</li>
                            <li>{food.recipe_title}</li>
                            <img src = {food.item_photo}/>
                            <li>{food.chef_location}</li>
                        </div>


                    )



                })}
                    </SliderInfo>
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