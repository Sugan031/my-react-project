import proptypes from "prop-types";

function UserGreetings(props){

    const welcomeMessage = <h2 className="welcome-message">
                                Welcome {props.username}
                            </h2>;

    const loginPrompt = <h2 className="login-prompt"> 
                                "Please login " 
                        </h2>;


    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreetings.prototype = {
    isLoggedIn : proptypes.bool,
    username : proptypes.string
}

UserGreetings.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}

export default UserGreetings