function findProductPrice(products, name) {
  let left = 0
  let right = products.length - 1
  while (left <= right) {
    let mid = Math.floor((right+left)/2)
    if (products[mid].name < name) {
      left = mid + 1
    } else if (products[mid].name > name) {
      right = mid -1
    } else {
      return products[mid].price
    }
  }

  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
