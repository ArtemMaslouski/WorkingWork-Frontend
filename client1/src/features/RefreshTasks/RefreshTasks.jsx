import React, { useEffect, useState, useRef } from 'react';
import Button from '../../shared/ui/Button/Button';
import '../filter/Filter.css'
import { useTranslation } from 'react-i18next';

const RefreshTasks = ({ isOpen, onClose, onSubmit, serviceDetails, initialData, onClick }) => {
  const modalRef = useRef(null);
  const categories = Object.keys(serviceDetails);
  const [subcategories, setSubcategories] = useState([]);
  const today = new Date().toISOString().split('T')[0];
  const { t } = useTranslation();

  const [refresh, setRefresh] = useState({
    category: '',
    subcategory: '',
    addressTo: '',
    addressFrom: '',
    startDate: '',
    endDate: '',
  });

  const [description, setDescription] = useState('');

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
    }
  }, [initialData]);  

  useEffect(() => {
    if (refresh.category && serviceDetails[refresh.category]) {
      setSubcategories(serviceDetails[refresh.category].links || []);
    } else {
      setSubcategories([]);
    }
  }, [refresh.category, serviceDetails]);

  useEffect(() => {//клик вне модалки
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
              <option key={cat} value={cat}>{cat}</option>
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
              <option key={subcat.name} value={subcat.name}>{subcat.name}</option>
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

        {refresh.category === 'Курьерские услуги' && (
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
            min={refresh.startDate || today} // конец не раньше начала
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
