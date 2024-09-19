
document.getElementById('AddMoney-form')
.addEventListener('click', function(event){
    event.preventDefault()

    showSectionById('addMoney-section')

})
document.getElementById('cashOut-form')
.addEventListener('click', function(event){
    event.preventDefault()

    showSectionById('cashOut-section')

})
document.getElementById('transferMoney-form')
.addEventListener('click', function(event){
    event.preventDefault()

    showSectionById('transaction-section')

})

