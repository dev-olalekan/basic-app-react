function Listing(props) {

    const countriesList = props.items;
    const itemCountry = countriesList.map(item => <li key={item.id}>{item.name} : &nbsp; <b>{item.populations}</b></li>)



    return (
        <div>
            <h2 className="list-category">{props.category}</h2>
            <ol className="list-item">
                {itemCountry}
            </ol>
        </div>
    );
}

export default Listing
