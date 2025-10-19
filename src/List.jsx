function List() {
    const fruits = [
        { id: 1, name: 'Apple', calories: 95 },
        { id: 2, name: 'Banana', calories: 105 },
        { id: 3, name: 'Orange', calories: 62 },
        { id: 4, name: 'Mango', calories: 201 },
        { id: 5, name: 'Grapes', calories: 62 },
        { id: 6, name: 'Pineapple', calories: 452 }
    ]

    // numerical order
    // fruits.sort((a, b) => a.calories - b.calories); 

    // reverse numerical order
    // fruits.sort((a, b) => b.calories - a.calories);


    // alphabetical order
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // reverse alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));


    // this code will filter out the calories with less than 100
    const lowCalories = fruits.filter((fruit) => fruit.calories < 100);
    const fruitsList = lowCalories.map(lowCalories => <li key={lowCalories.id}> {lowCalories.name}: &nbsp; <b>{lowCalories.calories}</b></li>)

    // to list out all the item in the array
    // const fruitsList = fruits.map((fruit) => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>);

    return (
        <ol>
            {fruitsList}
        </ol>
    );
}

export default List;