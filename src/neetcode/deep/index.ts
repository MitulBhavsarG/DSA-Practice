import { containsDuplicate } from './ArrayHashing/containsDuplicate'

function containsDuplicateTests() {
  console.log(containsDuplicate([1, 2, 3, 4, 1])) // true
  console.log(containsDuplicate([1, 2, 3, 4])) // false
}

export function deepTests() {
  containsDuplicateTests()
}
