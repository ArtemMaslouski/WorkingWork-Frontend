export const validateEmail = (Email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!Email) {
      console.log('Пожалуйста, введите ваш email');
      return false;
    }
    if (!emailRegex.test(Email)) {
        console.log('Введите корректный адрес электронной почты');
      return false;
    }
    return true;
  };
  
export const validatePassword =(Password) => {
  const minLength = 8;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(!Password){
    console.log('Введите пароль')
  }
  if(Password.length < minLength){
    console.log('Длина пароля должна соответсвтовать минимальной длине')

  }if (!passwordRegex.test(Password)) {
    console.log('Пароль должен содержать заглавные буквы, строчные буквы, цифры и специальные символы');
    return false;
}
return true;
}
