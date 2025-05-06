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
  
      const taskBeginDate = new Date(task.BeginAt.slice(0, 10));
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
  
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
  