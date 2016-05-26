const user = {
  first: 'Michael',
  last: 'Jordan'
}
const anotherUser = {
  ...user,
  last: 'Knight'
}
// { first: 'Michael', last: 'Knight '}
const complexObj = {
  number: 1,
  data: [1, 2, 3]
}
const anotherComplexObj = {
  ...complexObj,
  data: [ ...complexObj.data, 4 ]
}
//{ number: 1, data: [1, 2, 3, 4] }