const fs = require('fs');

let data = [
  {
    "name": "John Smith",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Jane Doe",
    "age": 25,
    "city": "Los Angeles"
  }
];

let jsonData = JSON.stringify(data);

fs.writeFile('data.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
