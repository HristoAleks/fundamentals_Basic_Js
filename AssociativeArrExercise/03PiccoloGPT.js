function manageParking(entries) {
    let carStatus = {};

    for (let entry of entries) {
        let [direction, carNumber] = entry.split(', ');

        if (direction.toLowerCase() === 'in') {
            carStatus[carNumber] = true;
        } else if (direction.toLowerCase() === 'out') {
            if (carStatus[carNumber]) {
                delete carStatus[carNumber];
            }
        }
    }

    let sortedParkingLot = Object.keys(carStatus).sort();

    if (sortedParkingLot.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedParkingLot.join("\n"));
    }
}

manageParking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);