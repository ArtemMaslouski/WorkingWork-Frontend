import React, { useEffect, useState, useRef } from 'react';
import Button from '../../shared/ui/Button/Button';
import '../filter/Filter.css'
import { useTranslation } from 'react-i18next';
import serviceDetails from '../../pages/CreatingTask/model/serviceDetails';

const RefreshTasks = ({ isOpen, onClose, onSubmit, initialData }) => {
  const modalRef = useRef(null);
  const { t } = useTranslation();
  const today = new Date().toISOString().split('T')[0];

  const [refresh, setRefresh] = useState({
    category: '',
    subcategory: '',
    addressTo: '',
    addressFrom: '',
    startDate: '',
    endDate: '',
  });

  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const getCategoryKey = (translatedName) => {
    return Object.keys(serviceDetails).find(key => 
      t(key) === translatedName
    );
  };

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

  useEffect(() => {
    updateCategories();
  }, []);

  useEffect(() => {
    if (initialData) {
      setRefresh({
        category: initialData.Category || '',
        subcategory: initialData.Subcategory || '',
        addressTo: initialData.AddressEnd || '',
        addressFrom: initialData.Address || '',
        startDate: initialData.BeginAt ? initialData.BeginAt.slice(0, 10) : '',
        endDate: initialData.EndAt ? initialData.EndAt.slice(0, 10) : '',
      });
      setDescription(initialData.Description || '');

      // Обновляем подкатегории при инициализации
      const categoryKey = getCategoryKey(initialData.Category);
      if (categoryKey) {
        updateSubcategories(categoryKey);
      }
    }
  }, [initialData]);

  useEffect(() => {
    if (refresh.category) {
      const categoryKey = getCategoryKey(refresh.category);
      if (categoryKey) {
        updateSubcategories(categoryKey);
      }
    }
  }, [refresh.category]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = () => {
    onSubmit({
      ...initialData,
      id: initialData.id,
      Category: refresh.category,
      Subcategory: refresh.subcategory,
      Address: refresh.addressFrom,
      AddressEnd: refresh.addressTo,
      BeginAt: refresh.startDate,
      EndAt: refresh.endDate,
      Description: description,
    });
    onClose();
  };

  const handleReset = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="filter-modal">
      <div className="filter-content" ref={modalRef}>
        <h2>{t('editTask')}</h2>

        <div className="filter-field">
          <label>{t('category')}:</label>
          <select
            value={refresh.category}
            onChange={(e) => setRefresh({ ...refresh, category: e.target.value })}
          >
            <option value="">-- {t('selectCategory')} --</option>
            {categories.map((cat) => (
              <option key={cat.key} value={cat.translatedName}>
                {cat.translatedName}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>{t('subcategory')}:</label>
          <select
            value={refresh.subcategory}
            onChange={(e) => setRefresh({ ...refresh, subcategory: e.target.value })}
            disabled={!refresh.category}
          >
            <option value="">-- {t('selectSubcategory')} --</option>
            {subcategories.map((subcat) => (
              <option key={subcat.key} value={subcat.translatedName}>
                {subcat.translatedName}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>{t('address')}:</label>
          <input
            type="text"
            value={refresh.addressFrom}
            onChange={(e) => setRefresh({ ...refresh, addressFrom: e.target.value })}
          />
        </div>

        {refresh.category === t('services.courier') && (
          <div className="filter-field">
            <label>{`${t('address')} ${t('to')}`}:</label>
            <input
              type="text"
              value={refresh.addressTo}
              onChange={(e) => setRefresh({ ...refresh, addressTo: e.target.value })}
            />
          </div>
        )}

        <div className="filter-field">
          <label>{t('startDate')}:</label>
          <input
            type="date"
            value={refresh.startDate}
            min={today}
            onChange={(e) => setRefresh({ ...refresh, startDate: e.target.value })}
          />
        </div>

        <div className="filter-field">
          <label>{t('endDate')}:</label>
          <input
            type="date"
            value={refresh.endDate}
            min={refresh.startDate || today}
            onChange={(e) => setRefresh({ ...refresh, endDate: e.target.value })}
          />
        </div>

        <div className="description-field">
          <textarea
            name="taskDescription"
            className="textarea-field"
            placeholder={t('describeTheDetails')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="filter-buttons">
          <Button
            onClick={handleReset}
            text={t('Cancel')}
            style={{
              backgroundColor: 'rgba(215, 201, 164)',
              color: 'black',
              border: '2px solid #998756',
              fontWeight: 'bold',
              width: '50%'
            }}
          />
          <Button
            onClick={handleSubmit}
            text={t('update')}
            style={{
              backgroundColor: 'rgba(215, 201, 164)',
              color: 'black',
              border: '2px solid #998756',
              fontWeight: 'bold',
              width: '50%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RefreshTasks;
