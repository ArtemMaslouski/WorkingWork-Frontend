import { useState, useEffect } from 'react';
import serviceDetails from '../../model/serviceDetails';

const useOrderForm = (selectedService, selectedSubcategory) => {
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(true);
        // Simulate loading delay
        setTimeout(() => {
            setCategories(Object.keys(serviceDetails));
            if (selectedService) {
                setSubcategories(serviceDetails[selectedService]?.links || []);
            }
            if (selectedSubcategory) {
                setSubcategory(selectedSubcategory);
            }
            setIsLoading(false);
        }, 500);
    }, [selectedService, selectedSubcategory]);
    
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubcategories(serviceDetails[selectedCategory]?.links || []);
        setSubcategory('');
    };

    return {
        isLoading,
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