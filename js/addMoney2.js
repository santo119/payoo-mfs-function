

document.getElementById('addMoney-btn')
.addEventListener('click', function(event){
    event.preventDefault()

    const addMoney = getInputFieldValueById('addMoney-input')
    const pinNumber = getInputFieldValueById('input-pin')
    console.log('add money is', addMoney, pinNumber)

    if(isNaN(addMoney)){
        alert('failed to add number')
        return
    }

    // verify pin number
    if(pinNumber ===  1234){
        const balance = textFieldValueById('balance-account')
        const newBalance= balance + addMoney
        document.getElementById('balance-account').innerText = newBalance

        // add to transaction history
        const p = document.createElement('p')
        p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}
        `

        // should be a common function
        document.getElementById('transaction-section').appendChild(p)
    }
    else{
        alert('wrong pin number')
    }

})
