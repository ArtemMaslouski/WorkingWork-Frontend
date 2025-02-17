import React from 'react'
import './SearchBar.css'
import HelpForm from '../../../features/HelpForm/HelpForm'
import SearchComponent from '../../..//shared/ui/SearchComponent/SearchComponent'

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