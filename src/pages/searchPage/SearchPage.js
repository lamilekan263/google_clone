import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
       <div className="searchPage">
         <div className=".searchPage__header">
           <Link to="/">
             <img
               className="searchPage__logo"
               src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
               alt="google logo"
             />
           </Link>
           <div className="searchPage__headerBody">
             <SearchInput hideButtons />
             <div className="searchPage__options">
               <div className="searchPage__optionsLeft">
                 <div className="searchPage__option">
                   <SearchIcon />
                   <Link to="/all">All</Link>
                 </div>
                 <div className="searchPage__option">
                   <DescriptionIcon />
                   <Link to="/news">News</Link>
                 </div>
                 <div className="searchPage__option">
                   <ImageIcon />
                   <Link to="/images">Images</Link>
                 </div>
                 <div className="searchPage__option">
                   <LocalOfferIcon />
                   <Link to="/shopping">Shopping</Link>
                 </div>
                 <div className="searchPage__option">
                   <RoomIcon />
                   <Link to="/maps">maps</Link>
                 </div>
                 <div className="searchPage__option">
                   <MoreVertIcon />
                   <Link to="/more">more</Link>
                 </div>
               </div>
               <div className="searchPage__optionsRight">
                 <div className="searchPage__option">
                   <Link to="/settings">Settings</Link>
                 </div>
                 <div className="searchPage__option">
                   <Link to="/tools">Tools</Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="searchPage__result"></div>
       </div>
     );
}

export default Search
