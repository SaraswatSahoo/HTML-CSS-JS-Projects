let number=0;let multiplier=1;
function calculate(num){
    number=number*multiplier+num;
    multiplier *= 10;
    document.querySelector('.calculation').innerHTML=number;
}