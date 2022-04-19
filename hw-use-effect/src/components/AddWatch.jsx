import React from 'react';
import PropTypes from 'prop-types';


const Addwatch = () => {
    return (
        <div>
            <form className='form'>
                <input placeholder='Название'></input>
                <input placeholder='Временная зона'></input>
                <button>Добавить</button>
            </form>
        </div>
    );
};


Addwatch.propTypes = {

};


export default Addwatch;
