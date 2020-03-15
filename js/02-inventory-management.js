function view(inventory) {
    'use strict';
    let i;
    for(i = 0; i < inventory.length; i++) {
        window.console.log(inventory[i].sku + '\t' + 
                           inventory[i].product + '\t (' + 
                           inventory[i].quantity + ') \t $' + 
                           inventory[i].cost);
    };
};

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

function displayMenu() {
    'use strict';
    window.console.log('');
    window.console.log('INVENTORY MANAGEMENT MENU');
    window.console.log('view - view all products');
    window.console.log('update - update stock');
    window.console.log('exit - exit the program');
    window.console.log('');
};

function updateItem(currentInventory) {
    'use strict';
    let skuUpdate;
    let newQuanity;
    let i;

    skuUpdate = parseInt(window.prompt('Enter sku to update.'));

    for (i = 0; i < currentInventory.length; i++) {
        if (currentInventory[i].sku === skuUpdate ) {
            newQuanity = window.prompt('Current quantity for ' + currentInventory[i].product + ' is: ' + currentInventory[i].quantity + '. \nWhat would you like the updated amount to be?');
            currentInventory[i].quantity = newQuanity;

            localStorage.setItem(currentInventory[i].product.toString(), currentInventory[i].quantity.toString());

            window.console.log('Your ' + currentInventory[i].product + ' has been updated to ' + currentInventory[i].quantity + '.');
            return currentInventory;
        };
    };
};

function getStorage(currentInventory) {
    'use strict';
    let i;
    let key;
    let value;

    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);

        window.console.log("Inside FOR LS  " + key, value);

        for (i = 0; i < currentInventory.length; i++) {

            window.console.log("Inside FOR CI");
            window.console.log(currentInventory[i]);

            if (currentInventory[i].product === key) {

                window.console.log("Inside IF CI:  " + currentInventory[i]);

                currentInventory[i].quantity = parseInt(value);
    
                window.console.log("Updated Values: " + currentInventory[i].product);

            };
            
        };
        return currentInventory;
    };
 

};

window.addEventListener('load', () => {
    'use strict';
    let currentInventory
    let command
    let startingInventory; 

    displayMenu();
    startingInventory = getInventory();
    currentInventory = startingInventory;
    getStorage(currentInventory);


    while(true) {
        command = window.prompt('Enter command');
        if (command !== null) {
            if (command === 'view') {
                view(currentInventory);
            } else if (command === 'update') {
                updateItem(currentInventory);
            }else if (command === 'exit') {
                window.console.log('Program has closed.');
                break;
            } else {
                window.alert('Invalid Input.');
            };
        } else {
            break;
        };
    };
});