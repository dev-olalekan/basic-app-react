function UserGreeting(props) {

    if (props.isLoggedin) {

        return (
            <div>
                <h2 className="welcome-message">my name is {props.username}</h2>
            </div>
        )
    } else {
        return (
            <h2 className="login-prompt">pls log in to continue</h2>
        )
    }
}

export default UserGreeting; 