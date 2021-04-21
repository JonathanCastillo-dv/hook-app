import React,{memo} from 'react';
import PropTypes from 'prop-types'


const ShowIncrement = memo (({increment}) => {
    console.log('Me volvi a generar :(');

    
    return (
        <button
        className='btn btn-primary'
        onClick={()=>{increment()}}>
            Incrementar
        </button>
    );
});


ShowIncrement.prototype={
    increment:PropTypes.func.isRequired
}
export default ShowIncrement;