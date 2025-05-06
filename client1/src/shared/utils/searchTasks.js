
export const searchTasks = (tasks, query) => {
    if (!query) return tasks;
  
    const lowerCaseQuery = query.toLowerCase();
  
    return tasks.filter((task) =>
      (task.Category && task.Category.toLowerCase().includes(lowerCaseQuery)) ||
      (task.Subcategory && task.Subcategory.toLowerCase().includes(lowerCaseQuery))
    );
  };
  