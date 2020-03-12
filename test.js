function view(inventory) {
    let i;
    for(i = 0; i < inventory.lengthl; i++) {
        window.console.log(inventory[i].sku + '\t' + 
                           inventory[i].product + '\t (' + 
                           inventory[i].quantity + ') \t $' + 
                           inventory[i].cost);
    };
};

function getInventory() {
    const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory = [];

    tshirt.sku = '101';
    tshirt.product = 'Tshirt';
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = '102';
    jeans.product = 'Jeans';
    jeans.quantity = 25;
    jeans.cost = 44.99;

    jacket.sku = '103';
    jacket.product = 'Jacket';
    jacket.quantity = 11;
    jacket.cost = 49.99;

    hat.sku = '104';
    hat.product = 'Hats';
    hat.quantity = 22;
    hat.cost = 19.99;

    socks.sku = '105';
    socks.product = 'Socks';
    socks.quantity = 35;
    socks.cost = 14.99;

    inventory = [tshirt, jeans, jacket, hat, socks];
    return inventory;

};

function displayMenu() {
    window.console.log('');
    window.console.log('INVENTORY MANAGEMENT MENU');
    window.console.log('show - show inventory');
    window.console.log('');
};

window.addEventListener('load', () => {
    let inventory, command; 
    displayMenu();
    inventory = getInventory();

    while(true) {
        command = window.prompt('Enter command')
        if (command !== null) {
            if (command === 'view') {
                view(inventory);
            } else {
                window.alert('Not a valid command');
            }
        } else {
            break;
        }
    }
});