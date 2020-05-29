console.log('I am module.js')

const privateKey = 'primate'

export const SECRET_KEY = 42

export default class Person {
  constructor(name) {
    this.name = name
  }
}