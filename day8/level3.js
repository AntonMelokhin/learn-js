//Execise 1
const personAccount = {
    firstName: 'Anton',
    lastName: 'Melokhin',

    incomes:{
        salary: 500,
        sideJob: 200
    },
    expenses: {
        rent: 100,
        food: 200,
        utilityBills: 50
    },
    totalIncome(){
        let total = 0;
        for(const income in this.incomes){
            total += this.incomes[income];
        }
        return total;
    },
    totalExpense(){
        let total = 0;
        for(const expense in this.expenses){
            total += this.expenses[expense];
        }
        return total;
    },
    addIncome(description, amount){
        this.incomes[description] = amount;
    },
    addExpense(description, amount){
        this.expenses[description] = amount;
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpense();
    },
    accountInfo(){
        return `
        Account Info
        ----------------------------------------
        Name: ${this.firstName} ${this.lastName}
        Total income: ${this.totalIncome()}
        Total expense: ${this.totalExpense()}
        Account balance: ${this.accountBalance()}
        ----------------------------------------
        `;
    }
};
console.log(personAccount.accountInfo());

//Execise 2
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

