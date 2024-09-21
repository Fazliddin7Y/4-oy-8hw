function isComposite(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return true;
      }
    }
    return false;
  }
  
  console.log('1 dan 50 gacha bo\'lgan murakkab sonlar:');
  for (let i = 2; i <= 50; i++) {
    if (isComposite(i)) {
      console.log(i);
    }
  }
  



  let num = 1122334;

  function sumDuplicateDigits(number) {
    let digitCount = {};
    let sum = 0;
  
    number.toString().split('').forEach(digit => {
      digitCount[digit] = (digitCount[digit] || 0) + 1;
    });
  
    for (let digit in digitCount) {
      if (digitCount[digit] > 1) {
        sum += parseInt(digit) * digitCount[digit];
      }
    }
  
    return sum;
  }
  
  console.log('Bir-biriga teng bo\'lgan raqamlar yig\'indisi:', sumDuplicateDigits(num));
  




  let n = 8;

console.log(`${n} dan kichik toq sonlar:`);
for (let i = n - 1; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}



console.log('1 dan 10 gacha bo\'lgan sonlarning kublari:');
for (let i = 1; i <= 10; i++) {
  console.log(i ** 3);
}

