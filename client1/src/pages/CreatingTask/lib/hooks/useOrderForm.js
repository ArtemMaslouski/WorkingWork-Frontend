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

    // Функция для получения ключа категории по переведенному названию
    const getCategoryKey = (translatedName) => {
        return Object.keys(serviceDetails).find(key => 
            t(key) === translatedName
        );
    };

    // Функция для получения ключа подкатегории по переведенному названию
    const getSubcategoryKey = (categoryKey, translatedName) => {
        if (!categoryKey || !serviceDetails[categoryKey]) return null;
        return serviceDetails[categoryKey].links.find(link => 
            t(link.name) === translatedName
        )?.name;
    };
    
    const updateCategories = () => {
        const translatedCategories = Object.keys(serviceDetails).map(key => ({
            key: key,
            translatedName: t(key)
        }));
        setCategories(translatedCategories);
    };

    const updateSubcategories = (categoryKey) => {
        if (!categoryKey || !serviceDetails[categoryKey]) {
            setSubcategories([]);
            return;
        }

        const subcats = serviceDetails[categoryKey].links.map(link => ({
            key: link.name,
            translatedName: t(link.name)
        }));
        setSubcategories(subcats);
    };

    // Эффект для инициализации категорий и подкатегорий
    useEffect(() => {
        setIsLoading(true);
        try {
            updateCategories();

            if (selectedService) {
                const categoryKey = getCategoryKey(selectedService);
                if (categoryKey) {
                    setCategory(selectedService);
                    updateSubcategories(categoryKey);
                }
            }

            if (selectedSubcategory) {
                setSubcategory(selectedSubcategory);
            }
        } catch (error) {
            console.error('Error in useOrderForm initialization:', error);
        } finally {
            setIsLoading(false);
        }
    }, [selectedService, selectedSubcategory]);

    // Эффект для обновления переводов при изменении языка
    useEffect(() => {
        updateCategories();
        if (category) {
            const categoryKey = getCategoryKey(category);
            if (categoryKey) {
                updateSubcategories(categoryKey);
            }
        }
    }, [i18n.language]);

    const handleCategoryChange = (value) => {
        setCategory(value);
        setSubcategory('');
        
        try {
            const categoryKey = getCategoryKey(value);
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