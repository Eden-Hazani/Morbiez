const express = require('express');
const morbiezLogic = require('../business-logic/morbiez-logic');

const router = express.Router();
// GET http://localhost:3000/api/morbiez

router.get('/burgers', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getAllBurgers();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get('/toppings', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getAllToppings();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get('/drinks', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getAllDrinks();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get('/sides', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getAllSides();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get('/burgers-vs-toppings', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getBurgerVsTopping();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get('/sidedishes', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.getSideDishes();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})
router.get('/test', async(request, response) => {
    try {
        const morbiez = await morbiezLogic.test();
        response.json(morbiez);
    } catch (err) {
        response.status(500).send(err.message)
    }
})

router.post('/sendOrder', async(request, response) => {
    try {
        const order = request.body;
        let addedOrder = await morbiezLogic.addOrder(order);
        response.json(addedOrder);
        response.status(201);
    } catch (err) {
        response.status(500).send(err.message)
    }
})



module.exports = router;