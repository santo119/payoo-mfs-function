
/**
 * 1.get from number input field
 * 2.document.
 */

document.getElementById('addMoney-btn')
.addEventListener('click', function(event){
    event.preventDefault()

    

    // getInputFieldValueById()

    // const addMoney = getInputFieldValueById()
    // console.log('addMoney value', addMoney)
    // const addMoney = document.getElementById('addMoney-input')
    // const addMoneyNumber = parseFloat(addMoney)

    const addMoney = getInputFieldValueById('addMoney-input')
    const pinNumber = getInputFieldValueById('input-pin')
    console.log('add money with parameter', addMoney,pinNumber)

})