import React from 'react'
import './SearchBar.css'
import HelpForm from '../../../components/HelpForm/HelpForm'
import SearchComponent from '../../../components/SearchComponent/SearchComponent'

const SearchBar = () => {
  return (
    <div className='searchBar_component'>
        <p>Не нашли нужную услугу? Используйте поиск!</p>
        <SearchComponent/>
        <div className="help_form">
            <HelpForm/>
        </div>
    </div>
  )
}

export default SearchBar