const user = {
    name: 'mariana',
    transactions: [],
    balance: 0
}

function createTransaction(type, value){
    user.transactions.push({
    type : type, 
    value : value
    })

    if (type == 'credit')
    {user.balance = user.balance + value}
    if (type == 'debit')
    {user.balance = user.balance - value}

}

createTransaction('credit', 100)
createTransaction('debit', 50)

console.log(user)