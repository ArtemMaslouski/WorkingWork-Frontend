// components/SearchAndFilter.js
import React, { useState } from 'react';
import InputService from '../InputService/InputService';
// import Button from '../shared/ui/Button/Button';
// import { filterTasks } from '../../../shared/utils/filterTask'
import { searchTasks } from '../../utils/searchTasks';
import Filter from '../../../features/filter/Filter'
import serviceDetails from '../../../pages/CreatingTask/model/serviceDetails';

const SearchAndFilter = ({ tasks, onFilterApply, onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchClick = () => {
    const results = searchTasks(tasks, searchQuery);
    onSearchResults(results);
  };

  return (
    <div className="place_for_find_task">
      <h1>Все задания</h1>
      <InputService
        placeholder="Например, требуется курьер, доставить товар"
        onFilterClick={() => setIsFilterOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchClick={handleSearchClick}
      />
      <Filter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterApply={onFilterApply}
        serviceDetails={serviceDetails}
      />
    </div>
  );
};

export default SearchAndFilter;
