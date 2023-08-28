import PropTypes from 'prop-types';

export const Button= ({click1,color,text})=>{
    return(
        <button className="btn btn-primary" onClick={click1}  style={{backgroundColor:color, margin:'10px',outline:'none' }} > 
        {text}
        </button>
    )
}

// validation for prop used.**
Button.propTypes = {
    click1: PropTypes.func,
    color:PropTypes.string,
    // text is required.
    text:PropTypes.string.isRequired 
}

// setting default values for the props used in button. if none are provided from parent component
Button.defaultProps = {
    color:"#0D6EFD",
    text:"Click Me"

}
