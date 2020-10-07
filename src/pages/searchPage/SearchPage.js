import React from 'react';
import "./SearchPage.css";
import { useStateValue } from '../../reducer/StateProvider'

function Search() {

    const [{ term }, dispatch] = useStateValue()
    
    return (
        <div className='searchPage'>
            <div className='.searchPage__header'>
                <h1>{term}</h1>
            </div>
            <div className='searchPage__result'>
        
            </div>
        </div> 
    )
}

export default Search
