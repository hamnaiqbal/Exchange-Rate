const currency1=document.getElementById('currency-one');
const amount1=document.getElementById('amount-one');
const swap=document.getElementById('swap')
const currency2=document.getElementById('currency-two');
const amount2=document.getElementById('amount-two');
const rateEl=document.getElementById('rate');


function exchangeRate(){
    const currency_amount1=currency1.value;
    const currency_amount2=currency2.value;
    console.log(currency_amount1,currency_amount2)
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_amount1}`)
    .then(res=>res.json())
    .then(data=>{
        const rate=data.rates[currency_amount2];
        console.log(rate);

        rateEl.innerText=rate;
        amount2.value=amount1.value*rate;
    });
    

};



currency1.addEventListener('change',exchangeRate);
amount1.addEventListener('input',exchangeRate);
currency2.addEventListener('change',exchangeRate);
amount2.addEventListener('change',exchangeRate);



swap.addEventListener('click',()=>{
    const temp=currency1.value;
    currency1.value=currency2.value;
    currency2.value=temp;
    exchangeRate();
})

exchangeRate();