import React, { useState } from 'react';

function Mycar() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    function handleChangebrand(event) {
        const { name, value } = event.target;
        setCar((prevCar) => ({ ...prevCar, [name]: value }));
    }

    function handleChangemodel(event) {
        const { name, value } = event.target;
        setCar((prevCar) => ({ ...prevCar, [name]: value }));
    }

    function handleChangeyear(event) {
        const { name, value } = event.target;
        setCar((prevCar) => ({ ...prevCar, [name]: value }));
    }

    function handleChangecolor(event) {
        const { name, value } = event.target;
        setCar((prevCar) => ({ ...prevCar, [name]: value }));
    }

    return (
        <div>
            <p>My best car: {car.brand} {car.model} {car.year} {car.color}</p>
            <input type="text" name="brand" value={car.brand} onChange={handleChangebrand} />
            <input type="text" name="model" value={car.model} onChange={handleChangemodel} />
            <input type="text" name="year" value={car.year} onChange={handleChangeyear} />
            <input type="text" name="color" value={car.color} onChange={handleChangecolor} />
        </div>
    );
}

export default Mycar;