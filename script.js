//Hey Kiddo

const grownUp = function(number) {
    if (number >= 18)
        return true;
    return false
};

const greeting = function(number) {
    const adult = grownUp(customer);
    if (adult == true) {
        return "Hi there"};
    return "Hello kiddo"
};


const customer = (16);


const ageCheck = greeting(customer);
console.log (ageCheck);





console.log ();


//VAT calculations exercise 1

const calculateSellingPrice = function(number1, number2) {
    const totalPrice = (number1 + calculateVat(number1, number2));
    return totalPrice;
};

const calculateVat = function(number1, number2){
    const prodVat = Math.round((number1 * number2)*100)/100;
    return prodVat;
};


const vath = (0.21);
const vatl = (0.09);

const bread = (2.00);
const plate = (4.10);

const product1 = calculateSellingPrice(bread, vatl);
const product2 = calculateSellingPrice(plate, vath);
console.log ("total price including Vat for a bread = " + product1);
console.log ("totalprice voor a plate including VAT = " + product2);



console.log ();

//VAT calculations exercise 2

const priceCalc = function(number1, number2) {
    const totalPrice = Math.round((number1 + vatCalc(number1, number2))*100)/100;
    return [totalPrice, vatCalc(number1, number2)]
};

const vatCalc = function (number1, number2) {
    const vatPrice = Math.round((number1 * number2)*100)/100;
    return vatPrice
};

const h = (0.21);
const l = (0.09);

const knive = (2.00);
const spoon = (3.00);
const apple = (0.75);

const product3 = priceCalc(apple, l);
const product4 = priceCalc(spoon, h);
const product5 = priceCalc(knive, h);

console.log (product3);
console.log (product4);
console.log (product5);