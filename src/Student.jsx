import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="student-card">
            <p>Name: {props.first}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            <p>Last Name: {props.lastname}</p>
        </div>
    );
}


/* propstypes ensures that passed props are validated */
Student.propTypes = {
    first: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
    lastname: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired
};

Student.defaultProps = {
    first: "Unknown",
    age: 0,
    isStudent: false
};
export default Student;
