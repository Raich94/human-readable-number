module.exports = function toReadable (number) {

    let toTen = ['zero', 'one', 'two', 'three', 'four',   'five', 'six', 'seven', 'eight', 'nine'];
    let toTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let toHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    number = number.toString();
  
    if (number.length == 1) {
      result = toTen[number];
    }else if (number.length == 2 && number.slice(0, 1) == 1) {
      result = toTwenty[number.slice(-1)];
    }else if (number.length == 2 && number.slice(-1) == 0) {
      result = toHundred[number.slice(0, 1)];
    }else if (number.length == 2 && number.slice(0, 1) != 1 && number.slice(-1) != 0) {
      result = toHundred[number.slice(0, 1)] + ' ' + toTen[number.slice(-1)];
    }else if (number.length == 3 && number.slice(1, 2) == 1) {
      result = toTen[number.slice(0, 1)] + ' hundred ' + toTwenty[number.slice(-1)];
    }else if (number.length == 3 && number.slice(1, 2) == 0 && number.slice(-1) == 0) {
      result = toTen[number.slice(0, 1)] + ' hundred';
    }else if (number.length == 3 && number.slice(1, 2) == 0 && number.slice(-1) != 0) {
      result = toTen[number.slice(0, 1)] + ' hundred ' + toTen[number.slice(-1)];
    }else if (number.length == 3 && number.slice(1, 2) != 0 && number.slice(-1) == 0){
        result = toTen[number.slice(0, 1)] + ' hundred ' + toHundred[number.slice(1, 2)];
    }else {
      result = toTen[number.slice(0, 1)] + ' hundred ' + toHundred[number.slice(1, 2)] + ' ' + toTen[number.slice(-1)];
    }
  
  return result
}
