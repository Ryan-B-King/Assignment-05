window.addEventListener('load', () => {
    let inventory, command; 
    displayMenu();
    inventory = getInventory();

    while(true) {
        command = window.prompt('Enter command');
        if (command !== null) {
            if (command === 'view') {
                view(inventory);
            } else if (command === 'update') {
                updateItem();
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

function displayMenu() {
    window.console.log('');
    window.console.log('INVENTORY MANAGEMENT MENU');
    window.console.log('view - view all products');
    window.console.log('update - update stock');
    window.console.log('exit - exit the program');
    window.console.log('');
};

function getInventory() {
    const shirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory = [];

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

    hat.sku = 2233;
    hat.product = 'Hats';
    hat.quantity = 12;
    hat.cost = 14.99;

    socks.sku = 3223;
    socks.product = 'Socks';
    socks.quantity = 36;
    socks.cost = 9.99;

    inventory = [shirt, jeans, jacket, hat, socks];
    return inventory;
};

function view(inventory) {
    let i;
    for(i = 0; i < inventory.length; i++) {
        window.console.log(inventory[i].sku + '\t' + 
                            inventory[i].product + '\t (' + 
                            inventory[i].quantity + ') \t $' + 
                            inventory[i].cost);
    };
};

function updateItem() {
let skuUpdate;
let newQuanity;
let inventory = getInventory();

skuUpdate = Number(window.prompt('Enter sku to update.'));

    if (skuUpdate === 2233) {

        window.console.log("You are updating: ", inventory[3].product);

        newQuanity = window.prompt('Current quantity is: ' + inventory[3].quantity + '. \nWhat would you like to update the amount to be?');

        inventory[3].quantity = newQuanity;

        window.console.log('Your ' + inventory[3].product + ' has been updated to ' + inventory[3].quantity + '.');
        break;
    } else if (skuUpdate === 3223) {

    } else if (skuUpdate === 4824) {

    } else if (skuUpdate === 6343) {

    } else if (skuUpdate === 9382) {

    } else {
        window.alert('You have entered an invalid sku.');
        //locks user until valid entry is used
    };

};




// function view(inventory) {
//     let i;
//     for(i = 0; i < inventory.lengthl; i++) {
//         window.console.log(inventory[i].sku + '\t' + 
//                            inventory[i].product + '\t (' + 
//                            inventory[i].quantity + ') \t $' + 
//                            inventory[i].cost);
//     };
// };

// function getInventory() {
//     const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
//     let inventory = [];

//     tshirt.sku = '101';
//     tshirt.product = 'Tshirt';
//     tshirt.quantity = 17;
//     tshirt.cost = 24.99;

//     jeans.sku = '102';
//     jeans.product = 'Jeans';
//     jeans.quantity = 25;
//     jeans.cost = 44.99;

//     jacket.sku = '103';
//     jacket.product = 'Jacket';
//     jacket.quantity = 11;
//     jacket.cost = 49.99;

//     hat.sku = '104';
//     hat.product = 'Hats';
//     hat.quantity = 22;
//     hat.cost = 19.99;

//     socks.sku = '105';
//     socks.product = 'Socks';
//     socks.quantity = 35;
//     socks.cost = 14.99;

//     inventory = [tshirt, jeans, jacket, hat, socks];
//     return inventory;
// };

// function displayMenu() {
//     window.console.log('');
//     window.console.log('INVENTORY MANAGEMENT MENU');
//     window.console.log('show - show inventory');
//     window.console.log('');
// };

// window.addEventListener('load', () => {
//     let inventory, command; 
//     displayMenu();
//     inventory = getInventory();

// window.console.log(inventory);

//     while(true) {
//         command = window.prompt('Enter command');
//         if (command !== null) {
//             if (command === 'show') {
//                 view(inventory);
//             } else {
//                 window.alert('Not a valid command');
//             };
//         } else {
//             break;
//         };
//     };
// });