export const filterTasks = (tasks, filters) => {
  const { category, subcategory, addressFrom, addressTo, startDate, endDate } = filters;

  return tasks.filter((task) => {
    const matchCategory = category ? task.Category === category : true;
    const matchSubcategory = subcategory ? task.Subcategory === subcategory : true;
    const matchAddressTo = addressTo
      ? task.Address.toLowerCase().includes(addressTo.toLowerCase())
      : true;
    const matchAddressFrom = addressFrom
      ? task.AddressFrom && task.AddressFrom.toLowerCase().includes(addressFrom.toLowerCase())
      : true;

    // Преобразуем даты в объекты Date и устанавливаем время на начало дня
    const taskBeginDate = new Date(task.BeginAt);
    taskBeginDate.setHours(0, 0, 0, 0);
    
    const start = startDate ? new Date(startDate) : null;
    if (start) start.setHours(0, 0, 0, 0);
    
    const end = endDate ? new Date(endDate) : null;
    if (end) end.setHours(23, 59, 59, 999);

    const matchDateRange = (() => {
      if (start && end) {
        return taskBeginDate >= start && taskBeginDate <= end;
      }
      if (start) {
        return taskBeginDate >= start;
      }
      if (end) {
        return taskBeginDate <= end;
      }
      return true;
    })();

    return (
      matchCategory &&
      matchSubcategory &&
      matchAddressTo &&
      matchAddressFrom &&
      matchDateRange
    );
  });
};