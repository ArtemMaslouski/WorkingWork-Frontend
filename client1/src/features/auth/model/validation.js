export const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!email) {
      console.log('Пожалуйста, введите ваш email');
      return false;
    }
    if (!emailRegex.test(email)) {
        console.log('Введите корректный адрес электронной почты');
      return false;
    }
    return true;
  };
  
