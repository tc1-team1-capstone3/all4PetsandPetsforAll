<h1>API Documentation</h1>
This API is for the All4PetsAndPetsForAll API.  It will show you how to...
<ul>
<li>Add products to the inventory</li>
<li>Add quantity to the products in inventory</li>
</ul>
Base URL: localhost:8080/products
<ol>
<li>
<h3>Field Information</h3>
<table>
<tr>
<th>Name</th> <th>Type</th> <th>Description</th> <th>Required</th>
</tr>
<td>sku</td> <td>Long</td> <td>This is a number to uniquely identify a specific product</td> <td>Yes</td>
<tr>
<td>name</td> <td>String</td> <td>This is the name of the item to be stored</td> <td>No</td>
</tr>
<tr>
<td>description</td> <td>String</td> <td>This is a description of the item to be stored</td> <td>No</td>
</tr>
<tr>
<td>img_url</td> <td>String</td> <td>This is to show the URL of image file to be displayed</td> <td>No</td>
</tr>
<tr>
<td>price</td> <td>Double</td> <td>This is the price of the item</td> <td>No</td>
</tr>
<tr>
<td>quantity</td> <td>Integer</td> <td>This is the quantity of the item in stock</td> <td>No</td>
</tr>
</table>
</li>
<li>
<h3>Adding data to the database</h3>
Adding data to the database is as easy as sending a POST message to the Base URL with a JSON containing the necessary information.  As indicated above, the only information that is <strong>REQUIRED</strong> is the "sku" field.  So, for example if you sent a POST request with the code below, it will create an entry in the database with that a <code>sku</code> of 9 and all other NULLs for all other fields.
<pre><code>{
    "sku" : 9
}</code></pre>
For more detailed POSTs, simply add more data.  For example...
<pre><code>{
    "sku" : 27,
    "description" : "A delicious box of 12 scrumptious chocolate bites",
    "img_url" : "C:/Images/Box_of_chocolates.jpg",
    "name" : "Box of chocolates",
    "price" : 12.99,
    "quantity" : 37
}</code></pre>
</li>
</ol>


