import { useState, useEffect } from 'react';
import serviceDetails from '../../model/serviceDetails';
import { useTranslation } from 'react-i18next';

const useOrderForm = (selectedService, selectedSubcategory) => {
    const { t, i18n } = useTranslation();
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

    
    const updateCategories = () => {
        const translatedCategories = Object.keys(serviceDetails).map(key => {
            const serviceKey = key.split('.')[1];
            return {
                key: serviceKey,
                translatedName: t(`services.${serviceKey}`)
            };
        });
        setCategories(translatedCategories);
    };

    const updateSubcategories = (categoryKey) => {
        if (categoryKey) {
            const serviceKey = `services.${categoryKey}`;
            const subcats = serviceDetails[serviceKey]?.links.map(link => {
                const subKey = link.name.split('.').pop();
                return {
                    key: subKey,
                    translatedName: t(link.name)
                };
            }) || [];
            setSubcategories(subcats);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        try {
            updateCategories();

            if (selectedService) {
                const categoryKey = categories.find(cat => cat.translatedName === selectedService)?.key;
                if (categoryKey) {
                    setCategory(selectedService);
                    updateSubcategories(categoryKey);
                }
            }

            if (selectedSubcategory) {
                setSubcategory(selectedSubcategory);
            }
        } catch (error) {
            console.error('Error in useOrderForm:', error);
        } finally {
            setIsLoading(false);
        }
    }, [selectedService, selectedSubcategory]);

    // Отдельный эффект для обновления переводов при изменении языка
    useEffect(() => {
        updateCategories();
        if (category) {
            const categoryKey = categories.find(cat => cat.translatedName === category)?.key;
            if (categoryKey) {
                updateSubcategories(categoryKey);
            }
        }
    }, [i18n.language]);

    const handleCategoryChange = (value) => {
        console.log('handleCategoryChange called with:', value);
        setCategory(value);
        setSubcategory('');
        
        try {
            const categoryKey = categories.find(cat => cat.translatedName === value)?.key;
            console.log('Found category key:', categoryKey);
            
            if (categoryKey) {
                updateSubcategories(categoryKey);
            }
        } catch (error) {
            console.error('Error in handleCategoryChange:', error);
        }
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