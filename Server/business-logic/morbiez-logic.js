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

async function addOrder(order) {
    console.log(order[1])
    const sql = `INSERT INTO orders(customerInfo, mealInfo, sideDishInfo) VALUES('${JSON.stringify(order[0])}','${JSON.stringify(order[1])}','${JSON.stringify(order[2])}')`;
    const info = await dal.executeAsync(sql);
    order.orderId = info.insertId;
    return order;
}

async function test() {
    const sql = 'SELECT * FROM orders'
    const orders = await dal.executeAsync(sql);
    return orders;
}




module.exports = {
    getAllBurgers,
    getAllToppings,
    getAllDrinks,
    getBurgerVsTopping,
    getAllSides,
    getSideDishes,
    addOrder,
    test
}