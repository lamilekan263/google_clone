import React from 'react';
import { Link } from 'react-router-dom'
import "./SearchPage.css";
import { useStateValue } from '../../reducer/StateProvider'
import useGoogleSearch from '../../useGoogleSearch';
import response from '../../response';
import SearchInput from '../../component/searchInput/SearchInput';

function Search() {

    const [{ term }, dispatch] = useStateValue()
    // const { data } = useGoogleSearch(term)

    // https://developers.google.com/custom-search/v1/using_rest
    // https://cse.google.com/cse/create/new

    const data = response
    console.log(data)
    
     return (
        <div className='searchPage'>
            <div className='.searchPage__header'>
                 <Link to='/'>
                     <img className='searchPage__logo'
                         src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                         alt='google logo'
                     />
                 </Link>
                 <div className="searchPage__headerBody">
                     <SearchInput hideButtons/>
                 </div>
            </div>
            <div className='searchPage__result'>

            </div>
        </div> 
    )
}

export default Search
