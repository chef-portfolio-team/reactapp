const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let foods = [
    {
        dish: 'Chicken Alfredo',
        description: 'Fettichini noodles made with a creamy alfredo sauce.',
        id: 0,
    }
];
server.get('/foods', (req, res) => {
    res.json(foods);
});

let foodId = foods.length;

server.post('/foods', (req, res) => {
    const { dish, description, } = req.body;
    const newFood = { dish, description, id: foodId };

    if (!dish || !description) {
        return sendUserError('Food name and description are required.', res);
    }

    const findFoodByDish = food => {
        return food.dish === dish;
    };
    if (foods.find(findFoodByDish)) {
        return sendUserError(`Sorry, the dish ${dish} already exist`, res)
    }

    foods.push(newFood);
    foodId++;
    res.json(foods);
});

    server.put('/foods/:id', (req, res) => {
        const { id } = req.params;
        const { dish, description } = req.body;
        const findFoodById = food => {
            return food.id == id;
        }
        const foundFood = foods.find(findFoodById);
        if (!foundFood) {
            return sendUserError('No food found by that ID.', res);
        } else {
            if (dish) foundFood.dish = dish;
            if (description) foundFood.description = description;
            res.json(foods);
        }
});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${port}`)
})