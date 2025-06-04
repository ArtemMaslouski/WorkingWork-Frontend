export const searchTasks = (tasks, query) => {
    if (!query) return tasks;
  
    const lowerCaseQuery = query.toLowerCase();
  
    return tasks.filter((task) => {
      const categoryMatch = task.Category && task.Category.toLowerCase().includes(lowerCaseQuery);
      const subcategoryMatch = task.Subcategory && task.Subcategory.toLowerCase().includes(lowerCaseQuery);
      const descriptionMatch = task.Description && task.Description.toLowerCase().includes(lowerCaseQuery);
      const addressMatch = task.Address && task.Address.toLowerCase().includes(lowerCaseQuery);
      const addressEndMatch = task.AddressEnd && task.AddressEnd.toLowerCase().includes(lowerCaseQuery);
    
      return categoryMatch || subcategoryMatch || descriptionMatch || addressMatch || addressEndMatch;
    });
};
  