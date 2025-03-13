import { useState, useEffect } from 'react';
import serviceDetails from '../../model/serviceDetails';

const useOrderForm = (selectedService, selectedSubcategory) => {
    
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [category, setCategory] = useState(selectedService || '');
    const [subcategory, setSubcategory] = useState(selectedSubcategory || '');
    const [addressFrom, setAddressFrom] = useState('');
    const [addressTo, setAddressTo] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
            setCategories(Object.keys(serviceDetails));
            if (selectedService) {
                setSubcategories(serviceDetails[selectedService]?.links || []);
            }
            if (selectedSubcategory) {
                setSubcategory(selectedSubcategory);
            }
        }, [selectedService, selectedSubcategory]);
    
        const handleCategoryChange = (e) => {
            const selectedCategory = e.target.value;
            setCategory(selectedCategory);
            setSubcategories(serviceDetails[selectedCategory]?.links || []);
            setSubcategory('');
        };


        return{
            categories,
            subcategories,
            category,
            subcategory,
            addressFrom,
            addressTo,
            startDate,
            endDate,
            description,
            setCategory,
            setSubcategory,
            setAddressFrom,
            setAddressTo,
            setStartDate,
            setEndDate,
            setDescription,
            handleCategoryChange
        }
}

export default useOrderForm;