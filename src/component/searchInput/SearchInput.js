import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../../reducer/StateProvider'


import './SearchInput.css'

const SearchInput = ({ hideButtons }) => {
    const [ {}, dispatch ] = useStateValue()
    const [input, setInput] = useState('');
    const history = useHistory()
    const search = e  => {
        e.preventDefault()


        history.push('/search')
    }
    return (
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search__buttons">
            <Button onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search__buttons">
            <Button
              className="searchbuttonsHidden"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="searchbuttonsHidden" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    );
}
 
export default SearchInput
