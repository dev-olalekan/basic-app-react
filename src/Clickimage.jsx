function ClickingImage() {
    const imageurl = "./src/assets/ball.jpeg";

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <div>
            <img src={imageurl} alt="" onClick={(e) => handleClick(e)} />
        </div>
    )
}

export default ClickingImage