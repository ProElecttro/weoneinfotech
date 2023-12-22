import PropTypes from 'prop-types'

class AlertProps {
    message!: string;
    type!: string;
}

function Alert(props: AlertProps){
    const alertStyle = {
        height: "40px",
        width: "100%",
        paddingTop: "4px",
        fontSize: "20px",
        margin: "60px 0px 0px auto",
        backgroundColor: "transparent"
    }
    return(
        <div className="alert-box" style={alertStyle}>
            <p>{props.message}</p>
        </div>
    )
}

export default Alert;

Alert.prototype = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

Alert.defaultProps = {
    message: "sample alert message",
    type: "success"
}