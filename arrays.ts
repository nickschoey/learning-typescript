const carMakers = ['ford', 'toyota', 'mercedes'];

const dates = [new Date(), new Date()];

const carsByMake = [['mustang'], ['corolla'], ['class a']];

// help with inference when extracting values
const slowCar = carMakers[1];
const myCar = carMakers.pop();

// prevent incompatible values to be added
carMakers.push(100);

// help with map and we get all the methods for this
carMakers.map((car: string): string => car);

// They are flexible
