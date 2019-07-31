import React from 'react';
import { connect } from 'react-redux';
import { getFood } from '../../Action/Action';
import styled from 'styled-components';
var Coverflow = require('react-coverflow');


class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.setState = {
            // foods: this.props.foods,
            newfood: this.props.foods[0]
        }




    }

    componentDidMount() {
        this.props.getFood()
    }

        render() {
        console.log(this.props.newfood)
        const SliderWrapper = styled.div`
        
        li{
            list-style:none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            justify-content: space-between;
            margin: 20px 30px;
            //  border: 1px solid red;
             width:150px;
             font-size:12px;
             line-height:-1;
             color:white;
             
               
        }
        img{
            height:50%;
            width:80%;
        }

        `;

        const SliderInfo = styled.div`
            display: flex;
            width: 100%;
            background-color: #2d3436;
            background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
            height: 500px;
            justify-content: center;
            align-items: center;
            overflow-x:hidden; 
            // border:2px solid yellow;
            font-size:12px;
             line-height:-1; 

        `;


        return (
            <div>

                <SliderWrapper>
                <h1>Featured Items</h1>
                    <SliderInfo>
                        <Coverflow width={1060}
                            height={480}
                            displayQuantityOfSide={2}
                            navigation={false}
                            enableHeading={false}
                        >
                             
                            {this.props.foods.map((food) => {
                                return (
                                    <div>
                                        <div key={food.id}>
                                        <img src={food.item_photo} />
                                        <li>{food.chef_name}</li>
                                        <li>{food.recipe_title}</li>
                                        <li>{food.chef_location}</li>



                                    </div>
                                    </div>

                                )



                            })}

                        </Coverflow>,
                </SliderInfo>
                </SliderWrapper>



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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);