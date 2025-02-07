  import { validateEmail } from "./validation";
  
  // Обработка отправки формы
  export const handleSubmit = (e, email) => {
    if (validateEmail(email)) {
      // Логика отправки email
      console.log('send email');
      return true; 
    }
    return false; 
  };
  