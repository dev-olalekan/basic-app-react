function Food(){

    const food1 = "Rice"
    const food2= "Beans"
    return(
        <div>
            <h1>My Favorite Food</h1>
            <ul>
                <li>Food</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </div>
    );
}

export default Food