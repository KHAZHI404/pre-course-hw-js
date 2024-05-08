let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWidthNewAddress = structuredClone(passportWithAddress)
passportWidthNewAddress.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city)
console.log(passportWidthNewAddress.address.city)