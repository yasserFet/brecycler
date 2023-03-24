fetch('http://localhost:3009/countries')
	.then(response => response.json())
	.then(data => console.log(data[100].photo))
	.catch(err => console.error(err));