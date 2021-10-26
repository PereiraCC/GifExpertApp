import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // Hook state
    const [categories, setcategories] = useState(['Apple', 'Play Station', 'Microsoft']);

    // const handleAdd = () => {
    //     setcategories( [...categories, 'Google'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />


            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}

