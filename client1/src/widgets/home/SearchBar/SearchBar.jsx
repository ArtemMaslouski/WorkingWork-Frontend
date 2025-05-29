import React from 'react'
import './SearchBar.css'
import HelpFormСustomer from '../../../features/Forms/HelpFormСustomer/HelpFormСustomer'
import SearchComponent from '../../..//shared/ui/SearchComponent/SearchComponent'
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const {t} = useTranslation();

  return (
    <div className='searchBar_component'>
        <p>{t('didntFindServices')}</p>
        <SearchComponent/>
        <div className="help_form">
            <HelpFormСustomer/>
        </div>
    </div>
  )
}

export default SearchBar