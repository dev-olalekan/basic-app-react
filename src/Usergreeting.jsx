import PropTypes from "prop-types";

/* function UserGreeting(props) {

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

export default UserGreeting;  */

function UserGreeting(props) {


    const WelcomMessage = <h2 className="welcome-message">my name is {props.username}</h2>

    const LoginPrompt = <h2 className="login-prompt">pls log in to continue</h2>

    return props.isLoggedin ? WelcomMessage : LoginPrompt
}


export default UserGreeting;



// this code below work for default props cos of thr react version

/* function UserGreeting({ isLoggedin = false, username = "Guest no name" }) {


    const WelcomeMessage = <h2 className="welcome-message">my name is {username}</h2>

    const LoginPrompt = <h2 className="login-prompt">pls log in to continue</h2>

    return isLoggedin ? WelcomeMessage : LoginPrompt
}

UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
}



export default UserGreeting; */