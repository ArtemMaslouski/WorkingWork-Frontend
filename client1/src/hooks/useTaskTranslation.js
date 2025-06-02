import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translateText } from '../services/translateService';

export const useTaskTranslation = (tasks) => {
  const { i18n } = useTranslation();
  const [translatedTasks, setTranslatedTasks] = useState([]);

  useEffect(() => {
    const translateTasks = async () => {
      if (!tasks || tasks.length === 0) {
        setTranslatedTasks([]);
        return;
      }

      if (i18n.language === 'ru') {
        setTranslatedTasks(tasks);
        return;
      }

      try {
        const translatedTasksData = await Promise.all(
          tasks.map(async (task) => {
            const [translatedCategory, translatedSubcategory, translatedDescription, translatedAddress, translatedAddressEnd] = await Promise.all([
              translateText(task.Category || '', i18n.language),
              translateText(task.Subcategory || '', i18n.language),
              translateText(task.Description || '', i18n.language),
              translateText(task.Address || '', i18n.language),
              translateText(task.AddressEnd || '', i18n.language)
            ]);

            return {
              ...task,
              Category: translatedCategory,
              Subcategory: translatedSubcategory,
              Description: translatedDescription,
              Address: translatedAddress,
              AddressEnd: translatedAddressEnd
            };
          })
        );

        setTranslatedTasks(translatedTasksData);
      } catch (error) {
        console.error('Task translation failed:', error);
        setTranslatedTasks(tasks);
      }
    };

    translateTasks();
  }, [tasks, i18n.language]);

  return { translatedTasks };
}; 