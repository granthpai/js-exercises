/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total amount spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category is not in the object, add it with the current price
    // Otherwise, add the price to the existing total for that category
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      categoryTotals[category] += price;
    }
  });

  // Convert the object into an array of objects with the required format
  const result = Object.keys(categoryTotals).map(category => ({
    [category]: categoryTotals[category]
  }));

  return result;
}

// Example usage:
const transactions = [
  { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: '2023-01-01' },
  { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: '2023-01-02' },
  { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: '2023-01-03' },
  { itemName: 'Item4', category: 'Clothing', price: 80, timestamp: '2023-01-04' },
  { itemName: 'Item5', category: 'Electronics', price: 150, timestamp: '2023-01-05' }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
