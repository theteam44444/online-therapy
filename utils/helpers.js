module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_date_time: (date) => {
    let hours1 = new Date(date).getHours();
    let min1 = new Date(date).getMinutes();
    if(min1 < 10){ 
      min1 = '0' + min1;
    }
    if(hours1 > 12) {
      hours1 = hours1 - 12;
      hoursMin = hours1 + ':' + min1 + ' PM'
    } else {
      hours1 = hours1;
      hoursMin = hours1 + ':' + min1 + ' AM'
    }
    
    return `${hoursMin} on ${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}  `
  }
};
