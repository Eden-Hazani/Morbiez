const dal = require('../data-access-layer/dal');

async function getAllBurgers() {
    const sql = 'SELECT * FROM burgers'
    const burgers = await dal.executeAsync(sql);
    return burgers;
}

async function getAllToppings() {
    const sql = 'SELECT * FROM toppings'
    const toppings = await dal.executeAsync(sql);
    return toppings;
}

async function getAllDrinks() {
    const sql = 'SELECT * FROM drinks'
    const drinks = await dal.executeAsync(sql);
    return drinks;
}

async function getAllSides() {
    const sql = 'SELECT * FROM sides'
    const sides = await dal.executeAsync(sql);
    return sides;
}

async function getBurgerVsTopping() {
    const sql = 'SELECT * FROM burgersvstoppings'
    const BurgerVsTopping = await dal.executeAsync(sql);
    return BurgerVsTopping;
}

async function getSideDishes() {
    const sql = 'SELECT * FROM sidedishes'
    const sideDish = await dal.executeAsync(sql);
    return sideDish;
}


module.exports = {
    getAllBurgers,
    getAllToppings,
    getAllDrinks,
    getBurgerVsTopping,
    getAllSides,
    getSideDishes
}