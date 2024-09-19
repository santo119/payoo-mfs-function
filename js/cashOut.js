

document.getElementById('cashOut-btn')
.addEventListener('click', function(event){
    event.preventDefault()
   
    const cashOut = getInputFieldValueById('cashOut-input')
    const pinNumber = getInputFieldValueById('cashOut-pin')
    console.log(cashOut,pinNumber)

    if(isNaN(cashOut)){
        alert('failed to CashOut')
        return
    }

    if(pinNumber === 1234){
        const balance = textFieldValueById('balance-account')

        if(cashOut > transferMoney){
            alert('you do not have enough balance')
            return

        }

        const transferMoney = balance - cashOut
        document.getElementById('balance-account').innerText = transferMoney

        // add to transaction history
        const div = document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.innerHTML = ` 
        <h4 class='text-2xl font-bold'>CashOut</h4>
        <p> withdraw ${cashOut} New Balance: ${transferMoney}</p>
        `
        document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('pin Number is wrong')
    }
   
})