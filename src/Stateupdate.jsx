import React, { useState } from 'react';

function Stateupdate() {
    const [car, setCar] = useState({ year: 2021, make: 'Toyota', model: 'Camry' });

    function updateCarYear(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    function updateCarMake(event) {
        setCar(c => ({ ...c, make: event.target.value }));
    }

    function updateCarModel(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }

    return (
        <div>
            <p>your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={updateCarYear} />
            <br />
            <input type="text" value={car.make} onChange={updateCarMake} />
            <br />
            <input type="text" value={car.model} onChange={updateCarModel} />


        </div>
    );
}

export default Stateupdate;