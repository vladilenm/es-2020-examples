const bill1 = {
  bank: {
    name: 'My Bank',
    amount: {
      value: 1000,
      currency: 'RUB'
    }
  }
}

const bill2 = {
  bank: {}
}

function getBillValueFrom(bill) {
  // return bill.bank.amount.value
  // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
  // 	? bill.bank.amount.value
  // 	: undefined
  return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1))
console.log(getBillValueFrom(bill2))