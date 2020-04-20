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





function getHigherTransactionByType(typeTransaction) {
  let maxNumber = 0;
  for(transaction of user.transactions){
    if(transaction.value > maxNumber && transaction.type == typeTransaction){
      maxNumber = transaction.value;
      maxTransaction = transaction; //objeto que a função vai retornar no final
    }
  }
  return console.log(maxTransaction);
}

function getAverageTransactionValue(transactions){
  sum = 0
  for (let i = 0; i < user.transactions.length; i ++){
    sum += user.transactions[i].value
  }
  const average = sum / user.transactions.length

return console.log(`${average}`)
}

function getTransactionsCount() {
  let count = { credit: 0, debit: 0}
  for(let transaction of user.transactions){
    if (transaction.type == 'credit'){
      count.credit += 1
    }
    else{
      count.debit +=1
    }
  }
  console.log(count)
}


createTransaction('credit', 100)
createTransaction('debit', 50)
createTransaction("credit", 50 )
createTransaction("credit", 120 )
createTransaction("debit", 80 )
createTransaction("debit", 30 )

console.log(user)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')


getAverageTransactionValue()

getTransactionsCount()

