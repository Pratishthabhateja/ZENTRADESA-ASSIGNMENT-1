// Fetch JSON data
fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
  .then(response => response.json())
  .then(data => {
    // Extract product details
    const products = data.products;

    // Sorting products based on popularity in descending order
    const sortedProducts = Object.values(products).sort((a, b) => b.popularity - a.popularity);

    // Displaying title and price ordered by popularity in the table
    const productData = document.getElementById('productData');

    sortedProducts.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.title}</td>
        <td>${product.price}</td>
      `;
      productData.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Error fetching or parsing data:', error);
  });
