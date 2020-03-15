function getInventory() {
    'use strict';
    const hat = [], socks = [], shirt = [], jeans = [], jacket = [];
    let inventory;

    hat.sku = 2233;
    hat.product = 'Hats';
    hat.quantity = 12;
    hat.cost = 14.99;

    socks.sku = 3223;
    socks.product = 'Socks';
    socks.quantity = 36;
    socks.cost = 15.99;

    shirt.sku = 4824;
    shirt.product = 'Shirt';
    shirt.quantity = 10;
    shirt.cost = 15.99;

    jeans.sku = 6343;
    jeans.product = 'Jeans';
    jeans.quantity = 22;
    jeans.cost = 39.99;

    jacket.sku = 9382;
    jacket.product = 'Jacket';
    jacket.quantity = 5;
    jacket.cost = 49.99;

    inventory = [hat, socks, shirt, jeans, jacket];
    return inventory;
};

function saveStorage() {
    'use strict'
    localStorage.setItem("hat", "50");
    localStorage.setItem("", "50");
    localStorage.setItem("test", "50");
    localStorage.setItem("test", "50");
};