function ClickingButton() {

    // const handleClick = () => console.log("Button Clicked");

    let count = 0;


    const handleClick = (name) => {

        if (count < 3) {
            count++;

            console.log(`Button Clicked ${count} times. Hello ${name}`);
        }
        else {
            console.log(` ${name} stop clicking me!`);
        }

    }

    return (
        <div>
            <button onClick={() => handleClick('broklyn')}>Click Me ❤️</button>
        </div>
    )
}

export default ClickingButton