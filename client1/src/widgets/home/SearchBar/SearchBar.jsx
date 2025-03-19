import React from 'react'
import './SearchBar.css'
import HelpFormСustomer from '../../../features/Forms/HelpFormСustomer/HelpFormСustomer'
import SearchComponent from '../../..//shared/ui/SearchComponent/SearchComponent'

const SearchBar = () => {
  return (
    <div className='searchBar_component'>
        <p>Не нашли нужную услугу? Используйте поиск!</p>
        <SearchComponent/>
        <div className="help_form">
            <HelpFormСustomer/>
        </div>
    </div>
  )
}

export default SearchBar