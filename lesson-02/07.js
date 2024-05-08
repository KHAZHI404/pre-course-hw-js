let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {married: true, ...passportMarried, address: passportMarried.address}

console.log(passportMarried)
console.log(passportMarried2)