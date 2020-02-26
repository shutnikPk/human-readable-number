module.exports = function toReadable(number) {

    const decads = {
        10: "ten",
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    const x10 = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const x = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    let hundr;
    let dec;
    let years;

    if (number >= 100) {
        if (number % 100 == 0) {
            hundr = x[Math.trunc(number / 100)];
            return hundr + " hundred";
        } else
        if (number % 10 == 0) {
            hundr = x[Math.trunc(number / 100)];
            number = number - Math.trunc(number / 100) * 100;
            dec = decads[number];
            return hundr + " hundred " + dec;
        } else
        if (number % 10 != 0 && number - Math.trunc(number / 100) * 100 < 20 && number - Math.trunc(number / 100) * 100 > 10) {
            hundr = x[Math.trunc(number / 100)];
            number = number - Math.trunc(number / 100) * 100;
            dec = x10[number];
            return hundr + " hundred " + dec;
        } else
        if (number % 10 != 0 && number - Math.trunc(number / 100) * 100 > 20) {
            hundr = x[Math.trunc(number / 100)];
            number = number - Math.trunc(number / 100) * 100;
            dec = decads[Math.trunc(number / 10)*10];
            number = number - Math.trunc(number / 10) * 10;
            years = x[number];
            return hundr + " hundred " + dec + " " + years;
        }else
            if (number % 10 != 0 && number - Math.trunc(number / 100) * 100 < 10){
                hundr = x[Math.trunc(number / 100)];
                number = number - Math.trunc(number / 100) * 100;
                years = x[number];
                return hundr + " hundred " + years;
            }
    }else
    if (number >= 20) {
        if (number % 10 == 0) {
            dec = decads[number];
            return  dec;
        } else
        if (number % 10 != 0) {            
            dec = decads[Math.trunc(number/10)*10];
            number = number - Math.trunc(number / 10) * 10;
            years = x[number];
            return dec + " " + years;
        }
    }else
    if (number < 20 && number>=10){
        if (number % 10 == 0) {
            dec = decads[number];
            return dec;
        } else
        if (number % 10 != 0){                
            dec = x10[number];
            return  dec;
        }
    }else
    if (number<  10 && number > 0){
        return years = x[number];
    }else
    if(number==0){
        return years='zero';
    }

}

/*
if (number >= 100) {
    hundr = Math.trunc(number / 100);
    number -= hundr * 100;
    hundr = x[hundr];
    if (number > 19) {
        dec = Math.trunc(number / 10);
        number -= dec * 10;
        dec = decads[dec * 10];
        years = x[number];
        return hundr + " hundred " + dec + " " + years ;
    }
    if (number > 10) {
        years = x10[number];
        return hundr + " hundred " + years;
    }
    if (number < 10) {
        years = x[number];
        return hundr + " hundred " + years;
    }
    if (number == 10) {
        years = x10[number];
        return hundr + " hundred " + years;
    }
}
  if (number > 19) {
      dec = Math.trunc(number / 10);
      number -= dec * 10;
      dec = decads[dec * 10];
      years = x[number];
      return (dec + " " + years);
  }
  if (number > 10){
      years = x10[number];
      return (years);
  }
  if (number<10){
      years = x[number];
      return (years);
  }
  if (number == 0) {
      years = 'zero';
  }
  */
