// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let array1 = [drivers[0], drivers[1]];

    return array1;
}

const returnLastTwoDrivers = function(drivers) {
    let array1 = drivers.slice(-2);

    return array1;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    
    return function(fare) {
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb) {
    
    return cb(drivers);
}