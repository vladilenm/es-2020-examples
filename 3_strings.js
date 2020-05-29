const start = '       Hello Youtube '
const end = 'This is new JavaScript features          '

// console.log(start.trimStart() + end.trimEnd())
// console.log((start + end).trim())

// console.log('vk'.padStart(6, 'www.'))
// console.log('vk'.padEnd(6, '.com'))

// ===========

function tag(strings, name, age) {
  const [s1, s2, s3] = strings
  const ageStr = age > 42 ? 'старший' : 'младшим'
  return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
  name: 'Максим',
  age: 50
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`

console.log(output)