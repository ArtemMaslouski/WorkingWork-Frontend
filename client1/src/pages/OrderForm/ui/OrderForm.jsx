import React from 'react';
import { useTranslation } from 'react-i18next';
import { useOrderForm } from '../lib/hooks/useOrderForm';
import { useLocation } from 'react-router-dom';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrderFormData } from '../model/slice/orderFormSlice';
import { useMediaQuery } from 'react-responsive';

const { TextArea } = Input;

const OrderForm = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const searchParams = new URLSearchParams(location.search);
    const selectedService = searchParams.get('service');
    const selectedSubcategory = searchParams.get('subcategory');

    const {
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
    } = useOrderForm(selectedService, selectedSubcategory);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            category,
            subcategory,
            addressFrom,
            addressTo,
            startDate,
            endDate,
            description
        };
        dispatch(setOrderFormData(formData));
        navigate('/order-form/step2');
    };

    if (isLoading) {
        return <div>{t('loading')}</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
                <label htmlFor="category">{t('category')}</label>
                <Select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    placeholder={t('selectCategory')}
                    style={{ width: '100%' }}
                >
                    {categories.map((cat) => (
                        <Select.Option key={cat.key} value={cat.translatedName}>
                            {cat.translatedName}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <div className="form-group">
                <label htmlFor="subcategory">{t('subcategory')}</label>
                <Select
                    id="subcategory"
                    value={subcategory}
                    onChange={(value) => setSubcategory(value)}
                    placeholder={t('selectSubcategory')}
                    style={{ width: '100%' }}
                    disabled={!category}
                >
                    {subcategories.map((subcat) => (
                        <Select.Option key={subcat.key} value={subcat.translatedName}>
                            {subcat.translatedName}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <div className="form-group">
                <label htmlFor="addressFrom">{t('address')}</label>
                <Input
                    id="addressFrom"
                    value={addressFrom}
                    onChange={(e) => setAddressFrom(e.target.value)}
                    placeholder={t('enterAddress')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="addressTo">{t('to')}</label>
                <Input
                    id="addressTo"
                    value={addressTo}
                    onChange={(e) => setAddressTo(e.target.value)}
                    placeholder={t('enterAddress')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="startDate">{t('startDate')}</label>
                <DatePicker
                    id="startDate"
                    value={startDate}
                    onChange={setStartDate}
                    style={{ width: '100%' }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="endDate">{t('endDate')}</label>
                <DatePicker
                    id="endDate"
                    value={endDate}
                    onChange={setEndDate}
                    style={{ width: '100%' }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">{t('description')}</label>
                <TextArea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t('describeTheDetails')}
                    rows={4}
                />
            </div>

            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                {t('SubmitAnApplication')}
            </Button>
        </form>
    );
};

export default OrderForm; 