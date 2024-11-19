const productsData = JSON.parse(data);
console.log(typeof productsData);
res.setHeader('Content-Type', 'application/json');
res.json(productsData);