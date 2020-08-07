<h1>API Documentation</h1>
This API is for the All4PetsAndPetsForAll API.  It will show you how to...
<ul>
<li>Add products to the inventory</li>
<li>Add quantity to the products in inventory</li>
<li>Get the information related to a single product in inventory</li>
<li>Get the information related to ALL products in inventory</li>
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
<li>
<h3>Adding quantity to an item in the database</h3>
To add quantity to an already-existing item in the database, simply send a PUT request with the SKU and the quantity to be added in the body of the file.  For example, if you wanted to add 5 more boxes of chocolates to the above example, you would just send a PUT request to the Base URL with the following body...
<pre><code>{
    "sku" : 27,
    "quantity" : 5
}</code></pre>
The new quantity wouuld then be 42.
</li>
<li>
<h3>Getting information about a specific item in the database</h3>
To get all the information about a specific item in the database, you would send a GET request to the Base URL with the "/sku/*item SKU* appended.  For example, if you wanted to retrieve the information about ONLY the box of chocolates, you would send a GET request to: localhost:8080/products/sku/27  It is not necessary to send a body with this GET request.

The return value will be a JSON that looks like this....
<pre><code>{
    "sku" : 27,
    "description" : "A delicious box of 12 scrumptious chocolate bites",
    "img_url" : "C:/Images/Box_of_chocolates.jpg",
    "name" : "Box of chocolates",
    "price" : 12.99,
    "quantity" : 42
}</code></pre>
</li>
<li>
<h3>Getting information about ALL items in the database</h3>
To get all of the information about ALL of the items in the database, you would send a GET request to the Base URL with nothing added.  If you send a GET request to: localhost:8080, it will return the following...

<pre><code>
{
    "sku" : 9,
    "description" : null,
    "img_url" : null,
    "name" : null,
    "price" : null,
    "quantity" : null
}
{
    "sku" : 27,
    "description" : "A delicious box of 12 scrumptious chocolate bites",
    "img_url" : "C:/Images/Box_of_chocolates.jpg",
    "name" : "Box of chocolates",
    "price" : 12.99,
    "quantity" : 42
}</code></pre>
</li>
</ol>
Please keep in mind that this is just the documentation for the capabilites that the program has at the moment this documentation is being written.  As the capabilities of the program gets more complex, this documentation will grow also to reflect those changes.

