import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hello world');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
    
        console.log('Submit done');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
        </form>
    )
}
