alert('Ecco i numeri' + '' + casualNumbers);
console.log('casual numbers', casualNumbers);
let sussesfulNumber = [];
setTimeout(numberGenerate, 30000);
function numberGenerate() {
    let userArray = [];
    for (let i = 1; i <= 5; i++) {
        let userNumber = parseInt(prompt('Inserisci il primo numero visto in precendenza')); userArray.push(userNumber);
    }
    console.log('userNumbers', userArray);
    for (let i = 0; i < userArray.length; i++) {
        if (casualNumbers.includes(userArray[i])) { sussesfulNumber.push(userArray[i]); }
    } console.log('successfull', sussesfulNumber);
};