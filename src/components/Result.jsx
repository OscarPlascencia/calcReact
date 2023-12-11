import React from "react";
import  PropTypes from "prop-types";

const Result = ({value}) => {
    return (
        <div className="result">
            {value}
        </div>
    );
};

Result.propTypes = {                //validacion de propiedades
        value : PropTypes.string.isRequired
};

Result.defaultProps = {//Estableciendo valor por defecto a propiedad
    value: "0"
}

export default Result;