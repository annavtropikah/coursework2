export function formatDate(date) {
    const endTime = new Date(date);
    // Берем разницу дат в секундах
    let delta = Math.floor((new Date()-endTime) / 1000);
    // Вычисляем количество ПОЛНЫХ дней
    let days = Math.floor(delta / 86400);
    // А теперь вычитаем из секунд количество дней, выраженных в секундах
    delta -= days * 86400;
    // В оставшихся секунд вычленяем количество полных часов
    let hours = Math.floor(delta / 3600) % 24;
    // Также их потом вычитаем, выразив в секундах
    delta -= hours * 3600;
    // Из оставшихся секунд берем минуты
    let minutes = Math.floor(delta / 60) % 60;
    // Опять вычитаем
    delta -= minutes * 60;
    // И наконец секунды
    // В теории  деление по модулю на 60 не обязателен
    let seconds = delta % 60;
    
  if(days>0){
    return `${days} дней назад`
  }
  if (hours>0) {
    return `${hours} часов назад`
  }
  if (minutes>0) {
    return `${minutes} минут назад`
  }
    return `${seconds} секунд назад`;
  } 