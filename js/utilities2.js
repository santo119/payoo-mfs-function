
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    console.log(typeof(inputNumber))
    return inputNumber
}


function textFieldValueById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)

    return textNumber

}

function showSectionById(id){
    document.getElementById('addMoney-section').classList.add('hidden')
    document.getElementById('cashOut-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden')

}